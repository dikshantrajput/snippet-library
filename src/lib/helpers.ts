import type { CodeSnippetInterface } from "./types/snippet";

export const searchSnippets = (
  snippets: CodeSnippetInterface[],
  searchText: string,
  tags?: string[],
  language?: string,
): CodeSnippetInterface[] => {
  return snippets.filter((snippet) => {
    // Check if the snippet matches the search text
    const textMatch = !searchText ||
      snippet.title.toLowerCase().includes(searchText.toLowerCase()) ||
      snippet.description.toLowerCase().includes(searchText.toLowerCase()) ||
      snippet.code.toLowerCase().includes(searchText.toLowerCase());

    // Check if the snippet has some of the required tags
    const tagMatch = !tags || tags.length === 0 ||
      tags.some((tag) => snippet.tags.includes(tag));

    // Check if the snippet matches the language
    const languageMatch = !language || snippet.language === language;

    return textMatch && tagMatch && languageMatch;
  }).sort((a, b) => {
    // Sort by relevance (number of matched terms) and then by date
    const aRelevance = (searchText || "").split(" ").filter((term) =>
      a.title.toLowerCase().includes(term.toLowerCase()) ||
      a.description.toLowerCase().includes(term.toLowerCase()) ||
      a.code.toLowerCase().includes(term.toLowerCase())
    ).length;
    const bRelevance = (searchText || "").split(" ").filter((term) =>
      b.title.toLowerCase().includes(term.toLowerCase()) ||
      b.description.toLowerCase().includes(term.toLowerCase()) ||
      b.code.toLowerCase().includes(term.toLowerCase())
    ).length;

    if (aRelevance !== bRelevance) {
      return bRelevance - aRelevance; // Higher relevance first
    }

    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
  });
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function debounce<T extends (...args: any[]) => void>(
  func: T,
  wait: number,
) {
  let timeout: ReturnType<typeof setTimeout>;
  return function (...args: Parameters<T>): void {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

export function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export function truncate(str: string, length: number) {
  return str.length > length ? str.substring(0, length) + "..." : str;
}
