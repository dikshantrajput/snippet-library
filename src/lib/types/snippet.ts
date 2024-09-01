import type { Database } from "./supabase.database";

export type SnippetDbInterface = Database["private"]["Tables"]["snippets"]["Row"]
export interface CodeSnippetInterface {
  id: string;
  title: string;
  description: string;
  language: string;
  category: string;
  tags: string[];
  code: string;
  createdAt: string;
}