<template>
  <div class="tags pt20 flex">
    <div
      class="tag cursor-pointer px2 py1 border-(1px solid) shadow-(0 0 2px #0cf) rounded-2 bg-#1ac text-white mb2 mr2"
      v-for="tag in frontmatter.tags"
      :key="tag"
    >
      {{ tag }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useData } from 'vitepress'

const { frontmatter } = useData()
console.log(frontmatter.value.tags)
</script>
