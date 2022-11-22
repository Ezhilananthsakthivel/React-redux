import React from "react";
import Test1 from "./test1";
import Test2 from "./test2";
import { Provider } from 'react-redux'
import store from './store'

function App() {
    return (
        <Provider store={store}>
            <h1>App</h1>
            <Test1 />
            <Test2 />
        </Provider>
    );
}

export default App;