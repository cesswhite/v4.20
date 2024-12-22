export const useIndexStore = defineStore('useIndexStore', {
    state: () => ({
        name: ''
    }),
})

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useIndexStore, import.meta.hot))
}