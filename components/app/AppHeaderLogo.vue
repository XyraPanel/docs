<script setup lang="ts">
const appConfig = useAppConfig()

const { data: release } = await useAsyncData('panel-release', () =>
  $fetch<{ releases: { tag: string }[] }>('https://ungh.cc/repos/XyraPanel/panel/releases')
    .then(r => r.releases?.[0] ?? null)
    .catch(() => null)
)
</script>

<template>
  <div class="flex items-center gap-3">
    <UColorModeImage
      v-if="appConfig.header?.logo?.dark || appConfig.header?.logo?.light"
      :light="appConfig.header?.logo?.light || appConfig.header?.logo?.dark"
      :dark="appConfig.header?.logo?.dark || appConfig.header?.logo?.light"
      :alt="appConfig.header?.logo?.alt || appConfig.header?.title"
      class="h-10 w-auto shrink-0"
    />
    <span>
      {{ appConfig.header?.title || '{appConfig.header.title}' }}
    </span>
    <span
      v-if="release?.tag"
      class="hidden sm:inline-flex items-center rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary ring-1 ring-inset ring-primary/20"
    >
      {{ release.tag }}
    </span>
  </div>
</template>