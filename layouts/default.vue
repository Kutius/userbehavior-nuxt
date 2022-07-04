<template>
  <div w-full>
    <Navigation />
    <main class="pb-20 lg:px-10 text-center px-6">
      <Aside />
      <slot />
      <Footer />
      <div class="mt-5 mx-auto text-center opacity-25 text-sm">
        [Default Layout]
      </div>
    </main>
  </div>
</template>
