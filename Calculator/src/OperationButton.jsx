import { ACTIONS } from "./App"

const OperationButton = ({dispatch, operation}) => {
    return(
        <button onClick={() => dispatch({type : ACTIONS.CHOOSE_OPERATION, payload : {operation}})}>{operation}</button>
    )
}

export default OperationButton

// export default function OperationButton({dispatch, operation}) {
//     return (
//         <button onClick={() => 
//             dispatch({type : ACTIONS.CHOOSE_OPERATION, payload : {operation}})}>
//                 {operation}
//             </button>
//     )
// }