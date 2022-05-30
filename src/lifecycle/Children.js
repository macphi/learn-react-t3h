import React from 'react';

class ChildrentComponent extends React.PureComponent{
    componentWillUnmount(){
        // khong cap nhat setstate o day
        // xu ly cac logic gi do truoc component bi mat - huy
        console.log('ChildrenComponent unmounted')
    }
    render (){
        return(
            <h2> this is a child component</h2>
        )
    }
}
export default ChildrentComponent