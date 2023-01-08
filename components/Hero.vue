<template>
  <div class="bg-gray-800">
    <div class="mx-auto max-w-7xl py-12 px-6 lg:flex lg:items-center lg:py-16 lg:px-8">
      <div class="lg:w-0 lg:flex-1">
        <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl" id="newsletter-headline">Be the hero of your SaaS company.</h2>
        <p class="mt-3 max-w-3xl text-lg leading-6 text-gray-300">
          Boiled down, actionable startegies for higher value, higher retention, and higher returns.  
        </p>
      </div>
      <div class="mt-8 lg:mt-0 lg:ml-8">
        <form class="sm:flex">
          <label for="email-address" class="sr-only">Email address</label>
          <input id="email-address" name="email-address" type="email" autocomplete="email" required="" class="w-full rounded-md border border-transparent px-5 py-3 placeholder-gray-500 focus:border-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 sm:max-w-xs" placeholder="Your email address" />
          <div class="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
            <button type="submit" class="flex w-full items-center justify-center rounded-md border border-transparent bg-red-600 px-5 py-3 text-base font-medium text-white hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-800">Join FREE</button>
          </div>
        </form>
        <p class="mt-3 text-sm text-gray-300">
          We won't share or sell your email with anyone, anywhere, at anytime, for any reason.
        </p>
      </div>
    </div>
  </div>
</template>


<script setup>
import { ref } from 'vue'
// import { Dialog, DialogPanel } from '@headlessui/vue'
// import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'

const navigation = [
  { name: 'News', href: '#' }
]

const mobileMenuOpen = ref(false)
</script>