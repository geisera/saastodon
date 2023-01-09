<template>
    <Disclosure as="nav" class="site-nav bg-white shadow" v-slot="{ open }">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="flex h-16 justify-between">
          <div class="flex">
            <div class="-ml-2 mr-2 flex items-center md:hidden">
              <!-- Mobile menu button -->
              <DisclosureButton class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                <span class="sr-only">Open main menu</span>
                <MenuIcon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
                <XIcon v-else class="block h-6 w-6" aria-hidden="true" />
              </DisclosureButton>
            </div>
            <div class="flex flex-shrink-0 items-center">
                <h1>Saastodon Logo</h1>
            </div>
            <div class="hidden md:ml-6 md:flex md:space-x-8">
              <!-- Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" -->
              <a href="/blog" class="inline-flex items-center border-b-2 border-red-500 px-1 pt-1 text-sm font-medium text-gray-900">News</a>
              <a href="#" class="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-900">Podcast</a>
              <a href="#" class="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-900">Youtube</a>
              <a href="#" class="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-900">Newsletter</a>
            </div>
          </div>
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <button type="button" class="relative inline-flex items-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                <PlusIcon class="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
                <span>Join FREE</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Disclosure>
</template>

<script setup>
    import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
    import { MenuIcon, BellIcon, XIcon } from '@heroicons/vue/outline'
    import { PlusIcon } from '@heroicons/vue/solid'
</script>

<style scoped>
.site-nav {
  @apply sticky top-0 w-full p-4 bg-slate-100 bg-opacity-40 border-b-2 border-white border-opacity-30 backdrop-blur-lg z-20;
}
</style>