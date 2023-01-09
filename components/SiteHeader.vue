./components/SiteHeader.vue

<template>
  <header class="site-header">
    <div class="wrapper">
      <NuxtLink to="/" class="no-underline">
        <figure class="site-logo">
          <h1>Saastodon</h1>
        </figure>
      </NuxtLink>

      <nav class="site-nav">
        <ul class="links">
          <li class="link">
            <NuxtLink to="/blog">Blog</NuxtLink>
            <span> | </span>
            <div class="flex-shrink-0">
              <button type="button" class="relative inline-flex items-center rounded-md border border-transparent bg-indigo-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-800">
                <PlusIcon class="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
                <span>New Job</span>
              </button>
            </div>
            <NuxtLink to="/">
              <button type="submit" class="flex w-full items-center justify-center rounded-md border border-transparent bg-red-600 px-5 py-3 text-base font-medium text-white hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-800">
                Join FREE
              </button>
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.site-header {
  @apply sticky top-0 w-full p-4 bg-slate-100 bg-opacity-40 border-b-2 border-white border-opacity-30 backdrop-blur-lg z-20;
}

.site-header > .wrapper {
  @apply flex items-center justify-between max-w-6xl m-auto;
}

.site-logo {
  @apply font-black text-lg;
}
</style>
