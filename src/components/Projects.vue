<script setup lang="ts">
const projectItems = [
  {
    name: "Systolic",
    text: "Systolic is an Android app for tracking your blood pressure and medication usage. You can set measurement reminders, make backups of your measurements, and export your history as a PDF file for easy sharing.",
    url: "/systolic",
    img: "https://cdn.pixabay.com/photo/2018/07/08/19/59/blood-pressure-3524615_1280.jpg",
    tags: ["APP DEVELOPMENT", "CRUD", "UI / UX"],
  },
  {
    name: "Portfolio website",
    text: "My personal portfolio website that you are currently viewing. Built using Vue and Tailwind CSS.",
    url: "/mauble.github.io",
    img: "https://cdn.pixabay.com/photo/2021/03/18/19/56/keyboard-6105750_1280.jpg",
    tags: ["WEB DEVELOPMENT", "UI / UX"],
  },
];
</script>

<template>
  <div class="flex flex-col items-stretch">
    <h2 class="mb-24 text-center text-3xl font-bold">Featured projects.</h2>
    <div class="gap-8 grid grid-cols-1 md:grid-cols-2">
      <div class="mb-12 md:mb-0" v-for="item in projectItems">
        <a :href="$githubUrl + item.url">
          <img
            :src="item.img"
            class="my-on-hover-scale mb-8 rounded-3xl shadow-2xl max-h-64 object-cover w-full"
        /></a>
        <h5 class="text-xl mb-3 font-bold">{{ item.name }}</h5>
        <p class="flex-col">{{ item.text }}</p>
        <div class="mb-6 mt-8 flex flex-wrap gap-2">
          <div
            class="my-element-color p-2 text-sm font-semibold uppercase rounded-3xl"
            v-for="tag in item.tags"
          >
            <p>{{ tag }}</p>
          </div>
        </div>
        <a :href="item.url" class="my-btn">View project</a>
      </div>
    </div>
  </div>
</template>
