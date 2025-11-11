import { useLocalStorage } from '@vueuse/core'

export const useIndexStore = defineStore('useIndexStore', {
    state: () => ({
        name: useLocalStorage('name', '')
    }),
    hydrate(state, initialState) {
        // SSR hydration setup - see README.md "Pinia SSR Configuration" section for details
        // @ts-expect-error
        state.name = useLocalStorage('name', '')
      },
})

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useIndexStore, import.meta.hot))
}