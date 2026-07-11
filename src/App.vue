<script setup lang="ts">
import 'globe-chart'
import { ref, onMounted, watch } from 'vue'

const globeEl = ref<HTMLElement | null>(null)
const theme = ref<'light' | 'dark'>('light')

const renewableData = [
  { iso: 'IS', value: 99, name: 'Iceland' },
  { iso: 'NO', value: 98, name: 'Norway' },
  { iso: 'ET', value: 98, name: 'Ethiopia' },
  { iso: 'ZM', value: 95, name: 'Zambia' },
  { iso: 'AL', value: 95, name: 'Albania' },
  { iso: 'BR', value: 84, name: 'Brazil' },
  { iso: 'KE', value: 85, name: 'Kenya' },
  { iso: 'SE', value: 90, name: 'Sweden' },
  { iso: 'AT', value: 78, name: 'Austria' },
  { iso: 'FI', value: 78, name: 'Finland' },
  { iso: 'PT', value: 67, name: 'Portugal' },
  { iso: 'CA', value: 65, name: 'Canada' },
  { iso: 'CH', value: 62, name: 'Switzerland' },
  { iso: 'CO', value: 70, name: 'Colombia' },
  { iso: 'DK', value: 74, name: 'Denmark' },
  { iso: 'PE', value: 58, name: 'Peru' },
  { iso: 'TZ', value: 56, name: 'Tanzania' },
  { iso: 'ES', value: 55, name: 'Spain' },
  { iso: 'GR', value: 55, name: 'Greece' },
  { iso: 'CL', value: 55, name: 'Chile' },
  { iso: 'HR', value: 58, name: 'Croatia' },
  { iso: 'NZ', value: 82, name: 'New Zealand' },
  { iso: 'TR', value: 44, name: 'Turkey' },
  { iso: 'GH', value: 42, name: 'Ghana' },
  { iso: 'GB', value: 42, name: 'United Kingdom' },
  { iso: 'RO', value: 42, name: 'Romania' },
  { iso: 'VN', value: 40, name: 'Vietnam' },
  { iso: 'IT', value: 38, name: 'Italy' },
  { iso: 'AU', value: 30, name: 'Australia' },
  { iso: 'NL', value: 33, name: 'Netherlands' },
  { iso: 'AR', value: 33, name: 'Argentina' },
  { iso: 'DE', value: 52, name: 'Germany' },
  { iso: 'CN', value: 29, name: 'China' },
  { iso: 'PH', value: 29, name: 'Philippines' },
  { iso: 'BE', value: 26, name: 'Belgium' },
  { iso: 'FR', value: 24, name: 'France' },
  { iso: 'MX', value: 24, name: 'Mexico' },
  { iso: 'JP', value: 22, name: 'Japan' },
  { iso: 'US', value: 22, name: 'United States' },
  { iso: 'MY', value: 22, name: 'Malaysia' },
  { iso: 'MA', value: 21, name: 'Morocco' },
  { iso: 'IN', value: 20, name: 'India' },
  { iso: 'TH', value: 20, name: 'Thailand' },
  { iso: 'RU', value: 19, name: 'Russia' },
  { iso: 'NG', value: 18, name: 'Nigeria' },
  { iso: 'PL', value: 17, name: 'Poland' },
  { iso: 'ID', value: 15, name: 'Indonesia' },
  { iso: 'UA', value: 15, name: 'Ukraine' },
  { iso: 'ZA', value: 12, name: 'South Africa' },
  { iso: 'EG', value: 10, name: 'Egypt' },
  { iso: 'SA', value: 1, name: 'Saudi Arabia' },
]

function applyGlobe() {
  const el = globeEl.value as any
  if (!el) return
  el.data = renewableData
  el.config = {
    legend: { title: 'Renewable Energy Share (%)' },
    colors: { low: theme.value === 'light' ? '#dcfce7' : '#052e16', high: '#16a34a' },
  }
}

onMounted(applyGlobe)

watch(theme, () => {
  applyGlobe()
})
</script>

<template>
  <div class="app" :class="theme">
    <header class="header">
      <div class="title-block">
        <h1>🌿 Renewable Energy Map <span class="badge">Vue</span></h1>
        <p>Drop in <code>&lt;globe-chart&gt;</code> — it's a web component, works everywhere.</p>
      </div>
      <button class="toggle" @click="theme = theme === 'light' ? 'dark' : 'light'">
        {{ theme === 'light' ? '🌙 Dark' : '☀️ Light' }}
      </button>
    </header>
    <main class="main">
      <globe-chart
        ref="globeEl"
        legend
        :theme="theme"
        style="width: 100%; height: 100%; display: block"
      />
    </main>
  </div>
</template>

<style scoped>
.app {
  display: flex;
  flex-direction: column;
  height: 100vh;
  font-family: system-ui, sans-serif;
  transition: background 0.3s, color 0.3s;
}
.app.light {
  background: #f0fdf4;
  color: #14532d;
}
.app.dark {
  background: #052e16;
  color: #dcfce7;
}
.header {
  padding: 1.25rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid currentColor;
  opacity: 0.9;
}
.app.light .header { background: #dcfce7; border-color: #bbf7d0; }
.app.dark .header { background: #14532d; border-color: #166534; }
.title-block h1 { margin: 0; font-size: 1.4rem; font-weight: 700; }
.badge {
  display: inline-block;
  padding: 0.15em 0.55em;
  border-radius: 9999px;
  font-size: 0.7rem;
  font-weight: 700;
  background: #16a34a;
  color: white;
  margin-left: 0.4rem;
  vertical-align: middle;
}
p { margin: 0.25rem 0 0; font-size: 0.8rem; opacity: 0.7; }
code { background: rgba(0,0,0,0.08); padding: 0.1em 0.4em; border-radius: 4px; }
.toggle {
  padding: 0.5rem 1rem;
  border-radius: 8px;
  border: 1px solid currentColor;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-size: 0.85rem;
  font-weight: 600;
}
.main { flex: 1; }
</style>
