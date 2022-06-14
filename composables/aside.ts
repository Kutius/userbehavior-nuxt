import { acceptHMRUpdate, defineStore } from 'pinia'

export const useAsideStore = defineStore('aside', () => {

	const menuVisibility = ref(false)

	const toggleMenu = () => (menuVisibility.value = !menuVisibility.value)

	return {
    menuVisibility,
    toggleMenu
  }
})

if (import.meta.hot)
	import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
