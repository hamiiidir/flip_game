<template>
  <div class="flex justify-center items-center w-full h-screen">

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

      <div class="flex justify-start w-full">
        <button @click="reset()" id="resetButton" class="invisible px-14 py-3 font-semibold bg-yellow-400 hover:bg-yellow-300 rounded-md cursor-pointer shadown">شروع دوباره</button>
      </div>

    </div>

  </div>
</template>

<script setup>
import SingleBox from './SingleBox.vue'
import Timer from './Timer.vue'
import MaxPlayCounter from './MaxPlayCounter.vue'
import { hideResetButton } from '@/utils/functions'
import { useStore } from 'vuex';

const store = useStore();

function reset(){
  store.dispatch('Main/resetGame')
  hideResetButton()
}

</script>

<style scoped>

</style>
