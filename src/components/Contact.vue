<template>
  <div class="w-full px-7 mx-auto max-w-5xl">
    <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
      <div class="m-auto">
        <h2 class="text-dark mb-6 text-3xl font-bold">Contact.</h2>
        <div class="mb-12">
          <p>Do you have questions or want to send a request?</p>
          <p>Just send me a quick e-mail 🙌</p>
        </div>
      </div>
      <div
        class="my-element-color my-contact-text-color p-8 relative rounded-3xl shadow-xl"
      >
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
</template>

<style>
.my-contact-text-color {
  @apply text-black;
}
</style>
