<template>
  <div dir="rtl" class="flex justify-center items-center w-full h-auto">

    <div class="flex flex-col justify-start items-start w-2/3 h-156 py-12 lg:w-132 border">
        <div class="flex justify-between items-center w-full px-20 mb-6">
            <label class="flex-shrink-0 text-3xl font-semibold ml-6">زمان بازی</label>
            <input type="text" v-model="store.state.Main.startingMinutes" class="flex-shrink-0 h-12 w-1/2 px-4 text-3xl font-semibold border border-slate-400 focus:outline-none rounded">
        </div>
        <div class="flex justify-between items-center w-full px-20">
            <label class="flex-shrink-0 text-3xl font-semibold ml-6">تعداد حرکت</label>
            <input type="text" v-model="store.state.Main.maxPlays" class="flex-shrink-0 h-12 w-1/2 px-4 text-3xl font-semibold border border-slate-400 focus:outline-none rounded">
        </div>
    </div>

  </div>
</template>

<script setup>
import { useStore } from 'vuex';
const store = useStore();

</script>