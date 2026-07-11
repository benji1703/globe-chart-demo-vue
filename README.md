# globe-chart · Vue Demo

> **ITDR / ISPM — Identity Breach Exposure** · A minimal Vue 3 integration of the [`globe-chart`](https://github.com/benji1703/globe-chart) web component, styled as a 2026-era AI frontier cybersecurity dashboard.

**[Live demo →](https://benji1703.github.io/globe-chart-demo-vue/)**

---

## What this shows

An **Identity Breach Exposure Map** showing the percentage of organizations in each country that reported an identity-based breach in 2024. High-exposure countries glow amber. Built with `globe-chart` — a framework-agnostic web component that works in any JS environment.

**The entire globe-chart integration is 3 lines:**

```vue
<script setup>
import 'globe-chart'                        // 1. register the custom element
const globeEl = ref(null)
onMounted(() => {
  globeEl.value.data = data                 // 2. set data
  globeEl.value.config = { ... }           // 3. configure
})
</script>

<template>
  <globe-chart ref="globeEl" legend theme="dark" />
</template>
```

No plugin. No adapter. Configure Vue to accept custom elements via `isCustomElement` and you're done.

---

## Run locally

```bash
npm install
npm run dev      # → http://localhost:5173
npm run build    # production build + countries JSON copy
```

## Vue custom element setup

`vite.config.ts` tells Vue's template compiler to pass `globe-*` tags through as native custom elements:

```ts
vue({
  template: {
    compilerOptions: {
      isCustomElement: (tag) => tag.startsWith('globe-'),
    },
  },
})
```

## Data

Percentage of organizations reporting an identity-based breach (credential theft, MFA bypass, session hijacking) in 2024, aggregated from industry breach reports and identity security surveys.

## Tech

- **Vue** 3 · **Vite** 5 · **TypeScript**
- **globe-chart** `^0.2.7` — [npm](https://www.npmjs.com/package/globe-chart) · [GitHub](https://github.com/benji1703/globe-chart)
