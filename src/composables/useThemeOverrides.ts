import { reactive, watchEffect, type Ref } from "vue";

export function useThemeOverrides(target: Ref<HTMLElement | null>) {
	// Semantic token name (without --color- prefix) → CSS color value.
	const overrides = reactive<Record<string, string>>({});

	// Update a single token (from a color picker).
	const set = (name: string, value: string): void => {
		overrides[name] = value;
	};

	// Replace all overrides wholesale. Passing {} clears them — which is what
	// selecting the "Default" preset (and "Reset all") does.
	const applyPreset = (tokens: Record<string, string>): void => {
		for (const k of Object.keys(overrides)) delete overrides[k];
		Object.assign(overrides, tokens);
	};

	// Apply overrides to the target's inline style (scoped, not :root). Strips
	// previous --color-* declarations first so a removed token reverts cleanly.
	watchEffect(() => {
		const el = target.value;
		if (!el) return;
		el.style.cssText = el.style.cssText
			.split(";")
			.filter((d) => !d.trim().startsWith("--color-"))
			.join(";");
		for (const [name, value] of Object.entries(overrides)) {
			el.style.setProperty(`--color-${name}`, value);
		}
	});

	return { overrides, set, applyPreset };
}