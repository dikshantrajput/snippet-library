<script lang="ts">
	import CodeSnippet from "./CodeSnippet.svelte";
	import Modal from "./Modal.svelte";
	import type { CodeSnippetInterface } from "$lib/types/snippet";
	import { debounce, searchSnippets } from "$lib/helpers";
	import SnippetModel from "../../modules/snippets/snippets.model";
	import CodeSnippetSkeleton from "./skeletons/CodeSnippetSkeleton.svelte";
	import SnippetCard from "./SnippetCard.svelte";
	import { fly } from "svelte/transition";
	import { clickOutside } from "$lib/actions/clickOutside";
	import { onMount } from "svelte";
	import SnippetLibrarySkeleton from "./skeletons/SnippetLibrarySkeleton.svelte";
	import EmptyState from "./EmptyState.svelte";

	let snippets: CodeSnippetInterface[] = [];

	let searchQuery = "";
	let filteredSnippets = snippets;
	let selectedSnippet: CodeSnippetInterface | undefined = undefined;
	let isCodeSnippetPreviewOpen = false;
	let isLoading = true;
	let selectedTags: string[] = [];
	let selectedLanguage = "";

	let allLanguages: string[] = [];
	let allTags: string[] = [];

	let tagSearchQuery = "";
	let filteredTags: string[] = [];

	const snippetModel = new SnippetModel();

	const dbSearch = async (
		searchQuery: string,
		selectedLanguage: string,
		selectedTags: string[],
	) => {
		isLoading = true;
		filteredSnippets = await snippetModel.searchSnippets(
			searchQuery,
			selectedLanguage,
			selectedTags,
		);
		// if I am getting 0 results from db dbSearch fn, use local dbSearch
		if (!filteredSnippets.length) {
			filteredSnippets = searchSnippets(
				snippets,
				searchQuery,
				selectedTags,
				selectedLanguage,
			);
		}
		isLoading = false;
	};

	const debouncedSearch = debounce(
		(searchQuery, selectedLanguage, selectedTags) =>
			dbSearch(searchQuery, selectedLanguage, selectedTags),
		500,
	);
	$: debouncedSearch(searchQuery, selectedLanguage, selectedTags);

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

	function removeTag(tag: string) {
		selectedTags = selectedTags.filter((t) => t !== tag);
	}

	function handleTagInput(tagSearchQuery: string) {
		if (tagSearchQuery) {
			filteredTags = allTags.filter((tag) =>
				tag.toLowerCase().includes(tagSearchQuery.toLowerCase()),
			);
		} else {
			filteredTags = [];
		}
	}

	$: handleTagInput(tagSearchQuery.trim());

	function toggleTagSelection(tag: string) {
		if (selectedTags.includes(tag)) {
			removeTag(tag);
		} else {
			selectTag(tag);
		}
	}

	function selectTag(tag: string) {
		if (!selectedTags.includes(tag)) {
			selectedTags = [...selectedTags, tag];
		}
	}

	const fetchSnippets = async () => {
		snippets = await snippetModel.getSnippets();
		console.log(snippets[0]);

		allLanguages = [
			...new Set(snippets.map((snippet) => snippet.language)),
		];
		allLanguages = allLanguages;
		allTags = [...new Set(snippets.flatMap((snippet) => snippet.tags))];
	};

	$: console.log(filteredSnippets[0]);

	onMount(fetchSnippets);
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
		<div class="relative">
			<input
				type="text"
				bind:value={tagSearchQuery}
				placeholder="Search with tags..."
				class="flex-grow px-4 py-2 rounded-lg bg-background-light dark:bg-background-dark text-text dark:text-text-muted border border-primary focus:outline-none focus:ring-2 focus:ring-primary-light"
			/>
			{#if filteredTags.length > 0}
				<ul
					class="absolute bg-background-light dark:bg-background-dark border border-primary rounded-lg shadow-lg mt-1 w-full max-h-64 overflow-y-auto z-10"
					use:clickOutside={() => {
						tagSearchQuery = "";
					}}
				>
					{#each filteredTags as tag}
						<li class="cursor-pointer hover:bg-primary-light">
							<button
								on:click={() => toggleTagSelection(tag)}
								class="px-4 py-2 w-full text-start h-full"
							>
								<input
									type="checkbox"
									checked={selectedTags.includes(tag)}
									readOnly
									class="mr-2 !bg-red-100"
								/>
								{tag}
							</button>
						</li>
					{/each}
				</ul>
			{/if}
		</div>

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
	<div class="flex flex-wrap gap-2 mb-2">
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
	{#if isLoading}
		<SnippetLibrarySkeleton />
	{:else if filteredSnippets.length === 0}
		<EmptyState
			title="No snippets"
			message="If you want to contribute. Please go to github and submit your snippet. That might help someone."
		/>
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
