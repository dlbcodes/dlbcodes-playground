<script setup lang="ts">
import { ref, watch } from "vue";
import { tokenGroups } from "../../data/tokens.ts";
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
import TokenRow from "./TokenRow.vue";
import { presets } from "../../data/presets.ts";

const exportOpen = ref(false);

defineProps<{ overrides: Record<string, string> }>();
const emit = defineEmits<{
    update: [name: string, value: string];
    preset: [tokens: Record<string, string>];
}>();

const DEFAULT_PRESET_ID = "default";
const activePresetId = ref(DEFAULT_PRESET_ID);

watch(activePresetId, (id) => {
    const preset = presets.find((p) => p.id === id);
    if (preset) emit("preset", preset.tokens);
});

const resetAll = (): void => {
    if (activePresetId.value === DEFAULT_PRESET_ID) {
        emit("preset", {}); // already on default — clear manual edits directly
    } else {
        activePresetId.value = DEFAULT_PRESET_ID; // triggers watch → applies {}
    }
};
</script>

<template>
    <Panel
        class="flex w-full min-h-0 shrink-0 flex-col overflow-hidden max-h-[35vh] md:max-h-none md:w-80"
    >
        <PanelHeader class="flex justify-between">
            <div class="flex flex-col items-start">
                <h2 class="font-semibold text-text-primary">Customize</h2>
                <p class="text-xs text-text-tertiary">
                    Override semantic tokens live.
                </p>
            </div>
            <Button
                to="https://github.com/dlbcodes/dlbcodes-playground"
                as="a"
                variant="icon"
                size="icon"
            >
                <PhGithubLogo />
            </Button>
        </PanelHeader>

        <PanelContent class="min-h-0 flex-1 overflow-auto no-scrollbar p-4">
            <div
                class="flex flex-row gap-4 overflow-x-auto md:flex-col md:gap-3 md:overflow-x-visible"
            >
                <!-- Preset: first column on mobile, full-width block on desktop -->
                <div class="w-56 shrink-0 md:w-auto">
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

                <!-- Token groups -->
                <Disclosure
                    v-for="group in tokenGroups"
                    :key="group.title"
                    :default-open="true"
                    class="w-56 shrink-0 md:w-auto"
                >
                    <DisclosureTrigger
                        class="text-[10px] font-medium uppercase tracking-wide text-text-tertiary"
                    >
                        {{ group.title }}
                    </DisclosureTrigger>

                    <DisclosureContent>
                        <div class="flex flex-col gap-1 pb-2">
                            <TokenRow
                                v-for="token in group.tokens"
                                :key="token.name"
                                :name="token.name"
                                :label="token.label"
                                :value="overrides[token.name] ?? token.default"
                                @update="
                                    (name, value) => emit('update', name, value)
                                "
                            />
                        </div>
                    </DisclosureContent>
                </Disclosure>
            </div>
        </PanelContent>

        <PanelFooter class="flex flex-col gap-y-2">
            <Button variant="secondary" class="w-full" @click="resetAll">
                Reset all
            </Button>
            <Button class="w-full" @click="exportOpen = true">Get code</Button>
        </PanelFooter>
    </Panel>

    <ExportModal v-model:open="exportOpen" :overrides="overrides" />
</template>
