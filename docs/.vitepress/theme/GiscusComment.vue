<template>
  <div class="giscus-wrapper">
    <div class="giscus-divider" />
    <div id="giscus-container" ref="containerRef" />
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted, onUnmounted, nextTick } from 'vue'
import { useRoute, useData } from 'vitepress'

const route = useRoute()
const { isDark } = useData()
const containerRef = ref<HTMLElement | null>(null)

const REPO = 'JoshuaHuang2000/eyeball-archive'
const REPO_ID = 'R_kgDORe-4Jw'
// After enabling Discussions + installing Giscus app, replace these two values:
// 1. Visit https://giscus.app and fill in your repo to get CATEGORY_ID
// 2. Set CATEGORY to match the Discussion category name you chose (e.g. 'Comments')
const CATEGORY = 'Comments'
const CATEGORY_ID = 'DIC_PLACEHOLDER' // <-- replace after setup

function loadGiscus() {
  if (!containerRef.value) return

  // Remove existing giscus iframe/widget if navigating between pages
  const existing = containerRef.value.querySelector('iframe.giscus-frame')
  if (existing) {
    existing.remove()
  }

  const script = document.createElement('script')
  script.src = 'https://giscus.app/client.js'
  script.setAttribute('data-repo', REPO)
  script.setAttribute('data-repo-id', REPO_ID)
  script.setAttribute('data-category', CATEGORY)
  script.setAttribute('data-category-id', CATEGORY_ID)
  script.setAttribute('data-mapping', 'pathname')
  script.setAttribute('data-strict', '0')
  script.setAttribute('data-reactions-enabled', '1')
  script.setAttribute('data-emit-metadata', '0')
  script.setAttribute('data-input-position', 'top')
  script.setAttribute('data-theme', isDark.value ? 'dark_dimmed' : 'light')
  script.setAttribute('data-lang', 'zh-CN')
  script.setAttribute('data-loading', 'lazy')
  script.crossOrigin = 'anonymous'
  script.async = true

  containerRef.value.appendChild(script)
}

function sendThemeMessage(theme: string) {
  const iframe = document.querySelector<HTMLIFrameElement>('iframe.giscus-frame')
  if (!iframe) return
  iframe.contentWindow?.postMessage(
    { giscus: { setConfig: { theme } } },
    'https://giscus.app'
  )
}

onMounted(() => {
  nextTick(loadGiscus)
})

// Reload when navigating to a different page
watch(() => route.path, () => {
  nextTick(() => {
    if (!containerRef.value) return
    // Clear and reload
    containerRef.value.innerHTML = ''
    loadGiscus()
  })
})

// Sync theme changes without reloading
watch(isDark, (dark) => {
  sendThemeMessage(dark ? 'dark_dimmed' : 'light')
})
</script>

<style scoped>
.giscus-wrapper {
  margin-top: 3rem;
  padding-top: 0;
}

.giscus-divider {
  border-top: 1px solid var(--vp-c-divider);
  margin-bottom: 2.5rem;
}

#giscus-container {
  min-height: 120px;
}
</style>
