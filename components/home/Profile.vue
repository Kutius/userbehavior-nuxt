<script lang="ts" setup></script>

<template>
  <section flex="~ col" justify-start w-full text-center px-4 lg:py-24 py-12>
    <h1 lg:text-6xl xl:text-7xl text-5xl mb-6 font-serif>
      The
      <span text-primary>User Behavior</span>
      Log System
    </h1>
    <h2
      lg:text-xl
      text-lg
      font-normal
      font-sans
      dark:text-blueGray
      text-neutral7
      mb-8
      px-8
    >
      User Behavior Log System is a simple, easy to use, and powerful system.
      Based on MapReduce, it can be used to analyze behavior of user, making
      visible and intuitive.
    </h2>
    <div
      flex="~ col"
      lg:flex-row
      flex-wrap
      items-center
      justify-center
      font-sans
      font-medium
      gap-4
    >
      <nuxt-link
        to="/"
        class="rounded-md inline-flex items-center px-4 py-2.5 gap-2 hover:(bg-gray-200 dark:bg-gray-700)"
      >
        <div i-carbon-logo-github />
        Star on Github
      </nuxt-link>
      <nuxt-link to="/" class="btn">Processing</nuxt-link>
    </div>
  </section>
</template>
