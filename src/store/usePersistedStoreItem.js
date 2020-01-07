import { useStore } from "."

export default function usePersistedStoreItem(key, defaultValue) {
    const [state, setState] = useStore()
    const currentValue = (key in state) ? state[key] : getLSItem(key, defaultValue)

    const setValue = value => {
        value = val(value, currentValue)
        setState({ ...state, [key]: value })
        setLSItem(key, value)
    }

    return [currentValue, setValue]
}

function setLSItem(key, value) {
    localStorage.setItem(key, JSON.stringify(value))
}

function getLSItem(key, defaultValue) {
    try {
        return JSON.parse(localStorage.getItem(key)) || val(defaultValue)
    } catch (error) {
        return val(defaultValue)
    }
}

function val(value, ...args) {
    return typeof value === 'function' ? value(...args) : value
}
