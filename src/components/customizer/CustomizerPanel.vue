<script setup lang="ts">
import { ref, watch } from "vue";
import { tokenGroups } from "./tokens";
import {
    Panel,
    PanelHeader,
    PanelContent,
    PanelFooter,
    Field,
    FieldLabel,
    Disclosure,
    DisclosureTrigger,
    DisclosureContent,
    Button,
    Select,
    SelectTrigger,
    SelectContent,
    SelectItem,
    FieldContent,
} from "@dlbcodes/my-design-system";
import { PhGithubLogo } from "@phosphor-icons/vue";
import ExportModal from "./ExportModal.vue";
import { presets } from "./presets";

const exportOpen = ref(false);

defineProps<{ overrides: Record<string, string> }>();
const emit = defineEmits<{
    update: [name: string, value: string];
    reset: [];
    preset: [tokens: Record<string, string>];
}>();

const onPick = (name: string, e: Event): void => {
    emit("update", name, (e.target as HTMLInputElement).value);
};

const activePresetId = ref("default");

watch(activePresetId, (id) => {
    const preset = presets.find((p) => p.id === id);
    if (preset) emit("preset", preset.tokens);
});
</script>

<template>
    <Panel
        class="flex w-full min-h-0 shrink-0 flex-col overflow-hidden md:w-80"
    >
        <PanelHeader class="flex justify-between">
            <div class="flex flex-col items-start">
                <h2 class="font-semibold text-text-primary">Customize</h2>
                <p class="text-xs text-text-tertiary">
                    Override semantic tokens live.
                </p>
            </div>
            <Button variant="icon" size="icon">
                <PhGithubLogo />
            </Button>
        </PanelHeader>

        <PanelContent class="min-h-0 flex-1 overflow-y-auto scrollbar-thin p-4">
            <div class="mb-4 flex flex-col gap-1.5">
                <Field>
                    <FieldLabel>Preset</FieldLabel>
                    <FieldContent>
                        <Select v-model="activePresetId">
                            <SelectTrigger class="w-full" />
                            <SelectContent>
                                <SelectItem
                                    v-for="p in presets"
                                    :key="p.id"
                                    :value="p.id"
                                    :label="p.name"
                                >
                                    {{ p.name }}
                                </SelectItem>
                            </SelectContent>
                        </Select>
                    </FieldContent>
                </Field>
            </div>
            <div class="flex flex-col gap-1">
                <Disclosure
                    v-for="group in tokenGroups"
                    :key="group.title"
                    :default-open="true"
                >
                    <DisclosureTrigger
                        class="text-[10px] font-medium uppercase tracking-wide text-text-tertiary"
                    >
                        {{ group.title }}
                    </DisclosureTrigger>

                    <DisclosureContent>
                        <div class="flex flex-col gap-1 pb-2">
                            <Field
                                v-for="token in group.tokens"
                                :key="token.name"
                                orientation="horizontal"
                                class="rounded-lg px-2 py-1.5 hover:bg-bg-subtle"
                            >
                                <FieldLabel
                                    class="flex-1 truncate text-text-secondary"
                                >
                                    {{ token.label }}
                                </FieldLabel>
                                <input
                                    type="color"
                                    :value="
                                        overrides[token.name] ?? token.default
                                    "
                                    class="size-7 shrink-0 cursor-pointer rounded-md border border-border-default bg-transparent"
                                    @input="onPick(token.name, $event)"
                                />
                            </Field>
                        </div>
                    </DisclosureContent>
                </Disclosure>
            </div>
        </PanelContent>

        <PanelFooter class="flex flex-col gap-y-2">
            <Button variant="secondary" class="w-full" @click="emit('reset')">
                Reset all
            </Button>
            <Button class="w-full" @click="exportOpen = true">Get code</Button>
        </PanelFooter>
    </Panel>

    <ExportModal v-model:open="exportOpen" :overrides="overrides" />
</template>
