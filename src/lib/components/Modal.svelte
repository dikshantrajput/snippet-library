<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { scale } from "svelte/transition";

  export let isOpen: boolean = false;
  export let closeOnOverlayClick: boolean = true;
  export let containerClasses = "";

  const dispatch = createEventDispatcher();

  function handleOverlayClick() {
    if (closeOnOverlayClick) {
      closeModal();
    }
  }

  function closeModal() {
    isOpen = false;
    dispatch("close");
  }
</script>

{#if isOpen}
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
  <div
    class="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-xs flex items-center justify-center z-50 w-full"
    on:click={handleOverlayClick}
    role="dialog"
    aria-modal="true"
    
  >
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div
      class="rounded-lg relative {containerClasses}"
      on:click|stopPropagation
      transition:scale|local
    >
      <button
        class="absolute top-2 right-2 focus:outline-none text-3xl text-gray-200"
        on:click={closeModal}
        aria-label="Close"
      >
        &times;
      </button>
      <slot></slot>
    </div>
  </div>
{/if}
