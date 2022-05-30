import React from "react";
import PropTypes from'prop-types'
export default class ListTodo extends React.Component {
    render() {
        let color  = { color: 'red' }
        return (
            <>
                <ul className="list-todo">
                    {this.props.todo.map((item, index) => (
                        <li key={index}>
                            <span className={item.done ? 'color-done' : ''}>{item.name}</span>
                            <span onClick={() => this.props.finish(item.id)}>[Done]</span>
                            <span onClick={() => this.props.remove(item.id)}>[Delete]</span>
                        </li>
                    ))}
                </ul>
            </>
        )
    }
}
ListTodo.propTypes = {
    todo: PropTypes.array.isRequired
}