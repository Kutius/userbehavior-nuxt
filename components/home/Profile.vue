<script lang="ts" setup>
const titleRef = ref()
const isHovered = useElementHover(titleRef)
</script>

<template>
  <section flex="~ col" justify-start w-full text-center px-4 lg:py-24 py-12>
    <h1
      ref="titleRef"
      lg:text-6xl xl:text-7xl text-5xl
      mb-6 font-serif cursor-pointer
    >
      The
      <span text-primary>User Behavior</span>
      Log System
    </h1>
    <span
      bg-opacity-50 rounded-lg
      h-min mb-8 p-2
      backdrop-blur-sm
    >
      <h2
        lg:text-xl text-lg
        font="normal sans"
        dark:text-gray4
        text-gray7
        px-8
      >
        User Behavior Log System is a simple, easy to use, and powerful system.
        Based on MapReduce, it can be used to analyze behavior of user, making
        visible and intuitive.
      </h2>
    </span>
    <div
      flex="~ col wrap lg:row"
      items-center justify-center
      font="sans medium"
      gap-4
    >
      <nuxt-link
        to="/"
        class="rounded-md inline-flex items-center px-4 py-2.5 gap-2
          hover:(bg-gray-200 dark:bg-gray-700)"
      >
        <div i-carbon-logo-github />
        Star on Github
      </nuxt-link>
      <nuxt-link to="/processing-log" class="btn">
        Processing
      </nuxt-link>
    </div>
  </section>
  <HomeLayer :is-hovered="isHovered" />
</template>
