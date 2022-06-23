<template>
  <div class="flex flex-col justify-center items-center w-full h-screen ">
    <div class="grid grid-cols-4 grid-rows-4 gap-4 w-2/3 h-auto lg:w-132 mb-14">
      <div v-for="(item, index) in cards" :key="index" class="flex justify-center items-center border h-28 rounded-md overflow-hidden text-2xl font-semibold">
        <single-box :index="index" :src="item.src"/>
      </div>
    </div>
    <div class="w-2/3 lg:w-132 flex justify-start">
      <button @click="reset()" class="px-14 py-3 font-semibold bg-yellow-400 hover:bg-yellow-300 rounded-md cursor-pointer shadown">شروع دوباره</button>
    </div>
  </div>
</template>

<script setup>
import { cards } from '@/utils/cards'
import SingleBox from './SingleBox.vue'
import { useStore } from 'vuex';

const store = useStore();

function reset(){
  store.commit('Main/resetTheGame');
}

</script>

<style scoped>

</style>
