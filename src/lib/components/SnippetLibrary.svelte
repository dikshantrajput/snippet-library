<script lang="ts">
  import CodeSnippet from "./CodeSnippet.svelte";
  import Modal from "./Modal.svelte";
  import type { CodeSnippetInterface } from "$lib/types/snippet";
  import { debounce, searchSnippets } from "$lib/helpers";
  import SnippetModel from "../../modules/snippets/snippets.model";
  import CodeSnippetSkeleton from "./skeletons/CodeSnippetSkeleton.svelte";
  import SnippetCard from "./SnippetCard.svelte";

  export let snippets: CodeSnippetInterface[];

  let searchQuery = "";
  let filteredSnippets = snippets;
  let selectedSnippet: CodeSnippetInterface | undefined = undefined;
  let isCodeSnippetPreviewOpen = false;
  let isLoading = true;

  const sm = new SnippetModel();

  const dbSearch = async (searchQuery: string) => {
    isLoading = true;
    filteredSnippets = await sm.searchSnippets(searchQuery);
    // if I am getting 0 results from db dbSearch fn, use local dbSearch
    if (!filteredSnippets.length) {
      filteredSnippets = searchSnippets(snippets, searchQuery);
    }
    isLoading = false;
  };

  const debouncedSearch = debounce((searchQuery) => dbSearch(searchQuery), 500);
  $: debouncedSearch(searchQuery);

  function handleSelectSnippetEvent(event: CustomEvent<CodeSnippetInterface>) {
    const snippet = event.detail;
    selectedSnippet = snippet;
    isCodeSnippetPreviewOpen = true;
  }

  function closeDetailView() {
    selectedSnippet = undefined;
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

  {#if isLoading}
    <CodeSnippetSkeleton />
  {:else}
    {#if filteredSnippets.length === 0}
      <p class="text-text-muted dark:text-text-dark">No snippets found.</p>
    {:else}
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {#each filteredSnippets as snippet (snippet.id)}
          <SnippetCard {snippet} on:select={handleSelectSnippetEvent} />
        {/each}
      </div>
    {/if}
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
