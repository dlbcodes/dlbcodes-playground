<script setup lang="ts">
import { computed } from "vue";
import {
    Modal,
    ModalHeader,
    ModalTitle,
    ModalDescription,
    ModalContent,
    ModalFooter,
    ModalClose,
    Button,
} from "@dlbcodes/my-design-system";
import { useClipboard } from "@vueuse/core";
import { useThemeCss } from "../../composables/useThemeCss";

const props = defineProps<{
    open: boolean;
    overrides: Record<string, string>;
}>();
const emit = defineEmits<{ "update:open": [value: boolean] }>();

// Bridge the panel's `open` prop to Modal's plain v-model (modelValue).
const isOpen = computed({
    get: () => props.open,
    set: (v) => emit("update:open", v),
});

// Reactive CSS string; pass a getter so it tracks override changes.
const { css } = useThemeCss(() => props.overrides);

const { copy, copied, isSupported } = useClipboard({
    source: css,
    copiedDuring: 1500,
});
</script>

<template>
    <Modal v-model="isOpen" size="2xl">
        <ModalHeader>
            <ModalTitle>Your theme</ModalTitle>
            <ModalDescription>
                Paste this into your CSS, after the design-system import.
            </ModalDescription>
            <ModalClose />
        </ModalHeader>

        <ModalContent>
            <pre
                class="max-h-80 overflow-auto rounded-xl bg-bg-surface p-4 font-mono text-xs text-text-primary ring-1 ring-border-subtle scrollbar-thin"
            ><code>{{ css }}</code></pre>
        </ModalContent>

        <ModalFooter>
            <Button variant="secondary" @click="isOpen = false">Close</Button>
            <Button v-if="isSupported" @click="copy()">
                {{ copied ? "Copied!" : "Copy CSS" }}
            </Button>
        </ModalFooter>
    </Modal>
</template>
