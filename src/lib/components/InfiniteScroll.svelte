<script lang="ts">
    import { onDestroy, createEventDispatcher } from 'svelte';
  
    export let threshold: number = 0;
    export let horizontal: boolean = false;
    export let elementScroll: HTMLElement | null = null;
    export let hasMore: boolean = true;
  
    const dispatch = createEventDispatcher<{ loadMore: void }>();
    let isLoadMore = false;
    let component: HTMLDivElement | null = null; // Updated type
  
    // Watch component or elementScroll changes and add scroll listeners
    $: {
      const element = elementScroll || component?.parentNode as HTMLElement;
      if (element) {
        element.addEventListener('scroll', onScroll);
        element.addEventListener('resize', onScroll);
      }
    }
  
    // Handle scroll event to check if load more should be triggered
    const onScroll = (e: Event) => {
    const element = e.target as HTMLElement;
  
      const offset = horizontal
        ? element.scrollWidth - element.clientWidth - element.scrollLeft
        : element.scrollHeight - element.clientHeight - element.scrollTop;
  
      if (offset <= threshold) {
        if (!isLoadMore && hasMore) {
          dispatch('loadMore');
        }
        isLoadMore = true;
      } else {
        isLoadMore = false;
      }
    };
  
    // Cleanup event listeners on component destroy
    onDestroy(() => {
      const element = elementScroll || component?.parentNode as HTMLElement;
  
      if (element) {
        element.removeEventListener('scroll', onScroll);
        element.removeEventListener('resize', onScroll);
      }
    });
  </script>
  
  <div bind:this={component} style="width: 0px;"></div>
  