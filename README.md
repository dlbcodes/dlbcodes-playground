# dlbcodes-playground

A live theming playground for [`@dlbcodes/my-design-system`](https://www.npmjs.com/package/@dlbcodes/my-design-system): edit the design system's semantic tokens and watch a wall of real components reskin instantly, then copy a paste-ready CSS theme for your own project.

It's built **with** the library it showcases — the customizer UI runs on the system's own `Panel`, `Field`, `Disclosure`, `Select`, `Modal`, and `Button`. Using a design system to build the tool that demos it is part of the point.

<!-- TODO: deploy and add the live link -->

**[Live demo →](#)** <!-- TODO: screenshot — ![Playground](./docs/screenshot.png) -->

## What it does

- **Live token editing** — adjust semantic color tokens (brand, text, background, border, status) and see every component update in real time.
- **Scoped preview** — overrides apply to the preview pane only, so the editor chrome stays on the default theme while the showcase changes.
- **Presets** — switch between several curated themes (a neutral shadcn-style set, plus colored variants) from a dropdown.
- **Export** — generate a paste-ready `:root` CSS block of your overrides to drop into your own app.

## Run locally

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build
npm run preview  # preview the build
```

## How theming works

The design system is themed through semantic CSS-variable tokens (`--color-bg-base`, `--color-text-primary`, …) that reference an internal primitive palette. Tailwind resolves those variables at runtime, so overriding a token reskins everything that uses it — no rebuild required.

The playground writes overrides to the preview pane's inline style (scoped, not `:root`):

```ts
previewEl.style.setProperty("--color-bg-base", "#fafafa");
```

Because it's scoped, removing an override cleanly reverts to the library default. The same override map drives the export, which emits a standard `:root { … }` block you paste after the design-system import.

## Adding a preset

Presets are an array of `{ id, name, tokens }`, where `tokens` maps semantic token names (without the `--color-` prefix) to hex values. An empty `tokens` object means "use the library defaults," and selecting a preset replaces the current overrides wholesale.

```ts
{
  id: "crimson",
  name: "Crimson",
  tokens: { "brand-200": "#e61919", "text-primary": "#0d1117", /* … */ },
}
```

## Tech

- [Vue 3](https://vuejs.org/) + `<script setup>` + TypeScript
- [Vite](https://vitejs.dev/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [`@dlbcodes/my-design-system`](https://www.npmjs.com/package/@dlbcodes/my-design-system)

## License

MIT
