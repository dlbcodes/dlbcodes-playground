export interface TokenDef {
	name: string;
	label: string;
	default: string; // hex, for the native color input's initial value
}
export interface TokenGroup {
	title: string;
	tokens: TokenDef[];
}

export const tokenGroups: TokenGroup[] = [
	{
		title: "Brand",
		tokens: [
			{ name: "brand-200", label: "Brand", default: "#c2511f" },
			{ name: "brand-100", label: "Brand hover", default: "#b14a1d" },
			{ name: "accent-pro-200", label: "Accent", default: "#5b3a9e" },
		],
	},
	{
		title: "Text",
		tokens: [
			{ name: "text-primary", label: "Primary", default: "#1c1b18" },
			{ name: "text-secondary", label: "Secondary", default: "#6b6660" },
			{ name: "text-tertiary", label: "Tertiary", default: "#a39d94" },
			{ name: "text-inverse", label: "Inverse", default: "#f0ede6" },
		],
	},
	{
		title: "Background",
		tokens: [
			{ name: "bg-base", label: "Base", default: "#faf9f6" },
			{ name: "bg-surface", label: "Surface", default: "#f4f2ed" },
			{ name: "bg-raised", label: "Raised", default: "#ffffff" },
			{ name: "bg-elevated", label: "Elevated", default: "#efece5" },
			{ name: "bg-subtle", label: "Subtle", default: "#e8e4db" },
		],
	},
	{
		title: "Border",
		tokens: [
			{ name: "border-subtle", label: "Subtle", default: "#efece5" },
			{ name: "border-default", label: "Default", default: "#e8e4db" },
			{ name: "border-strong", label: "Strong", default: "#d4cdbf" },
		],
	},
	{
		title: "Status",
		tokens: [
			{ name: "success-text", label: "Success", default: "#1f7a3d" },
			{ name: "warning-text", label: "Warning", default: "#9a6b15" },
			{ name: "info-text", label: "Info", default: "#1f5f9a" },
			{ name: "danger-text", label: "Danger", default: "#c23838" },
		],
	},
];

// Flat lookup of name → default, handy for initializing state.
export const tokenDefaults: Record<string, string> = Object.fromEntries(
	tokenGroups.flatMap((g) => g.tokens.map((t) => [t.name, t.default])),
);