<script setup lang="ts">
import 'globe-chart'
import type { CountryEventDetail, GlobeChartConfigInput } from 'globe-chart'
import { ref } from 'vue'

const focus = ref<CountryEventDetail | null>(null)
const onCountryFocus = (e: Event) => {
  focus.value = (e as CustomEvent<CountryEventDetail>).detail
}

const DATA = [
  { iso: 'IL', value: 88, name: 'Israel' },
  { iso: 'US', value: 84, name: 'United States' },
  { iso: 'SG', value: 82, name: 'Singapore' },
  { iso: 'CA', value: 76, name: 'Canada' },
  { iso: 'GB', value: 79, name: 'United Kingdom' },
  { iso: 'NL', value: 74, name: 'Netherlands' },
  { iso: 'AU', value: 74, name: 'Australia' },
  { iso: 'AE', value: 71, name: 'UAE' },
  { iso: 'FR', value: 71, name: 'France' },
  { iso: 'IT', value: 69, name: 'Italy' },
  { iso: 'DE', value: 68, name: 'Germany' },
  { iso: 'CH', value: 66, name: 'Switzerland' },
  { iso: 'JP', value: 65, name: 'Japan' },
  { iso: 'ES', value: 65, name: 'Spain' },
  { iso: 'BE', value: 64, name: 'Belgium' },
  { iso: 'DK', value: 63, name: 'Denmark' },
  { iso: 'SA', value: 62, name: 'Saudi Arabia' },
  { iso: 'BR', value: 62, name: 'Brazil' },
  { iso: 'SE', value: 61, name: 'Sweden' },
  { iso: 'AT', value: 60, name: 'Austria' },
  { iso: 'KR', value: 59, name: 'South Korea' },
  { iso: 'NO', value: 58, name: 'Norway' },
  { iso: 'IN', value: 58, name: 'India' },
  { iso: 'PT', value: 57, name: 'Portugal' },
  { iso: 'FI', value: 55, name: 'Finland' },
  { iso: 'MX', value: 55, name: 'Mexico' },
  { iso: 'CZ', value: 55, name: 'Czech Republic' },
  { iso: 'GR', value: 54, name: 'Greece' },
  { iso: 'UA', value: 52, name: 'Ukraine' },
  { iso: 'PL', value: 52, name: 'Poland' },
  { iso: 'TR', value: 48, name: 'Turkey' },
  { iso: 'HU', value: 48, name: 'Hungary' },
  { iso: 'ZA', value: 48, name: 'South Africa' },
  { iso: 'AR', value: 48, name: 'Argentina' },
  { iso: 'MY', value: 44, name: 'Malaysia' },
  { iso: 'CL', value: 44, name: 'Chile' },
  { iso: 'RO', value: 44, name: 'Romania' },
  { iso: 'HR', value: 42, name: 'Croatia' },
  { iso: 'EG', value: 42, name: 'Egypt' },
  { iso: 'TH', value: 42, name: 'Thailand' },
  { iso: 'CO', value: 40, name: 'Colombia' },
  { iso: 'PH', value: 40, name: 'Philippines' },
  { iso: 'CN', value: 38, name: 'China' },
  { iso: 'ID', value: 38, name: 'Indonesia' },
  { iso: 'PE', value: 36, name: 'Peru' },
  { iso: 'VN', value: 35, name: 'Vietnam' },
  { iso: 'MA', value: 35, name: 'Morocco' },
  { iso: 'RU', value: 45, name: 'Russia' },
  { iso: 'NG', value: 32, name: 'Nigeria' },
  { iso: 'KE', value: 28, name: 'Kenya' },
]

const STATS = [
  { label: 'Global Breach Rate', value: '73%', c: '#f59e0b' },
  { label: 'Credentials Exposed', value: '4.2B', c: '#ef4444' },
  { label: 'MFA Bypasses / Day', value: '12.4M', c: '#a855f7' },
  { label: 'Countries Affected', value: '49', c: '#0ea5e9' },
]

