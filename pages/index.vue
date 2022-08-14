<template>
  <div flex="~ col" justify-center py-0 class="container-content">
    <HomeProfile />
    <Suspense>
      <PageView />
      <template #fallback>
        <div op50 italic>
          <span animate-pulse>Loading...</span>
        </div>
      </template>
    </Suspense>
  </div>
</template>

<style>
.container-content {
  max-width: 80rem;
  @apply lg:px-6 px-4 mx-auto;
}
</style>
