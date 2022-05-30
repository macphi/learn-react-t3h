import React from 'react'
import ChildrentComponent from './Children'
class ParentComponent extends React.Component {
    //tim hieu ve cac lifecylce react
    // 1- mounting
    constructor(props) {
        super(props)
        //se chay dau tien va duy nat 1 lan trong giai doan mounting
        //thong thuong se la noi dinh nghia cac state trong component
        console.log('mounting - constructor ParentComponent is running')
        this.state = {
            color: 'red'
        }
    }
    static getDerivedStateFromProps(props, state) {
        console.log('Mounting or updating - getDerivedStateFromProps ParentComponent is running')
        console.log('props', props)
        console.log('state', state)
        console.log('--------------------------------- End mounting or Updating')
        //return ve 1 object de cap nhat lai state theo props truyen vao
        // return ve null khong lam gi ca
        // thong thuong kiem tra state cua component vs props truyen vao khong giong nhau thi cap nhat lai state theo props
        //goi setState cap nhat tra ve object
        return null //khong lam gi ca
    }
    changeColor = () => {
        this.setState({ color: 'blue' })
    }
    showHide = () => {
        this.setState({ show: false })
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log('  updating - getDerivedStateFromProps ParentComponent is running')
        // chay khi cap nhat state - updating
        // tra ve true - giao dien cap nhat lai
        // tra ve false khong lam gi ca
        // React.PureComponent: tich hop san va xu ly giup viec render lai giao dien hay khong
        console.log('nextProps', nextProps)
        console.log('nextState', nextState)

        if (nextState !== this.state.color) {
            return true
        }
        console.log('  end - getDerivedStateFromProps ParentComponent is running')
        return false

        // thogn thuong kiem tra state vs nextState hoac props cu voi nextProps co su thay doi thi return true de cap nhat lai giao dien
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('Updating - getSnapshotBeforeUpdate')
        console.log('prevProps:', prevProps)
        console.log('prevState:', prevState)
        console.log('end updating')
        return 'yellow'
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('Updating - componentDidUpdate')
        console.log('prevProps:', prevProps)
        console.log('prevState:', prevState)
        console.log('end updating')
        document.getElementById('title').style.color = snapshot
    }
    render() {
        // day la noi hien thi ra giao dien ui ux
        console.log('mounting - render')
        return (
            <>
                <h1 id='title' style={{ color: this.state.color }}>The component Lificycle</h1>
                {this.state.show && <ChildrentComponent />}
                <button onClick={() => this.changeColor()}> change color</button>
                <button onClick={()=> this.showHide()}>Destroy Children Component</button>
            </>
        )
    }
    componentDidMount() {
        console.log('mounting - render ParentComponent is running')
        //thong thuong noi day -- call data api sau do cap nhat lai state
    }

}
export default ParentComponent