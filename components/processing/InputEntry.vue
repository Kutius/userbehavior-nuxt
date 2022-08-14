<script setup lang="ts">
const host = ref('')
const files = ref('')

const go = () => {}
</script>

<template>
  <div font-sans>
    <div flex="~ col" items-center gap6 py-4>
      <input
        id="input"
        v-model="host"
        placeholder="Host IP"
        type="text"
        autocomplete="off"
        p="x-4 y-2"
        w="250px"
        text="center"
        bg="transparent"
        border="~ rounded gray-200 dark:gray-700"
        outline="none active:none"
        @keydown.enter="go"
      >
      <input
        id="input"
        v-model="files"
        placeholder="The name of File"
        type="text"
        autocomplete="off"
        p="x-4 y-2"
        w="250px"
        text="center"
        bg="transparent"
        border="~ rounded gray-200 dark:gray-700"
        outline="none active:none"
        @keydown.enter="go"
      >
    </div>
    <div>
      <button m-3 text-sm btn :disabled="!host" @click="go">
        Upload
      </button>
      <button m-3 text-sm btn :disabled="!host" @click="go">
        Save
      </button>
      <button m-3 text-sm btn :disabled="!host" @click="go">
        Analyze
      </button>
    </div>
  </div>
</template>
