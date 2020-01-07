import React from 'react'
import Routes from './Routes'
import {Provider} from './store'
import './assets/sass/main.scss'

const App = () => {

    return (
        <Provider>
            <div id="App">
                <Routes />
            </div>
        </Provider>
    )
}

export default App