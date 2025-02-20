<script setup lang="ts">
import WhatIDo from "@/components/WhatIDo.vue";
import Projects from "@/components/Projects.vue";
import Contact from "@/components/Contact.vue";

import GlitchedWriter from "vue-glitched-writer";
</script>

<template>
  <section>
    <div class="mx-auto max-w-xl">
      <p class="absolute font-mono text-xl">
        >
        <glitched-writer
          :text="[
            'App developer',
            'Linux enthusiast',
            'Hardware tinkerer',
            'Language lover',
            'Hobby gamer',
          ]"
          preset="typewriter"
          mode="erase"
          :queue="{
            loop: true,
          }"
        />
      </p>
      <h2 class="my-14 text-3xl font-bold">Hi, I'm mauble 🤝</h2>
      <p class="mb-4">Welcome to my personal website.</p>
      <p class="mb-4">
        I am a software developer from Germany who greatly enjoys coding and
        tinkering with electronics.
      </p>
      <p class="mb-4">
        My specialities are infrastructure, backend and web development.
      </p>
      <p class="mb-4">
        When I am not coding, I enjoy listening to music, playing some guitar,
        freshening up my language skills or playing some video games 😄
      </p>
    </div>
  </section>

  <section id="what-i-do">
    <WhatIDo />
  </section>

  <section id="projects">
    <Projects />
  </section>

  <section id="contact">
    <Contact />
  </section>
</template>

<style>
@media (max-width: 1000px) {
  section {
    @apply flex my-40;
  }
}
@media (min-width: 1000px) {
  section {
    @apply flex items-center min-h-screen;
  }
}
</style>
