// trien khai class component
import React from "react";
//import component
import ButtonCounter from './components/Button'
import ResultCounter from "./components/Result";
export default class AppCounter extends React.Component {
    constructor(props) {
        //override
        super(props)
        // Su dung laij props trong constructor cua React
        // khai bao thuoc tinh co ten la state va gan gia tri cho no bang 1 object
        this.state = {
            count: 0
        }
        this.changeCount = this.changeCount.bind(this)
    }

    changeCount(val, type) {
        //Cap nhat thay doi state
        //click + thi tang gia tri count val don vi
        //click - thi giam gia tri count val don vi
        //can biet gia tri hien tai
        if (type === 0) {
            // c1
            // this.setState({ count: this.state.count - val })
            this.setState(state => ({ count: this.state.count - val }))
        } else if (type === 1) {
            this.setState({ count: this.state.count + val })
        }
    }
    // chi su dung trong class component -ke thua cua React.Component
    render() {
        // hien thi React DOM( JSX)
        return (
            <React.Fragment>
                <h1>App Counter</h1>
                {/* Goi component ra su dung co 2 cach*/}
                <ResultCounter res={this.state.count} />
                {/* + va - goi la props children  */}
                <ButtonCounter
                    type="button"
                    class="btn"
                    click={this.changeCount}
                    name={1}
                > + </ButtonCounter>
                <ButtonCounter
                    type="button"
                    class="btn-info"
                    click={this.changeCount}
                    name={0}
                > - </ButtonCounter>


            </React.Fragment>
        )
    }
}