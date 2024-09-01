<script lang="ts">
	import "../app.css";
	import { onMount } from "svelte";
	import { ThemesEnum } from "$lib/types/core";
	import ThemeToggler from "$lib/components/ThemeToggler.svelte";
	import { THEME_LOCALSTORAGE_KEY } from "$lib/constants";
	import { Toaster } from "svelte-sonner";
	import { themeStore } from "$lib/stores/themeStore";
	import CodeSnippetForm from "$lib/components/CodeSnippetForm.svelte";

	let isCodeSuggestingFormOpen = false;

	onMount(() => {
		const savedTheme = localStorage.getItem(
			THEME_LOCALSTORAGE_KEY,
		) as ThemesEnum;
		if (savedTheme) {
			themeStore.set(savedTheme);
		} else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
			themeStore.set(ThemesEnum.DARK);
		}
	});

	const handleOpenSnippetForm = () => {
		isCodeSuggestingFormOpen = true;
	};
</script>

<Toaster
	theme="light"
	expand
	richColors
	closeButton
	duration={2500}
	position="bottom-center"
	visibleToasts={5}
/>

<div class="min-h-screen bg-background text-text">
	<nav class="p-4 bg-background-light flex justify-between">
		<ThemeToggler />

		<button
			type="submit"
			class="px-4 text-sm p-2 bg-violet-600 text-white rounded-md hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 transition duration-150 ease-in-out"
			on:click={handleOpenSnippetForm}
		>
			Suggest snippet
		</button>
	</nav>

	<main class="p-4">
		<slot />
	</main>
</div>

<CodeSnippetForm bind:isFormOpen={isCodeSuggestingFormOpen} />
