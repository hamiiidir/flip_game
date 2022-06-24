<template>
    <div dir="rtl" class="flex justify-start items-center text-3xl font-bold">
        <div class="ml-2"> تعداد حرکت: </div>
        <div> {{ store.state.Main.playCounter }} </div>
    </div>
</template>

<script setup>
import { watch } from '@vue/runtime-core';
import { useStore } from 'vuex';
const store = useStore();

watch(() => store.state.Main.resetSensor, () => {
    store.commit('Main/resetPlayCounter')
})
</script>