<script setup lang="ts">
const skillItems = [
  {
    name: "Backend development",
    text: "I am experienced with building web services and database infrastructure.",
  },
  {
    name: "Web development",
    text: "I love building sleek and responsive websites for all purposes.",
  },
  {
    name: "Smartphone apps",
    text: "I have app making experience utilizing several frameworks like Flutter and Jetpack Compose.",
  },
  {
    name: "Game design",
    text: "I have been passionate about game development ever since I was young.",
  },
];
</script>

<template>
  <div class="flex flex-col items-stretch">
    <h2 class="text-center mb-24 text-3xl font-bold">What I do.</h2>
    <div class="gap-8 grid grid-cols-1 md:grid-cols-2">
      <div
        class="my-element-color my-on-hover-scale p-8 rounded-3xl"
        v-for="item in skillItems"
      >
        <h5 class="text-xl mb-3 font-bold">{{ item.name }}</h5>
        <p class="flex-col">{{ item.text }}</p>
      </div>
    </div>
  </div>
</template>
