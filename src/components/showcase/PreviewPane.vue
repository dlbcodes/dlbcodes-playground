<script setup lang="ts">
import { ref } from "vue";
import ShowcaseGrid from "../showcase/ShowcaseGrid.vue";

const root = ref<HTMLElement | null>(null);
defineExpose({ root });
</script>

<template>
    <div
        ref="root"
        class="relative min-h-0 flex-1 overflow-auto rounded-2xl ring-1 ring-border-subtle bg-bg-surface bg-[repeating-linear-gradient(135deg,var(--color-bg-elevated)_0px,var(--color-bg-elevated)_1px,transparent_1px,transparent_20px)] no-scrollbar"
    >
        <ShowcaseGrid />
    </div>
</template>
