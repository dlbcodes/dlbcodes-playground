<script setup lang="ts">
import { computed, ref } from "vue";
import PreviewPane from "./components/showcase/PreviewPane.vue";
import CustomizerPanel from "./components/customizer/CustomizerPanel.vue";
import { useThemeOverrides } from "./composables/useThemeOverrides";

const previewPane = ref<InstanceType<typeof PreviewPane> | null>(null);
const previewEl = computed(() => previewPane.value?.root ?? null);

const { overrides, set, reset, applyPreset } = useThemeOverrides(previewEl);
</script>

<template>
    <section class="flex h-dvh flex-col">
        <div class="flex min-h-0 flex-1 flex-col gap-8 p-8 md:flex-row-reverse">
            <PreviewPane ref="previewPane" />
            <CustomizerPanel
                :overrides="overrides"
                @update="set"
                @reset="reset"
                @preset="applyPreset"
            />
        </div>
    </section>
</template>
