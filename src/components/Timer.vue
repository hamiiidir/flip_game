<template>
    <div class="flex items-center text-3xl font-bold">
        <div>{{ minutes }}:</div>
        <div>{{ seconds }} </div>
        <div class="ml-3">زمان</div>
    </div>
</template>

<script setup>
import { ref } from '@vue/reactivity';
import { onMounted } from '@vue/runtime-core';
import { useStore } from 'vuex';
const store = useStore();
const time = ref(store.state.Main.startingMinutes * 60)
const minutes = ref()
const seconds = ref()

function updateCountdown(){
    minutes.value = Math.floor(time.value / 60)

    minutes.value = minutes.value < 10 ? '0' + minutes.value : minutes.value

    seconds.value = time.value % 60

    seconds.value = seconds.value < 10 ? '0' + seconds.value : seconds.value

    time.value = time.value - 1

}


onMounted(() => {
    updateCountdown()
    setInterval(updateCountdown, 1000)
})

</script>