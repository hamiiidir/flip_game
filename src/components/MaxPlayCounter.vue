<template>
    <div dir="rtl" id="maxPlayWrapper" class="flex justify-start items-center text-3xl font-bold">
        <div class="ml-2"> تعداد حرکت: </div>
        <div id="maxPlayCount"> {{ store.state.Main.playCounter }} </div>
    </div>
</template>

<script setup>
import { watch } from '@vue/runtime-core';
import { useStore } from 'vuex';
import { disableCardEvents } from '@/utils/functions'
const store = useStore();

watch(() => store.state.Main.reset, () => {
    store.commit('Main/resetPlayCounter')
})

watch(() => store.state.Main.playCounter, () => {
    if (store.state.Main.playCounter <= 0) {
        disableCardEvents()
    }
})
</script>