<script lang="ts">
  import SnippetLibrary from "$lib/components/SnippetLibrary.svelte";
    import { onMount } from "svelte";
    import SnippetModel from "../../modules/snippets/snippets.model";
    import type { CodeSnippetInterface } from "$lib/types/snippet";

    let snippets: CodeSnippetInterface[] = [];

    const sm = new SnippetModel()

    const f = async () => {
      snippets =  await sm.getSnippets()
    }
    onMount(f)

</script>

<SnippetLibrary {snippets} />
