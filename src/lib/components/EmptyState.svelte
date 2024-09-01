<script lang="ts">
    export let title = "No Snippets Found";
    export let message = "No snippets match your search.";
</script>

<div
    class="flex flex-col items-center justify-center py-16 space-y-4 bg-background-light dark:bg-background-dark rounded-md shadow-inner"
>
    <h2
        class="text-4xl font-extrabold text-primary-dark dark:text-primary-light tracking-widest animate-bounce-slow"
    >
        {title}
    </h2>

    <p
        class="text-lg text-center text-text-muted dark:text-text-dark max-w-xl leading-relaxed"
    >
        {message}
    </p>
</div>
