<template>
  <footer>
    <div class="my-header-footer-width">
      <div
        class="py-7 my-border-color sm:flex sm:justify-between sm:items-center border-t"
      >
        <ul class="flex flex-wrap gap-4 justify-center lg:justify-end text-xs">
          <li class="text-sm">Thanks for visiting 👋</li>
        </ul>
        <ul class="flex gap-6 justify-center lg:justify-end mt-8 sm:mt-0">
          <a :href="'mailto:' + $emailAddress" class="my-icon">
            <font-awesome-icon :icon="['fas', 'envelope']" size="xl" />
          </a>
          <a :href="$githubUrl" class="my-icon">
            <font-awesome-icon :icon="['fab', 'github']" size="xl" />
          </a>
        </ul>
      </div>
    </div>
  </footer>
</template>
