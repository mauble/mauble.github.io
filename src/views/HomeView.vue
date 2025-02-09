<script setup lang="ts">
import WhatIDo from "@/components/WhatIDo.vue";
import Projects from "@/components/Projects.vue";

import GlitchedWriter from "vue-glitched-writer";
</script>

<template>
  <section>
    <div class="flex items-center h-screen">
      <div class="mx-auto max-w-xl">
        <p class="absolute font-mono text-xl">
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
        <h2 class="my-10 text-4xl font-bold">Hi, I'm mauble 🤝</h2>
        <p class="mb-4">Welcome to my personal website.</p>
        <p class="mb-4">
          I am a software developer from Germany who greatly enjoys coding and
          tinkering with electronics.
        </p>
        <p class="mb-4">
          My specialities are infrastructure, backend and web development.
        </p>
        <p class="mb-4">
          When I am not coding, I enjoy listening to music, freshing up my
          language skills or playing some video games 😄
        </p>
      </div>
    </div>
  </section>

  <section id="what-i-do">
    <WhatIDo />
  </section>

  <section id="projects">
    <Projects />
  </section>

  <section id="contact">
    <div class="w-full px-7 mx-auto max-w-5xl">
      <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div class="m-auto">
          <h2 class="text-dark mb-6 text-4xl font-bold">Contact.</h2>
          <div class="mb-12">
            <p>Do you have questions or want to send a request?</p>
            <p>Just send me a quick e-mail 🙌</p>
          </div>
        </div>
        <div class="p-8 relative rounded-3xl shadow-xl my-bg-color-element">
          <form>
            <div class="mb-3">
              <input
                type="text"
                placeholder="Your name"
                class="p-3 border rounded-3xl outline-none w-full"
              />
            </div>
            <div class="mb-6">
              <input
                type="email"
                placeholder="Your e-mail"
                class="p-3 border rounded-3xl outline-none w-full"
              />
            </div>
            <div class="mb-6">
              <textarea
                rows="6"
                placeholder="Your message"
                class="p-3 border rounded-3xl outline-none resize-none w-full"
              ></textarea>
            </div>
            <button type="submit" class="my-btn w-full">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
