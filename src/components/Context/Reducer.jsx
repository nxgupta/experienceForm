import { handleInputChange,handleEmailChange,handleSelectChange,handleContactChange, handleNext,handlePrev } from "./Actions"
export const formReducer=(state,action)=>{
    switch(action.type){
        case handleInputChange:
            if(action.payload.value.length>3){
                return {
                    ...state,data:{...state.data,[action.payload.name]:action.payload.value},errors:''
                }}
            else{
                return{
                    ...state,data:{...state.data,[action.payload.name]:action.payload.value},errors:{[action.payload.name]:`${action.payload.name} cannot be less than 4 characters`}
                }
            }
        case handleEmailChange:
            const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
            if(regex.test(action.payload.value)){
                return {
                    ...state,data:{...state.data,[action.payload.name]:action.payload.value},errors:''
                }}
            else{
                return{
                    ...state,data:{...state.data,[action.payload.name]:action.payload.value},errors:{[action.payload.name]:"Please enter a valid email"}
                }
            }
        case handleSelectChange:
            return {
                ...state,data:{...state.data,[action.payload.name]:action.payload.value}
            }
        case handleContactChange:
            const regexContact=/^((\+91)|0)?[6789]\d{9}$/
            if(regexContact.test(action.payload.value)){
                return {
                    ...state,data:{...state.data,[action.payload.name]:action.payload.value},errors:''
                }}
            else{
                return{
                    ...state,data:{...state.data,[action.payload.name]:action.payload.value},errors:{[action.payload.name]:"Please enter a valid Contact Number"}
                }
            }
        case handleNext:
            return {
                ...state,currentStep:state.currentStep+1
            }
        case handlePrev:
            return {
                ...state,currentStep:state.currentStep-1
            }
        default:
            break;
    }
}

// const handleSelectChange = (e) => {
//     const {data,errors}=state;
//     data[e.target.name] = e.target.value;
//     setState({ ...state, data, errors })
// }

// const handleEmailChange=(e)=>{
//     const {data,errors}=state;
//     data[e.target.name] = e.target.value;
//     const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
//     if(regex.test(e.target.value)){
//         errors[e.target.name] = null;
//     }
//     else{
//         errors[e.target.name] = 'Please provide a valid email address'
//     }
//     setState({ ...state, data, errors })
// }

// const handleContactChange=(e)=>{
//     const {data,errors}=state;
//     data[e.target.name] = e.target.value;
//     const regex=/^((\+91)|0)?[6789]\d{9}$/
//     if(regex.test(e.target.value)){
//         errors[e.target.name] = null;
//     }
//     else{
//         errors[e.target.name] = 'Please enter a valid number';
//     }
//     setState({ ...state, data, errors })
// }


// const handleNext = () => {
//     console.log('next clicked');
//     setState({ ...state, currentStep:state.currentStep + 1 })
// }
// const handlePrev = () => {
//     console.log('prev clicked');
//     setState({ ...state, currentStep:state.currentStep - 1 })
// }