// const Result = (props) => {
//     // tat ca cac props tu ben ngoai vao component se nhan duojc tham props
//     // no la 1 object
//     console.log(props)
//     return (
//         <p>
//             count: {props.res}
//         </p>
//     )
// }
// export default Result

import React from "react";
export default class Result extends React.Component{
    render(){
        return(
            <p>Count: {this.props.res}</p>
        )
    }
}
