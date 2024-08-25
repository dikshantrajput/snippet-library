<script lang="ts">
  import { fade } from "svelte/transition";
  import CodeSnippet from "./CodeSnippet.svelte";
  import Modal from "./Modal.svelte";
  import type { CodeSnippetInterface } from "$lib/types/snippet";

  let snippets: CodeSnippetInterface[] = [
    {
      id: "1",
      title:
        "Array Map Example of using Array.map() methodExample of using Array.map() methodExample of using Array.map() method",
      description:
        "Example of using Array.map() method Example of using Array.map() methodExample of using Array.map() methodExample of using Array.map() method",
      language: "javascript",
      category: "Array Methods",
      tags: ["array", "functional"],
      code: `import { onMount } from 'svelte';
  import { fade } from 'svelte/transition';
  import CodeSnippet from './CodeSnippet.svelte';

  let snippets = [
    {
      id: 1,
      title: 'Array Map',
      description: 'Example of using Array.map() method',
      language: 'javascript',
      category: 'Array Methods',
      tags: ['array', 'functional'],
      code: 'const doubled = numbers.map(num => num * 2);',
      createdAt: '2023-08-25T12:00:00Z'
    },
    // Add more snippets...
  ];

  let searchQuery = '';
  let filteredSnippets = snippets;
  let selectedSnippet = null;

  $: {
    filteredSnippets = snippets.filter(snippet => 
      snippet.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      snippet.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      snippet.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
      snippet.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  }

  function selectSnippet(snippet) {
    selectedSnippet = snippet;
  }

  function closeDetailView() {
    selectedSnippet = null;
  }

  function formatDate(dateString) {
    return new Date(dateString).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
  }

  function truncate(str, length) {
    return str.length > length ? str.substring(0, length) + '...' : str;
  }`,
      createdAt: "2023-08-25T12:00:00Z",
    },
  ];

  let searchQuery = "";
  let filteredSnippets = snippets;
  let selectedSnippet: CodeSnippetInterface | undefined = undefined;
  let isCodeSnippetPreviewOpen = false;

  $: {
    filteredSnippets = snippets.filter(
      (snippet) =>
        snippet.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        snippet.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        snippet.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
        snippet.tags.some((tag) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase()),
        ),
    );
  }

  function selectSnippet(snippet: CodeSnippetInterface) {
    selectedSnippet = snippet;
    isCodeSnippetPreviewOpen = true;
  }

  function closeDetailView() {
    selectedSnippet = undefined;
  }

  function formatDate(dateString: string) {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  }

  function truncate(str: string, length: number) {
    return str.length > length ? str.substring(0, length) + "..." : str;
  }
</script>

<div class="container mx-auto px-4 py-8">
  <h1 class="text-3xl font-bold text-text dark:text-text-muted mb-8">
    Code Snippet Library
  </h1>

  <div class="mb-6">
    <input
      type="text"
      bind:value={searchQuery}
      placeholder="Search snippets..."
      class="w-full px-4 py-2 rounded-lg bg-background-light dark:bg-background-dark text-text dark:text-text-muted border border-primary focus:outline-none focus:ring-2 focus:ring-primary-light"
    />
  </div>

  {#if filteredSnippets.length === 0}
    <p class="text-text-muted dark:text-text-dark">No snippets found.</p>
  {:else}
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {#each filteredSnippets as snippet (snippet.id)}
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <div
          class="bg-background-light dark:bg-background-dark rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden cursor-pointer"
          on:click={() => selectSnippet(snippet)}
          transition:fade
        >
          <div class="p-5">
            <div class="flex justify-between items-start mb-3">
              <h3 class="text-lg font-semibold text-text dark:text-text-muted">
                {truncate(snippet.title, 50)}
              </h3>
              <span
                class="text-xs font-medium text-primary-dark dark:text-primary-light px-2 py-1 bg-primary-light bg-opacity-20 rounded-full"
                >{snippet.language}</span
              >
            </div>
            <p class="text-sm text-text-muted dark:text-text-dark mb-3">
              {truncate(snippet.description, 100)}
            </p>
            <div
              class="bg-background dark:bg-background-light rounded-md p-3 mb-3"
            >
              <pre
                class="text-xs text-text-dark dark:text-text-muted overflow-hidden"
                style="max-height: 80px;"><code>{snippet.code}</code></pre>
            </div>
            <div class="flex flex-wrap gap-2 mb-3">
              {#each snippet.tags as tag}
                <span
                  class="text-xs bg-secondary-light text-background px-2 py-1 rounded-full"
                  >{tag}</span
                >
              {/each}
            </div>
            <div
              class="flex justify-between items-center text-xs text-text-muted"
            >
              <span>{snippet.category}</span>
              <span>{formatDate(snippet.createdAt)}</span>
            </div>
          </div>
          <div
            class="px-5 py-3 bg-background-dark dark:bg-background-light bg-opacity-50 text-right"
          >
            <button
              class="text-sm text-secondary hover:text-secondary-dark transition-colors duration-200 font-medium"
              >View Details →</button
            >
          </div>
        </div>
      {/each}
    </div>
  {/if}
</div>

<Modal bind:isOpen={isCodeSnippetPreviewOpen} on:close={closeDetailView}>
  <div class="max-w-5xl mx-auto p-4 px-6">
    {#if selectedSnippet}
      <CodeSnippet codeSnippet={selectedSnippet} />
    {:else}
      <div class="p-6">Error loading snippet</div>
    {/if}
  </div>
</Modal>

<style>
  pre {
    margin: 0;
    white-space: pre-wrap;
    word-break: break-all;
    word-wrap: break-word;
  }

  code {
    font-family: "Fira Code", monospace;
  }
</style>
