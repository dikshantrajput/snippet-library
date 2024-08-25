<script>
  import { themeStore } from "$lib/stores/themeStore";
  import { ThemesEnum } from "$lib/types/core";
  import { onMount } from "svelte";

  function toggleTheme() {
    themeStore.toggle();
  }

  onMount(() => {
    return themeStore.subscribe((value) => {
      document.documentElement.classList.toggle(
        ThemesEnum.DARK,
        value === ThemesEnum.DARK,
      );
    });
  });
</script>

<button
  on:click={toggleTheme}
  class="p-2 rounded-full bg-background-light text-text"
>
  {#if $themeStore === ThemesEnum.DARK}
    🌙
  {:else}
    ☀️
  {/if}
</button>
