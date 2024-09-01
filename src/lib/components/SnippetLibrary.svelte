<script lang="ts">
	import CodeSnippet from "./CodeSnippet.svelte";
	import Modal from "./Modal.svelte";
	import type { CodeSnippetInterface } from "$lib/types/snippet";
	import { debounce, searchSnippets } from "$lib/helpers";
	import SnippetModel from "../../modules/snippets/snippets.model";
	import CodeSnippetSkeleton from "./skeletons/CodeSnippetSkeleton.svelte";
	import SnippetCard from "./SnippetCard.svelte";
	import { fly } from "svelte/transition";

	export let snippets: CodeSnippetInterface[];

	let searchQuery = "";
	let filteredSnippets = snippets;
	let selectedSnippet: CodeSnippetInterface | undefined = undefined;
	let isCodeSnippetPreviewOpen = false;
	let isLoading = true;
	let selectedTags: string[] = [];
	let selectedLanguage = "";

	let allLanguages: string[] = [];
	let allTags: string[] = ["abc"];

	const snippetModel = new SnippetModel();

	const dbSearch = async (searchQuery: string) => {
		isLoading = true;
		filteredSnippets = await snippetModel.searchSnippets(searchQuery);
		// if I am getting 0 results from db dbSearch fn, use local dbSearch
		if (!filteredSnippets.length) {
			filteredSnippets = searchSnippets(snippets, searchQuery);
		}
		isLoading = false;
	};

	const debouncedSearch = debounce(
		(searchQuery) => dbSearch(searchQuery),
		500,
	);
	$: debouncedSearch(searchQuery);

	function handleSelectSnippetEvent(
		event: CustomEvent<CodeSnippetInterface>,
	) {
		const snippet = event.detail;
		selectedSnippet = snippet;
		isCodeSnippetPreviewOpen = true;
	}

	function closeDetailView() {
		selectedSnippet = undefined;
	}
	function toggleTag(tag: string) {
		if (selectedTags.includes(tag)) {
			selectedTags = selectedTags.filter((t) => t !== tag);
		} else {
			selectedTags = [...selectedTags, tag];
		}
	}

	function handleLanguageChange(event: Event) {
		selectedLanguage = (event.target as HTMLSelectElement).value;
	}

	function removeTag(tag: string) {
		selectedTags = selectedTags.filter((t) => t !== tag);
	}

	function handleTagInput(event: Event) {
		const input = event.target as HTMLInputElement;
		const value = input.value.trim();
		if (value && !selectedTags.includes(value)) {
			selectedTags = [...selectedTags, value];
			input.value = "";
		}
	}
</script>

<div class="container mx-auto px-4 py-8">
	<h1 class="text-3xl font-bold text-text dark:text-text-muted mb-8">
		Code Snippet Library
	</h1>

	<div class="mb-6 flex gap-3">
		<input
			type="text"
			bind:value={searchQuery}
			placeholder="Search snippets..."
			class="w-full px-4 py-2 rounded-lg bg-background-light dark:bg-background-dark text-text dark:text-text-muted border border-primary focus:outline-none focus:ring-2 focus:ring-primary-light"
		/>
		<input
			type="text"
			placeholder="Search with tags..."
			on:keydown={(e) => e.key === "Enter" && handleTagInput(e)}
			class="flex-grow px-4 py-2 rounded-lg bg-background-light dark:bg-background-dark text-text dark:text-text-muted border border-primary focus:outline-none focus:ring-2 focus:ring-primary-light"
		/>
		<div class="relative">
			<select
				bind:value={selectedLanguage}
				class="px-4 py-2 pr-8 rounded-lg bg-background-light dark:bg-background-dark text-text dark:text-text-muted border border-primary focus:outline-none focus:ring-2 focus:ring-primary-light appearance-none"
			>
				<option value="">All Languages</option>
				{#each allLanguages as language}
					<option value={language}>{language}</option>
				{/each}
			</select>
			<div
				class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none"
			>
				<svg
					class="w-4 h-4 text-gray-500 dark:text-gray-300"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M19 9l-7 7-7-7"
					></path>
				</svg>
			</div>
		</div>
	</div>
	<div class="my-4">
		<div class="flex flex-wrap gap-2">
			{#each selectedTags as tag (tag)}
				<span
					class="px-2 py-1 bg-primary text-background rounded-full text-sm flex items-center"
					transition:fly
				>
					{tag}
					<button
						on:click={() => removeTag(tag)}
						class="ml-2 focus:outline-none"
					>
						&times;
					</button>
				</span>
			{/each}
		</div>
	</div>

	{#if isLoading}
		<CodeSnippetSkeleton />
	{:else if filteredSnippets.length === 0}
		<p class="text-text-muted dark:text-text-dark">No snippets found.</p>
	{:else}
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
			{#each filteredSnippets as snippet (snippet.id)}
				<SnippetCard {snippet} on:select={handleSelectSnippetEvent} />
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
