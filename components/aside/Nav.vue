<script lang="ts" setup>
const { menus } = useMenus()
</script>

<template>
  <div w-auto h-full overflow-auto>
    <nav
      flex="~ col"
      justify-start
      max-w-sm
      overflow-y-auto
      p-4
      gap-2
    >
      <template v-for="menu in menus" :key="menu.name">
        <AsideNavItem
          :name="menu.name" :path="menu.path"
          hover="bg-gray3 dark:bg-dark3 op80 rounded"
        />
      </template>
    </nav>
  </div>
</template>
