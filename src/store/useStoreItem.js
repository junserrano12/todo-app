import { useStore } from '.'

export default function useStoreItem(key, defaultValue) {
    const [state, setState] = useStore()
    const currentValue = (key in state) ? state[key] : val(defaultValue)

    const setValue = value => {
        setState({ ...state, [key]: val(value, currentValue) })
    }

    return [currentValue, setValue]
}

function val(value, ...args) {
    return typeof value === 'function' ? value(...args) : value
}
