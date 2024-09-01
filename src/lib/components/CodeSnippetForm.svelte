<script lang="ts">
    import { fade } from "svelte/transition";
    import Modal from "./Modal.svelte";
    import { showErrorToast, showSuccessToast } from "$lib/stores/toastStore";
    import SnippetModel from "../../modules/snippets/snippets.model";
    import type { CreateSnippetDbInterface } from "$lib/types/snippet";

    export let isFormOpen: boolean = false;
    let title: string = "";
    let description: string = "";
    let codeSnippet: string = "";
    let language: string = "";
    let tags: string = "";

    let errors: { [key: string]: string } = {};
    let isSubmitting: boolean = false;
    const snippetModel = new SnippetModel();

    const languages: string[] = [
        "JavaScript",
        "Python",
        "Java",
        "C++",
        "C#",
        "Ruby",
        "Go",
        "Swift",
        "Kotlin",
        "TypeScript",
        "PHP",
        "Rust",
        "Scala",
        "Dart",
        "R",
        "Shell",
        "SQL",
        "HTML",
        "CSS",
        "Lua",
        "Perl",
        "MATLAB",
    ];

    function validateForm(): boolean {
        errors = {};
        if (!title.trim()) errors.title = "Title is required";
        if (!description.trim()) errors.description = "Description is required";
        if (!codeSnippet.trim())
            errors.codeSnippet = "Code snippet is required";
        if (!language) errors.language = "Language is required";
        return Object.keys(errors).length === 0;
    }

    async function handleSubmit(): Promise<void> {
        if (validateForm()) {
            isSubmitting = true;

            const payload: CreateSnippetDbInterface = {
                code: codeSnippet,
                language,
                title,
                category: null,
                description,
                tags,
            };

            try {
                await snippetModel.createSnippetSuggestion(payload);
                showSuccessToast("Suggestion submitted!!!");
                title = description = codeSnippet = language = tags = "";
            } catch (error) {
                showErrorToast(String(error));
            } finally {
                isSubmitting = false;
            }
        }
    }

    function closeDetailView() {
        isFormOpen = false;
    }
</script>

<Modal
    bind:isOpen={isFormOpen}
    on:close={closeDetailView}
    containerClasses="sm:min-w-[600px] min-w-max"
    crossIconClasses="right-2 top-10 text-4xl"
>
    <div
        class="mx-auto mt-10 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-xl min-w-6xl"
    >
        <h2
            class="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white"
        >
            Suggest a Code Snippet
        </h2>

        <form on:submit|preventDefault={handleSubmit} class="space-y-6">
            <div>
                <label
                    for="title"
                    class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >Title <span class="text-red-400">*</span></label
                >
                <input
                    type="text"
                    id="title"
                    bind:value={title}
                    class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    placeholder="Enter a title for your snippet"
                />
                {#if errors.title}
                    <p class="mt-1 text-sm text-red-600" transition:fade>
                        {errors.title}
                    </p>
                {/if}
            </div>

            <div>
                <label
                    for="description"
                    class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >Description <span class="text-red-400">*</span></label
                >
                <textarea
                    id="description"
                    bind:value={description}
                    rows="3"
                    class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    placeholder="Describe your code snippet"
                ></textarea>
                {#if errors.description}
                    <p class="mt-1 text-sm text-red-600" transition:fade>
                        {errors.description}
                    </p>
                {/if}
            </div>

            <div>
                <label
                    for="codeSnippet"
                    class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >Code Snippet <span class="text-red-400">*</span></label
                >
                <textarea
                    id="codeSnippet"
                    bind:value={codeSnippet}
                    rows="6"
                    class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 font-mono text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    placeholder="Paste your code snippet here"
                ></textarea>
                {#if errors.codeSnippet}
                    <p class="mt-1 text-sm text-red-600" transition:fade>
                        {errors.codeSnippet}
                    </p>
                {/if}
            </div>

            <div>
                <label
                    for="language"
                    class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >Language <span class="text-red-400">*</span></label
                >
                <select
                    id="language"
                    bind:value={language}
                    class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                >
                    <option value="">Select a language</option>
                    {#each languages as lang}
                        <option value={lang}>{lang}</option>
                    {/each}
                </select>
                {#if errors.language}
                    <p class="mt-1 text-sm text-red-600" transition:fade>
                        {errors.language}
                    </p>
                {/if}
            </div>

            <div>
                <label
                    for="tags"
                    class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >Tags (comma-separated)</label
                >
                <input
                    type="text"
                    id="tags"
                    bind:value={tags}
                    class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    placeholder="e.g., algorithm, sorting, beginner"
                />
            </div>

            <div class="flex items-center justify-between">
                <button
                    type="submit"
                    class="px-4 py-2 w-full bg-violet-600 text-white rounded-md hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 transition duration-150 ease-in-out {isSubmitting
                        ? 'opacity-50 cursor-not-allowed'
                        : ''}"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? "Submitting..." : "Submit Suggestion"}
                </button>
            </div>
        </form>
    </div>
</Modal>
