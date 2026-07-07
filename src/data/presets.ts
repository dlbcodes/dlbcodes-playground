export interface Preset {
	id: string;
	name: string;
	// token name (no --color- prefix) → hex. Empty = library defaults.
	tokens: Record<string, string>;
}

export const presets: Preset[] = [
	{
		id: "default",
		name: "Default",
		tokens: {}, // selecting this clears overrides → back to the library's own theme
	},
	{
		id: "neutral",
		name: "Neutral",
		tokens: {
			// Brand → near-black (shadcn's defining trait)
			"brand-200": "#171717", // neutral-900 (--primary)
			"brand-100": "#0a0a0a", // neutral-950, darker hover
			"accent-pro-200": "#171717",
			// Text
			"text-primary": "#0a0a0a", // --foreground (neutral-950)
			"text-secondary": "#737373", // --muted-foreground (neutral-500)
			"text-tertiary": "#a3a3a3", // neutral-400
			"text-inverse": "#fafafa", // --primary-foreground
			// Background — flat white surfaces, gray canvas
			"bg-base": "#ffffff", // --background
			"bg-surface": "#f5f5f5", // neutral-100 (muted canvas)
			"bg-raised": "#ffffff", // --card (white)
			"bg-elevated": "#fafafa", // neutral-50
			"bg-subtle": "#f5f5f5", // neutral-100 (hover)
			// Border
			"border-subtle": "#e5e5e5", // neutral-200 (--border)
			"border-default": "#e5e5e5",
			"border-strong": "#a3a3a3", // neutral-400 (--ring)
			// Status
			"success-text": "#16a34a", // green-600
			"warning-text": "#d97706", // amber-600
			"info-text": "#2563eb", // blue-600
			"danger-text": "#dc2626", // red-600 (--destructive)
		},
	},
	{
		id: "crimson",
		name: "Crimson",
		tokens: {
			"brand-200": "#e61919",      // primary
			"brand-100": "#cd0000",      // darker hover (derived)
			"accent-pro-200": "#24335c", // secondary (indigo)
			"text-primary": "#0d1117",   // foreground
			"text-secondary": "#71717a", // muted-foreground
			"text-tertiary": "#9797a0",  // derived
			"text-inverse": "#ffffff",   // primary-foreground
			"bg-base": "#fcfcfc",        // background
			"bg-surface": "#f4f4f5",     // muted
			"bg-raised": "#ffffff",      // card
			"bg-elevated": "#f8f8f8",    // derived
			"bg-subtle": "#ebebec",      // derived (hover)
			"border-subtle": "#e4e4e7",  // border
			"border-default": "#e4e4e7", // border
			"border-strong": "#b0b0b5",  // derived
			"danger-text": "#8b0000",    // destructive
		},
	},
	{
		id: "sandstone",
		name: "Sandstone",
		tokens: {
			"brand-200": "#8f713d",
			"brand-100": "#7d602c",
			"accent-pro-200": "#47566b",
			"text-primary": "#414958",
			"text-secondary": "#737b8c",
			"text-tertiary": "#989fab",
			"text-inverse": "#f9fafa",
			"bg-base": "#f4f4f6",
			"bg-surface": "#e3e5e8",
			"bg-raised": "#eeeff1",
			"bg-elevated": "#eaebee",
			"bg-subtle": "#dcdee1",
			"border-subtle": "#dddfe3",
			"border-default": "#dddfe3",
			"border-strong": "#a8abaf",
			"danger-text": "#b82e2e",
		},
	},
	{
		id: "sage",
		name: "Sage",
		tokens: {
			"brand-200": "#afbea5",
			"brand-100": "#9baa92",
			"accent-pro-200": "#495940",
			"text-primary": "#000000",
			"text-secondary": "#878787",
			"text-tertiary": "#a4a4a4",
			"text-inverse": "#ffffff",
			"bg-base": "#fdfdfd",
			"bg-surface": "#f5f5f5",
			"bg-raised": "#fdfdfd",
			"bg-elevated": "#f9f9f9",
			"bg-subtle": "#eeeef0",
			"border-subtle": "#e7e7ee",
			"border-default": "#e7e7ee",
			"border-strong": "#b6b7be",
			"danger-text": "#b3191f",
		},
	},
];