const CONFIG: GlobeChartConfigInput = {
  legend: { title: '% Orgs Breached via Identity (2024)' },
  colors: { low: '#0f172a', high: '#f59e0b' },
}
</script>

<template>
  <div class="app">
    <header class="header">
      <div class="top-row">
        <div class="brand">
          <span class="logo">◈ ITDR<span class="muted">.AI</span></span>
          <span class="sep"></span>
          <span class="sub">Identity Security Posture Management</span>
        </div>
        <div class="live-tag">
          <span class="live-dot"></span>
          REALTIME SCAN
        </div>
      </div>
      <div>
        <h1 class="title">Identity Breach Exposure Map</h1>
        <p class="desc">% of orgs reporting an identity-based breach in 2024 ·
          <code>globe-chart</code> web component · Vue
          <span v-if="focus" class="focus">· ⌖ {{ focus.name }} — {{ focus.value }}%</span>
        </p>
      </div>
    </header>
    <div class="stats-bar">
      <div v-for="s in STATS" :key="s.label" class="stat-card" :style="{ borderLeftColor: s.c }">
        <div class="stat-value" :style="{ color: s.c }">{{ s.value }}</div>
        <div class="stat-label">{{ s.label }}</div>
      </div>
    </div>
    <main class="main">
      <globe-chart
        :data.prop="DATA"
        :config.prop="CONFIG"
        legend
        theme="dark"
        @country-hover="onCountryFocus"
        @country-select="onCountryFocus"
        style="width: 100%; height: 100%; display: block"
      />
    </main>
  </div>
</template>

<style scoped>
.app { display: flex; flex-direction: column; height: 100vh; background: #030712; color: #e2e8f0; font-family: system-ui, sans-serif; }
.header { padding: 0.85rem 1.5rem; border-bottom: 1px solid rgba(245,158,11,0.15); background: #060d1a; display: flex; flex-direction: column; gap: 0.4rem; }
.top-row { display: flex; align-items: center; justify-content: space-between; }
.brand { display: flex; align-items: center; gap: 0.75rem; }
.logo { font-weight: 800; font-size: 0.8rem; letter-spacing: 0.18em; text-transform: uppercase; color: #f59e0b; }
.muted { color: #334155; }
.sep { width: 1px; height: 16px; background: #1e293b; display: inline-block; }
.sub { font-size: 0.7rem; color: #475569; letter-spacing: 0.05em; }
.live-tag { display: flex; align-items: center; gap: 5px; font-size: 0.62rem; color: #f59e0b; border: 1px solid rgba(245,158,11,0.3); padding: 0.18rem 0.5rem; border-radius: 3px; font-family: monospace; }
.live-dot { width: 5px; height: 5px; border-radius: 50%; background: #f59e0b; display: inline-block; animation: pulse 2s ease-in-out infinite; }
.title { margin: 0; font-size: 1.1rem; font-weight: 700; color: #f1f5f9; letter-spacing: -0.01em; }
.desc { margin: 0.1rem 0 0; font-size: 0.7rem; color: #475569; }
.desc code { color: #f59e0b; background: rgba(245,158,11,0.08); padding: 0 0.3em; border-radius: 3px; }
.focus { color: #f59e0b; font-weight: 600; font-family: monospace; }
.stats-bar { display: grid; grid-template-columns: repeat(4,1fr); gap: 6px; padding: 6px 10px; background: #030712; border-bottom: 1px solid rgba(245,158,11,0.08); }
.stat-card { background: #060d1a; border: 1px solid #1e293b; border-left-width: 3px; padding: 0.45rem 0.65rem; border-radius: 3px; }
.stat-value { font-size: 1.2rem; font-weight: 700; font-family: monospace; line-height: 1; }
.stat-label { font-size: 0.58rem; color: #475569; text-transform: uppercase; letter-spacing: 0.08em; margin-top: 3px; }
.main { flex: 1; }
</style>
