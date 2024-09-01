<script lang="ts">
  import "../app.css";
  import { onMount } from "svelte";
  import { ThemesEnum } from "$lib/types/core";
  import ThemeToggler from "$lib/components/ThemeToggler.svelte";
  import { THEME_LOCALSTORAGE_KEY } from "$lib/constants";
  import { Toaster } from "svelte-sonner";
  import { themeStore } from "$lib/stores/themeStore";

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
  <nav class="p-4 bg-background-light">
    <ThemeToggler />
  </nav>

  <main class="p-4">
    <slot />
  </main>
</div>
