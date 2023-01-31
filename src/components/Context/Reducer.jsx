import { handleInputChange, handleEmailChange, handleSelectChange, handleContactChange, handleNext, handlePrev,handleStep1validation,handleStep2validation,handleStep3validation,handleSubmit } from "./Actions"
export const formReducer = (state, action) => {
    switch (action.type) {
        case handleInputChange:
            if (action.payload.value.length > 3) {
                return {
                    ...state, data: { ...state.data, [action.payload.name]: action.payload.value }, errors: {...state.errors,[action.payload.name]:''}
                }
            }
            else {
                return {
                    ...state, data: { ...state.data, [action.payload.name]: action.payload.value }, errors: { [action.payload.name]: `${action.payload.name} cannot be less than 4 characters` }
                }
            }
        case handleEmailChange:
            const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
            if (regex.test(action.payload.value)) {
                return {
                    ...state, data: { ...state.data, [action.payload.name]: action.payload.value }, errors: {...state.errors,[action.payload.name]:''
                    }
                }    
            }
            else {
                return {
                    ...state, data: { ...state.data, [action.payload.name]: action.payload.value }, errors: { [action.payload.name]: "Please enter a valid email" }
                }
            }
        case handleSelectChange:
            return {
                ...state, data: { ...state.data, [action.payload.name]: action.payload.value,errors: {...state.errors,[action.payload.name]:''
                    } }
            }
        case handleContactChange:
            const regexContact = /^((\+91)|0)?[6789]\d{9}$/
            if (regexContact.test(action.payload.value)) {
                return {
                    ...state, data: { ...state.data, [action.payload.name]: action.payload.value }, errors: {...state.errors,[action.payload.name]:''
                }
                }
            }
            else {
                return {
                    ...state, data: { ...state.data, [action.payload.name]: action.payload.value }, errors: { [action.payload.name]: "Please enter a valid Contact Number" }
                }
            }
        case handleNext:
            return {
                ...state, currentStep: state.currentStep + 1
            }
        case handlePrev:
            return {
                ...state, currentStep: state.currentStep - 1
            }

        case handleStep1validation:
            {
                const { data:{firstName,lastName,gender,phone,email}, errors }=state;

                if(firstName==='' || firstName.length<4){
                    errors.firstName='Please enter a valid firstName'
                }
                else{
                    errors.firstName=''
                }
                if(lastName==='' || lastName.length<4){
                    errors.lastName='Please enter a valid lastName'
                }
                else{
                    errors.lastName=''
                }
                if(gender==='' || gender.length<2){
                    errors.gender='Please select your gender'
                }
                else{
                    errors.gender=''
                }
                if(email===''){
                    errors.email='Please provide a valid email'
                }
                else{
                    errors.email=''
                }
                if(phone==='' || phone.length!==10){
                    errors.phone='Please provide a valid Contact Number'
                }
                else{
                    errors.phone=''
                }

                if(errors.firstName==='' && errors.lastName==='' && errors.gender==='' && errors.phone==='' && errors.email===''){
                    return {
                        ...state, currentStep: state.currentStep + 1
                    }
                }
                else{
                    
                    return {
                        ...state,errors
                    }
                }
            }
            case handleStep2validation:
            {
                const { data:{highestDegree,issuedBy,yearOfPassing},errors }=state;

                if(highestDegree===''){
                    errors.highestDegree='Please select a degree'
                }
                else{
                    errors.highestDegree=''
                }
                if(issuedBy==='' || issuedBy.length<4){
                    errors.issuedBy='Please enter a valid issuer'
                }
                else{
                    errors.issuedBy=''
                }
                if(yearOfPassing==='' || yearOfPassing.length<4){
                    errors.yearOfPassing='Please enter your Pass out year'
                }
                else{
                    errors.yearOfPassing=''
                }

                if(errors.yearOfPassing==='' && errors.issuedBy==='' && errors.highestDegree===''){
                    return {
                        ...state, currentStep: state.currentStep + 1
                    }
                }
                else{
                    
                    return {
                        ...state,errors
                    }
                }
            }

            
            case handleStep3validation:
            {
                const { data:{skill,jobApplyFor,workExperience,expectedSalary},errors }=state;

                if(skill==='' || skill.length<4){
                    errors.skill='Please select your skill'
                }
                else{
                    errors.skill=''
                }
                if(jobApplyFor==='' || jobApplyFor.length<4){
                    errors.jobApplyFor='Please select a job type'
                }
                else{
                    errors.jobApplyFor=''
                }
                if(workExperience===''){
                    errors.workExperience='Please select your workExperience'
                }
                else{
                    errors.workExperience=''
                }
                if(expectedSalary===''){
                    errors.expectedSalary='Please provide your expected salary'
                }
                else{
                    errors.expectedSalary=''
                }

                if(errors.skill==='' && errors.jobApplyFor==='' && errors.workExperience==='' && errors.expectedSalary===''){
                    console.log(state)
                    return {
                        ...state, currentStep: state.currentStep + 1
                    }
                }
                else{
                    
                    return {
                        ...state,errors
                    }
                }
            }
        default:
            break;
    }
}