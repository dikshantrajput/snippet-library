<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {#each Array(6) as _, i}
        <div
            class="bg-background-light dark:bg-background-dark rounded-lg shadow-lg overflow-hidden flex flex-col justify-between"
        >
            <div class="p-5">
                <div class="flex justify-between items-start mb-3 gap-2">
                    <div
                        class="w-3/4 h-4 bg-gray-300 dark:bg-gray-700 rounded"
                    ></div>
                    <div
                        class="w-1/4 h-4 bg-gray-300 dark:bg-gray-700 rounded"
                    ></div>
                </div>
                <div
                    class="h-5 bg-gray-300 dark:bg-gray-700 rounded mb-3"
                ></div>
                <div
                    class="bg-background dark:bg-background-light bg-gray-300 dark:bg-gray-700 rounded-md p-3 mb-3 h-20"
                >
                </div>
                <div class="flex flex-wrap gap-2 mb-3">
                    {#each Array(3) as _}
                        <div
                            class="w-16 h-4 bg-gray-300 dark:bg-gray-700 rounded"
                        ></div>
                    {/each}
                </div>
                <div
                    class="flex justify-between items-center text-xs text-text-muted"
                >
                    <div
                        class="w-1/4 h-4 bg-gray-300 dark:bg-gray-700 rounded"
                    ></div>
                    <div
                        class="w-1/4 h-4 bg-gray-300 dark:bg-gray-700 rounded"
                    ></div>
                </div>
            </div>
            <div
                class="p-4 bg-background-dark dark:bg-background-light bg-opacity-50 text-righ flex justify-end"
            >
                <div
                    class="w-1/4 h-4 bg-gray-300 dark:bg-gray-700 rounded"
                ></div>
            </div>
        </div>
    {/each}
</div>
