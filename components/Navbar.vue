<template>
    <Disclosure as="nav" class="site-nav bg-white shadow" v-slot="{ open }">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="flex h-16 justify-between">
          <div class="flex">
            <div class="-ml-2 mr-2 flex items-center md:hidden">
              <!-- Mobile menu button | hidden on desktop -->
              <DisclosureButton
                class="
                  inline-flex 
                  items-center 
                  justify-center 
                  rounded-md p-2 
                  text-gray-400 
                  hover:bg-gray-100 
                  hover:text-gray-500 
                  focus:outline-none 
                  focus:ring-2 
                  focus:ring-inset 
                  focus:ring-red-500
                  ">
                <span class="sr-only">Open main menu</span>
                <MenuIcon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
                <XIcon v-else class="block h-6 w-6" aria-hidden="true" />
              </DisclosureButton>
            </div>
            <div 
              class="
                flex 
                flex-shrink-0 
                items-center
                font-black
                text-xl
            ">
              <h1><nuxt-link to="/blog">SAASTODON</nuxt-link></h1>
            </div>
            <div class="hidden md:ml-6 md:flex md:space-x-8">
              
              <!-- Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" -->
                <div class="
                  inline-flex 
                  items-center 
                  px-1 
                  pt-1 
                  text-lg 
                  font-bold 
                  text-gray-900"
                  >
                  <div class="flex space-x-4">
                    <a v-for="
                      item in navigation" 
                      :key="item.name" 
                      :href="item.href" 
                      :class="[item.current ? 'bg-gray-900 text-white' : 'text-gray-800 hover:bg-gray-200', 'px-3 py-2 rounded-md text-sm font-medium']" 
                      :aria-current="item.current ? 'page' : undefined">
                      {{ item.name }}
                    </a>
                  </div>
                </div>
            </div>
          </div>
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <button type="button" 
                class="
                relative 
                inline-flex 
                items-center 
                rounded-md 
                border 
                border-transparent 
                bg-red-600 
                px-4 
                py-2 
                text-sm 
                font-medium 
                text-white 
                shadow-sm 
                hover:bg-red-700 
                focus:outline-none 
                focus:ring-2 
                focus:ring-indigo-500 
                focus:ring-offset-2
                ">
                  <PlusIcon class="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
                  <span>Join FREE</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <!-- hidden mobile navigation -->
      <DisclosurePanel class="md:hidden">
        <div class="space-y-1 pt-2 pb-3"
        v-for="
            item in navigation" 
            :key="item.name" 
            :href="item.href"  
            :aria-current="item.current ? 'page' : undefined"
            >
          <!-- Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" -->
          <DisclosureButton as="a" class="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700 sm:pl-5 sm:pr-6">{{ item.name }}</DisclosureButton>
        </div>
      </DisclosurePanel>
    </Disclosure>
  </template>

<script setup>
  import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
  import { MenuIcon, XIcon } from '@heroicons/vue/outline'
  import { PlusIcon } from '@heroicons/vue/solid'

  const navigation = [
    { name: 'NEWS', href: '/blog', current: false },
  ]
</script>

<style scoped>
.site-nav {
  @apply sticky top-0 w-full p-4 bg-slate-100 bg-opacity-40 border-b-2 border-white border-opacity-30 backdrop-blur-lg z-20;
}
</style>