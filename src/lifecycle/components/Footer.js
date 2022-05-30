import React from "react";

// export default class FooterComponent extends React.PureComponent{
//     render(){
//         console.log('Footer')
//         return(
//             <h2>This is a Footer</h2>
//         )
//     }
// }

const FooterComponent = () => {
    console.log('FooterComponent render')
    return (
        <h2>This is a Footer</h2>
    )
}

export default React.memo(FooterComponent)