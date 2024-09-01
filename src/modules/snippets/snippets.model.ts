import BaseModel from "$lib/base.model";
import type { CodeSnippetInterface } from "$lib/types/snippet";
import { type QueryData } from "@supabase/supabase-js";

export default class SnippetModel extends BaseModel {
    constructor() {
        super();
        this.getSnippets = this.getSnippets.bind(this);
    }

    private prepareSnippetsForView<T>(rawSnippets: T) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const snippetWithTagsQuery = this.supabasePublicClient.from("snippets")
            .select("a:id")
            .select("*,tags:snippet_tags(tag:tags(id,name))");

        type SnippetWithTagsDb = QueryData<typeof snippetWithTagsQuery>;
        return (rawSnippets as SnippetWithTagsDb).map((snippet) => ({
            id: snippet.id,
            title: snippet.title,
            description: snippet.description || "",
            language: snippet.language,
            category: snippet.category || "",
            tags: (snippet.tags || [])?.map((snippetTag) =>
                snippetTag.tag?.name
            ).filter((tag) => tag !== undefined),
            code: snippet.code,
            createdAt: snippet.created_at || "",
        }));
    }

    async getSnippets(): Promise<CodeSnippetInterface[]> {
        const snippetWithTagsQuery = this.supabasePublicClient.from("snippets")
            .select("a:id")
            .select("*,tags:snippet_tags(tag:tags(id,name))");

        type SnippetWithTagsDb = QueryData<typeof snippetWithTagsQuery>;

        const { data, error } = await snippetWithTagsQuery;

        if (error) {
            throw Error("Error getting snippets");
        }

        const rawSnippets = data as SnippetWithTagsDb;

        return this.prepareSnippetsForView<SnippetWithTagsDb>(rawSnippets);
    }

    async searchSnippets(searchQuery: string): Promise<CodeSnippetInterface[]> {
        const searchSnippetWithTagsQuery = this.supabasePublicClient.rpc(
            "search_snippets",
            {
                search_text: searchQuery,
                limit_val: 100,
                offset_val: 0,
            },
        );

        const { data, error } = await searchSnippetWithTagsQuery;
        if (error) {
            throw Error("Error getting snippets");
        }
        type SnippetWithTagsDb = QueryData<typeof searchSnippetWithTagsQuery>;
        const rawSnippets = data as SnippetWithTagsDb;
        return this.prepareSnippetsForView<SnippetWithTagsDb>(rawSnippets);
    }
}
