import {usePersistedStoreItem, useStoreItem} from '../store'

const useAuthContext = () => {
    const [auth, setAuth] = usePersistedStoreItem('auth', {
        isAuthenticated: false,
        expires: 5
    })

    return {auth, setAuth}
}

const useTestDataContext = () => {
    const [testData, setTestData] = useStoreItem('testData', {})

    const sampleData = [1, 2, 3, 4]

    return {testData, setTestData, sampleData}
}

export {
    useAuthContext,
    useTestDataContext
}