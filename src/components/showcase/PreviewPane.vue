<script setup lang="ts">
import { ref } from "vue";
import ShowcaseGrid from "../showcase/ShowcaseGrid.vue";
import LoginPage from "./LoginPage.vue";
import SettingsPage from "./SettingsPage.vue";
import {
    Tabs,
    TabsTrigger,
    TabsList,
    TabsPanels,
    TabsContent,
} from "@dlbcodes/my-design-system";

const root = ref<HTMLElement | null>(null);
defineExpose({ root });

const triggerClass =
    "rounded-full px-4 py-1.5 text-sm font-medium text-text-inverse/70 transition-all not-disabled:hover:text-text-inverse aria-selected:bg-white/15 aria-selected:text-text-inverse";

const tabs = [
    { label: "Components", component: ShowcaseGrid },
    { label: "Sign in", component: LoginPage },
    // { label: "Settings", component: SettingsPage },
];
</script>

<template>
    <main
        ref="root"
        class="relative min-h-0 flex-1 overflow-hidden rounded-2xl ring-1 ring-border-subtle bg-bg-surface bg-[repeating-linear-gradient(135deg,var(--color-bg-elevated)_0px,var(--color-bg-elevated)_1px,transparent_1px,transparent_20px)] no-scrollbar"
    >
        <!-- Tabs float here, anchored to <main> which does NOT scroll -->
        <Tabs class="flex h-full flex-col">
            <TabsList
                class="absolute top-4 left-4 z-20 w-fit gap-1 rounded-full border border-bg-inverse bg-bg-inverse p-1 shadow-sm"
            >
                <TabsTrigger
                    v-for="tab in tabs"
                    :key="tab.label"
                    :class="triggerClass"
                >
                    {{ tab.label }}
                </TabsTrigger>
            </TabsList>

            <TabsPanels class="min-h-0 flex-1 overflow-auto no-scrollbar">
                <TabsContent
                    v-for="tab in tabs"
                    :key="tab.label"
                    class="flex min-h-full flex-col"
                >
                    <component
                        :is="tab.component"
                        class="min-h-full w-full flex-1"
                    />
                </TabsContent>
            </TabsPanels>
        </Tabs>
    </main>
</template>
