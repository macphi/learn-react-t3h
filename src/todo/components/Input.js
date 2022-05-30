import React from 'react'
import PropTypes from 'prop-types'
export default class InputTodo extends React.Component{
    render(){
        return(
            <>
                <input
                 className='input-todo'
                 type={this.props.type} 
                 name={this.props.name} 
                 onChange={this.props.change}
                 value={this.props.val}
                 />
            </>
        )
    }
}
InputTodo.propTypes = {
    type: PropTypes.string.isRequired,
    naem: PropTypes.string,
    val: PropTypes.string,
    change: PropTypes.func.isRequired
}