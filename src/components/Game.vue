<template>
  <div class="flex justify-center items-center w-full h-screen ">
    <div class="grid grid-cols-4 grid-rows-4 gap-4 w-2/3 h-auto lg:w-132">
      <div v-for="(item, index) in cards" :key="index" class="flex justify-center items-center border h-28 rounded-md overflow-hidden text-2xl font-semibold">
        <single-box :index="index" :src="item.src" :reset="resetParam"/>
      </div>
    </div>
    <button class="px-8 py-2 border">reset</button>
  </div>
</template>

<script setup>
import { cards } from '@/utils/cards'
import SingleBox from './SingleBox.vue'

</script>

<style scoped>

</style>
