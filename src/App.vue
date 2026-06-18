<script setup lang="ts">
import { computed, ref } from "vue";
import PreviewPane from "./components/showcase/PreviewPane.vue";
import CustomizerPanel from "./components/customizer/CustomizerPanel.vue";
import { useThemeOverrides } from "./composables/useThemeOverrides";

const previewPane = ref<InstanceType<typeof PreviewPane> | null>(null);
const previewEl = computed(() => previewPane.value?.root ?? null);

const { overrides, set, applyPreset } = useThemeOverrides(previewEl);
</script>

<template>
    <div class="flex h-dvh flex-col">
        <div
            class="flex min-h-0 flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8 md:flex-row-reverse"
        >
            <PreviewPane ref="previewPane" />
            <CustomizerPanel
                :overrides="overrides"
                @update="set"
                @preset="applyPreset"
            />
        </div>
    </div>
</template>
