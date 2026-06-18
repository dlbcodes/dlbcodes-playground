import { computed, type ComputedRef } from "vue";

export function useThemeCss(
	getOverrides: () => Record<string, string>,
): { css: ComputedRef<string> } {
	const css = computed(() => {
		const entries = Object.entries(getOverrides());
		const header =
			`@import "tailwindcss";\n` +
			`@import "@dlbcodes/my-design-system/tokens.css";\n` +
			`@source "../node_modules/@dlbcodes/my-design-system/dist";\n\n`;
		if (entries.length === 0) return header;
		const lines = entries
			.map(([name, value]) => `  --color-${name}: ${value};`)
			.join("\n");
		return `${header}:root {\n${lines}\n}`;
	});
	return { css };
}