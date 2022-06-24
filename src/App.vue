<template>
  <div class="flex flex-col justify-center items-center w-full h-screen">
    <transition name="default">
        <component :is="activeContainer"></component>
    </transition>    

    <div class="flex justify-start items-center w-2/3 h-auto lg:w-132">
      <button v-if="!ifSettings" @click="showSettings()" class="py-3 w-1/4 font-semibold bg-yellow-400 hover:bg-yellow-300 rounded-md cursor-pointer shadown">تنظیمات</button>
      <button v-else @click="showGame()" class="py-3 w-1/4 font-semibold bg-yellow-400 hover:bg-yellow-300 rounded-md cursor-pointer shadown">بازی</button>
      <button v-if="!ifSettings" @click="showGuide()" id="showGuide" class="flex justify-center items-center py-3 ml-6 w-1/4 font-semibold bg-yellow-400 hover:bg-yellow-300 rounded-md cursor-pointer shadown">
        <span> ({{ store.state.Main.guideCounter }}) </span>
        <span class="ml-1">راهنمایی</span>
      </button>
      <button @click="reset()" id="resetButton" class="invisible py-3 ml-6 w-1/4 font-semibold bg-yellow-400 hover:bg-yellow-300 rounded-md cursor-pointer shadown">شروع دوباره</button>
    </div>

  </div>
</template>

<script setup>
  import Game from './components/Game.vue'
  import Settings from './components/Settings.vue'
  import { hideResetButton, shakeAllCandidateCards, shakeSingleCard, showGuideButton } from '@/utils/functions'
  import { useStore } from 'vuex';
  import { ref, shallowRef } from '@vue/reactivity';
  import { onMounted, watch } from '@vue/runtime-core';
  const activeContainer = shallowRef()
  const ifSettings = ref(false)

  const store = useStore();

  function showSettings(){
    activeContainer.value = Settings
    ifSettings.value = true
    hideResetButton()
  }

  function showGame(){
    activeContainer.value = Game
    ifSettings.value = false

    setTimeout(() => {
      reset()
    }, 10);
  }

  function reset(){
    store.dispatch('Main/resetGame')
    showGuideButton()
    hideResetButton()
  }

  function showGuide(){
    if (store.state.Main.guideCounter <= 0) {
      return
    }

    const matchCandidates = store.state.Main.matchCandidates
    const cards = store.state.Main.cards

    if (matchCandidates.length == 1) {
      const match = cards.filter((item) => {
        return (item.name == matchCandidates[0].name) && (item.id != matchCandidates[0].id)
      })

      const matchElement = document.querySelector(`#card[index="${match[0].id}"]`)
      const matchElementParent = matchElement.parentElement

      shakeSingleCard(matchElementParent)

      store.commit('Main/countDownMaxGuide')
      
    } else if (matchCandidates.length == 0) {
      shakeAllCandidateCards()
    }

  }

  watch(() => store.state.Main.reset, () => {
    store.commit('Main/resetGuideCounter')
  })

  onMounted(() => {
    activeContainer.value = Game
  })

</script>


<style scope>
.default-enter-from {
    opacity: 0
}

.default-enter-active {
    transition: opacity 800ms
}

.default-enter-to {
    opacity: 1;
}

.default-leave-from {
    opacity: 0;
}

.default-leave-active {
    transition: opacity 0ms
}

.default-leave-to {
    opacity: 0
}
</style>


