<script lang="ts">
    import { formatDate, truncate } from "$lib/helpers";
    import type { CodeSnippetInterface } from "$lib/types/snippet";
    import { createEventDispatcher } from "svelte";
    import { fade } from "svelte/transition";

    export let snippet: CodeSnippetInterface;

    const eventDispatchers = createEventDispatcher<{
        select: CodeSnippetInterface;
    }>();
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
    class="bg-background-light dark:bg-background-dark rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden cursor-pointer flex flex-col justify-between"
    on:click={() => eventDispatchers("select", snippet)}
    transition:fade|local
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
        <div class="bg-background dark:bg-background-light rounded-md p-3 mb-3">
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
        <div class="flex justify-between items-center text-xs text-text-muted">
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
