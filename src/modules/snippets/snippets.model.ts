import BaseModel from "$lib/base.model";
import type { CodeSnippetInterface, CreateSnippetDbInterface } from "$lib/types/snippet";
import { type QueryData } from "@supabase/supabase-js";

interface SnippetWithTags {
    category: string | null;
    code: string;
    created_at: string | null;
    description: string | null;
    id: string;
    language: string;
    title: string;
    tags: string[];
}

export default class SnippetModel extends BaseModel {
    constructor() {
        super();
    }

    private prepareSnippetsForView<T extends SnippetWithTags[]>(
        rawSnippets: T,
    ) {
        return rawSnippets.map((snippet) => ({
            id: snippet.id,
            title: snippet.title,
            description: snippet.description || "",
            language: snippet.language,
            category: snippet.category || "",
            tags: snippet.tags || [],
            code: snippet.code,
            createdAt: snippet.created_at || "",
        }));
    }

    async getSnippets(): Promise<CodeSnippetInterface[]> {
        const snippetWithTagsQuery = this.supabasePublicClient.from("snippets")
            .select("*,tags:snippet_tags(tag:tags(id,name))");

        type SnippetWithTagsDb = QueryData<typeof snippetWithTagsQuery>;

        const { data, error } = await snippetWithTagsQuery;

        if (error) {
            throw Error("Error getting snippets");
        }

        const rawSnippets = data as SnippetWithTagsDb;
        const rawSnippetsWithTagsStructure: SnippetWithTags[] = rawSnippets.map(
            (snippet) => {
                const tags = (snippet.tags || []).map((tag) => tag?.tag?.name)
                    .filter((tag) => tag !== undefined);
                return {
                    ...snippet,
                    tags,
                };
            },
        );

        return this.prepareSnippetsForView(rawSnippetsWithTagsStructure);
    }

    async searchSnippets(
        searchQuery: string,
        language: string,
        tags?: string[],
    ): Promise<CodeSnippetInterface[]> {
        const searchFilterQuery: {
            limit_val: number;
            offset_val: number;
            search_text: string;
            lang?: string;
            tag_names?: string[];
        } = {
            search_text: "",
            limit_val: 100,
            offset_val: 0,
        };

        if (searchQuery) {
            searchFilterQuery["search_text"] = searchQuery;
        }

        if (language) {
            searchFilterQuery["lang"] = language;
        }

        if (tags && tags.length) {
            searchFilterQuery["tag_names"] = tags;
        }

        const searchSnippetWithTagsQuery = this.supabasePublicClient.rpc(
            "search_snippets",
            searchFilterQuery,
        );

        const { data, error } = await searchSnippetWithTagsQuery;
        if (error) {
            throw Error("Error searching snippets");
        }
        type SnippetWithTagsDb = QueryData<typeof searchSnippetWithTagsQuery>;
        const rawSnippets = data as SnippetWithTagsDb;

        return this.prepareSnippetsForView(rawSnippets);
    }

    async createSnippetSuggestion(payload: CreateSnippetDbInterface){
        const { error } = await this.supabasePublicClient.from("snippet_suggestions").insert(payload);

        if (error) {
            throw Error("Error creating snippet suggestion");
        }
    }
}
