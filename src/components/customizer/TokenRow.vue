<script setup lang="ts">
import { ref, watch } from "vue";
import { Field, FieldLabel, Input } from "@dlbcodes/ui";
import { PhHash } from "@phosphor-icons/vue";

const props = defineProps<{
    name: string;
    label: string;
    value: string; // current hex (override or default)
}>();
const emit = defineEmits<{ update: [name: string, value: string] }>();

// Local text mirror so the user can type freely (incl. invalid intermediate
// states) without thrashing the theme. Commit only on a valid hex.
watch(
    () => props.value,
    (v) => (text.value = v.replace(/^#/, "")),
);
const text = ref(props.value.replace(/^#/, "")); // initial, also stripped

const HEX = /^#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})$/;

const onSwatch = (e: Event): void => {
    const v = (e.target as HTMLInputElement).value;
    text.value = v;
    emit("update", props.name, v);
};

const onText = (v: string | number | null): void => {
    let s = String(v ?? "")
        .trim()
        .replace(/^#+/, "");
    s = s.replace(/[^0-9a-fA-F]/g, "");
    text.value = s;
    const hex = `#${s}`;
    if (HEX.test(hex)) emit("update", props.name, hex.toLowerCase());
};
</script>

<template>
    <Field orientation="horizontal" class="rounded-lg px-2 py-1.5">
        <FieldLabel class="flex-1 truncate text-text-secondary">
            {{ label }}
        </FieldLabel>

        <div class="flex shrink-0 items-center gap-2">
            <Input
                :model-value="text"
                size="sm"
                spellcheck="false"
                autocapitalize="off"
                autocomplete="off"
                class="w-24 font-mono"
                @update:model-value="onText"
            >
                <PhHash />
            </Input>
            <input
                type="color"
                :value="value"
                :aria-label="`${label} color`"
                class="color-swatch size-8 shrink-0 cursor-pointer overflow-hidden rounded-md border border-border-default bg-transparent p-0"
                @input="onSwatch"
            />
        </div>
    </Field>
</template>

<style scoped>
.color-swatch {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
}
.color-swatch::-webkit-color-swatch-wrapper {
    padding: 0;
}
.color-swatch::-webkit-color-swatch {
    border: none;
    border-radius: 0.375rem; /* matches rounded-md so the fill's corners follow */
}
.color-swatch::-moz-color-swatch {
    border: none;
}
</style>
