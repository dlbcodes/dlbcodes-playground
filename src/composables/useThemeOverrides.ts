import { reactive, watchEffect, type Ref } from "vue";

export function useThemeOverrides(target: Ref<HTMLElement | null>) {
	const overrides = reactive<Record<string, string>>({});

	const set = (name: string, value: string): void => {
		overrides[name] = value;
	};
	const reset = (): void => {
		for (const k of Object.keys(overrides)) delete overrides[k];
	};

	const applyPreset = (tokens: Record<string, string>): void => {
		for (const k of Object.keys(overrides)) delete overrides[k];
		Object.assign(overrides, tokens);
	};

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

	return { overrides, set, reset, applyPreset };
}