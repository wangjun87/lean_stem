<script setup>
import { ref } from 'vue';
import HelloWorld from '../components/HelloWorld.vue';

const name = ref('ish')
const handleClickMini = () => {
  AMessage.info('hello isboyjc, click mini AButton!')
};
</script>
<template>
  <div>hello isboyjc, This is toolsdog home page!</div>
  <a-space>
    <a-button type="primary" size="mini" @click="handleClickMini">Mini</a-button>
    <a-button type="primary" size="small">Small</a-button>
    <a-button type="primary">Medium</a-button>
    <a-button type="primary" size="large">Large</a-button>
  </a-space>
    <!-- Icon -->
    <!-- <HelloWorld></HelloWorld> -->
    <div class="icon-style">
        <icon-ep-alarm-clock class="text-20px" />
        <icon-home-copy class="text-20px" />
        <icon-home-download class="text-20px" />
        <!-- <p class="text-xl text-pink italic font-bold tracking-widest leading-normal text-left overline decoration-green-500 decoration-3 indent-2xl text-opacity-50 text-shadow-lg text-stroke-sm text-stroke-gray-500 uppercase animate-bounce transition-opacity
         bg-yellow-500/50 bg-left-bottom bg-origin-border bg-gradient-to-r
         from-green-500 to-yellow-500">HELOO</p> -->
         <!-- <div class=" bg-pink flex flex-col">
            <div class="bg-black min-h-20 text-pink  text-center flex-col">1</div>
            <div class="bg-green min-h-20  text-center flex-col">2</div>
            <div class="bg-yellow min-h-20  text-center flex-col">3</div>
         </div> -->
         <h3>使用 Windi CSS</h3>
        <div class="flex items-center justify-around bg-teal-100 rounded-md p-4px w-192px">
            <div class="w-[25%] h-12 bg-red-400 rounded-md m-4px"></div>
            <div class="w-[25%] h-12 bg-green-400 rounded-md m-4px"></div>
            <div class="w-[25%] h-12 bg-blue-400 rounded-md m-4px"></div>
        </div>
    </div>
</template>
<style scoped>
</style>