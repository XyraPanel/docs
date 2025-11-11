<script setup lang="ts">
import { useClipboard } from '@vueuse/core'

const route = useRoute()

const { copy, copied } = useClipboard()
const { t } = useDocusI18n()

const markdownLink = computed(() => `${window?.location?.origin}/raw${route.path}.md`)
const items = [
  {
    label: t('docs.copy.link'),
    icon: 'i-lucide-link',
    onSelect() {
      copy(markdownLink.value)
    },
  },
  {
    label: t('docs.copy.view'),
    icon: 'i-simple-icons:markdown',
    target: '_blank',
    to: markdownLink.value,
  },
]

async function copyPage() {
  const page = await $fetch<string>(`/raw${route.path}.md`)
  copy(page)
}
</script>

<template>
  <UFieldGroup size="sm">
    <UButton
      :label="t('docs.copy.page')"
      :icon="copied ? 'i-lucide-check' : 'i-lucide-copy'"
      color="neutral"
      variant="soft"
      :ui="{
        leadingIcon: 'text-neutral size-3.5',
      }"
      @click="copyPage"
    />

    <UDropdownMenu
      size="sm"
      :items="items"
      :content="{
        align: 'end',
        side: 'bottom',
        sideOffset: 8,
      }"
    >
      <UButton
        icon="i-lucide-chevron-down"
        color="neutral"
        variant="soft"
        class="border-l border-muted"
      />
    </UDropdownMenu>
  </UFieldGroup>
</template>