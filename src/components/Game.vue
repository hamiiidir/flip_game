<template>
  <div class="flex justify-center items-center w-full h-auto">

    <div class="flex flex-col justify-center items-center w-2/3 h-auto lg:w-132">
      <div class="flex justify-between items-end w-full mb-8">
        <timer />
        <max-play-counter />
      </div>

      <div class="grid grid-cols-4 grid-rows-4 gap-4 mb-14 w-full h-auto">
        <div v-for="(item, index) in store.state.Main.cards" :key="index" class="flex justify-center items-center border h-28 rounded-md overflow-hidden text-2xl font-semibold">
          <single-box :index="index" :src="item.src" :name="item.name"/>
        </div>
      </div>

    </div>

  </div>
</template>

<script setup>
import SingleBox from './SingleBox.vue'
import Timer from './Timer.vue'
import MaxPlayCounter from './MaxPlayCounter.vue'
import { useStore } from 'vuex';

const store = useStore();

</script>

<style scoped>

</style>
