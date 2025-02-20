<script setup lang="ts">
import { RouterLink } from "vue-router";
import { ref } from "vue";

const navbarItems = [
  { name: "About me", path: "/" },
  { name: "What I do", path: "/#what-i-do", hash: "#what-i-do" },
  { name: "Projects", path: "/#projects", hash: "#projects" },
  { name: "Contact", path: "/#contact", hash: "#contact" },
];

const isDropdownActive = ref(false);

function toggleDropdown() {
  isDropdownActive.value = !isDropdownActive.value;
}
</script>

<template>
  <div class="mb-16">
    <header
      class="my-navbar-color backdrop-blur-md fixed top-0 left-0 right-0 z-50"
    >
      <div class="my-header-footer-width">
        <div class="h-16 flex items-center justify-between">
          <RouterLink class="my-navbar-text text-xl block" to="/"
            >✨ mauble</RouterLink
          >
          <div class="md:flex md:gap-2">
            <nav class="hidden md:block">
              <ul class="flex items-center gap-6 text-lg">
                <li v-for="item in navbarItems" :key="item.name">
                  <RouterLink
                    class="my-navbar-text"
                    :to="{ path: item.path, hash: item.hash }"
                    >{{ item.name }}</RouterLink
                  >
                </li>
              </ul>
            </nav>

            <div class="flex items-center gap-4">
              <div class="block md:hidden">
                <button
                  class="my-element-color my-on-hover-opacity w-8 h-8 rounded-xl"
                  @click="toggleDropdown"
                >
                  <font-awesome-icon :icon="['fas', 'bars']" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div v-if="isDropdownActive" class="mb-6 space-y-2 md:hidden">
          <RouterLink
            v-for="item in navbarItems"
            :key="item.name"
            class="my-navbar-text text-center block"
            :to="{ path: item.path, hash: item.hash }"
          >
            {{ item.name }}
          </RouterLink>
        </div>
      </div>
    </header>
  </div>
</template>

<style>
.my-navbar-color {
  @apply bg-black/[.2];
}
.my-navbar-text {
  @apply text-white my-on-hover-opacity;
}
</style>
