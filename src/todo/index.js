import React from "react";
import LayoutTodo from "./components/layout";
import InputTodo from "./components/Input";
import ButtonTodo from "./components/Button";
import ListTodo from "./components/List";

class AppTodo extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            keyword: '',
            listData: [],
            // [{id:1 , name:"Hoc CSS" , done: false}{}{}]
            // [{id:1 , name:"Hoc CSS" , done: true}{}{}]
            idTodo: '1'
        }
    }
    finishItem = (idItem) => {
        //tim object con ben trong cai mang list Data theo id
        // cap nhat lay key(Done) trong object ve true
        // luu y khong cap nhat nham sang cong viec khac
        // khong cap nhat du lieu trong object
        let newData = this.state.listData.map(item => {
            return item.id === idItem ? { ...item, done: !item.done } : item
        })
        this.setState({ listData: newData })
    }
    removeItemTodo = (idItem) => {
        //tim object con ben trong cai mang list Data va xoa no di
        // tra ve 1 newArr khong lam thay doi listData ban dau
        // Cap nhat lai listData ban dau bang newArr do
        const newData = this.state.listData.filter(item => item.id !== idItem)
        this.setState({ listData: newData });
    }
    changeKeyword = (event) => {
        let keyValue = event.target.value
        // cap nhat thay doi state
        this.setState({ keyword: keyValue })
    }
    addTodo = () => {
        let dataKeyword = this.state.keyword.trim()
        if (dataKeyword.length > 0) {
            //cap nhat state listData va idTodo
            // idTodo
            this.setState(state => ({ idTodo: this.state.idTodo + 1 }))
            //list data them lai data vao mang data ban dau
            //cach 1
            this.setState(state => ({
                listData: [...state.listData, {
                    id: state.idTodo,
                    name: state.keyword,
                    done: false
                }]
            }))
            this.setState({ keyword: '' })
            //cach 2
            // this.setState({
            //     listData: [...this.state.listData, {
            //         id: this.state.idTodo,
            //         name: this.state.keyword,
            //         done: false
            //     }
            //     ]
            // })
        }
    }

    render() {
        //khi thay doi state => render chay lai
        // console.log(this.state.listData)// xem lai cac state da thay doi
        return (
            <>
                <LayoutTodo>
                    <div style={{ margin: "20px" }}>
                        <InputTodo
                            change={this.changeKeyword}
                            type='text'
                            name='todo'
                            val={this.state.keyword}
                        />
                        <ButtonTodo
                            type='button'
                            click={this.addTodo}
                        >Add</ButtonTodo>
                        <ListTodo
                            todo={this.state.listData}
                            remove={this.removeItemTodo}
                            finish={this.finishItem}
                        />
                    </div>
                </LayoutTodo>
            </>
        )
    }
}
export default AppTodo