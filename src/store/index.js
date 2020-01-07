import createStore from './createStore'
import useStoreItem from './useStoreItem'
import usePersistedStoreItem from './usePersistedStoreItem'

const Store = createStore();
const Provider = Store.Provider
const useStore = Store.useStore

export default Store;

export {
    Provider,
    useStore,
    useStoreItem,
    usePersistedStoreItem
}
