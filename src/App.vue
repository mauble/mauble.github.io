<script setup lang="ts">
import { RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <span class="my-app-bg-color" />
  <body class="my-body-margin">
    <Navbar />
    <div class="my-router-width">
      <RouterView />
    </div>
    <Footer />
  </body>
</template>

<style>
@keyframes BackgroundGradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.my-app-bg-color {
  animation: BackgroundGradient 40s ease-in-out infinite;
  background: linear-gradient(170deg, #6b2b00, #030053, #000000);
  background-size: 500% 200%;
  z-index: -1;
  width: 100vw;
  height: 100vh;
  position: fixed;
}

.my-router-width {
  @apply max-w-5xl px-9 mx-auto;
}

.my-body-margin {
  @apply flex flex-col min-h-screen justify-between;
}
</style>
