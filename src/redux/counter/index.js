import React from "react";
import { Provider } from "react-redux";
import CounterPage from './pages/Counter'
import store from "./store/index"
    
// share data nam trong store thong qua provider

const AppCounter = () => {
    return (
        <Provider store={store}>
            <CounterPage />
        </Provider>
    )
}
export default React.memo(AppCounter)