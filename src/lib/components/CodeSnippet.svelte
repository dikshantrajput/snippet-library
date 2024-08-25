<script lang="ts">
  import { onMount } from "svelte";
  import Prism from "prismjs";
  import "prismjs/themes/prism-tomorrow.css";
  import type { CodeSnippetInterface } from "$lib/types/snippet";
    import { showErrorToast, showSuccessToast } from "$lib/stores/toastStore";

  export let codeSnippet: CodeSnippetInterface;

  let copied = false;
  let highlightedCode = "";

  onMount(() => {
    highlightedCode = Prism.highlight(
      codeSnippet.code,
      Prism.languages[codeSnippet.language],
      codeSnippet.language,
    );
  });

  async function copyToClipboard() {
    try{
      await navigator.clipboard.writeText(codeSnippet.code);
      copied = true;
      setTimeout(() => (copied = false), 2000);
      showSuccessToast("Snippet copied")
    }catch{ 
      showErrorToast("Error copying code")
    }
  }
</script>

<div
  class="bg-background-light dark:bg-background-dark rounded-lg shadow-lg p-4 h-full"
>
  <div class="flex justify-between items-baseline mb-2 ">
    <h3 class="text-lg font-semibold text-text dark:text-text-muted">
      {codeSnippet.title}
    </h3>
    <button
      on:click={copyToClipboard}
      class="px-3 py-1 text-sm bg-primary hover:bg-primary-dark text-background rounded transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary-light ml-2"
    >
      {copied ? "Copied!" : "Copy"}
    </button>
  </div>
  <div
    class="code-block rounded bg-background-dark dark:bg-background p-4 overflow-x-auto max-h-[80vh] overflow-y-scroll"
  >
    {@html highlightedCode}
  </div>
</div>

<style>
  .code-block {
    font-family: "Fira Code", monospace;
    font-size: 0.9rem;
    line-height: 1.5;
    tab-size: 4;
    white-space: pre-wrap;
    word-break: break-all;
    word-wrap: break-word;
  }

  :global(.code-block code) {
    display: block;
  }
</style>
