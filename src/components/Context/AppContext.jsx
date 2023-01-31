import { createContext, useReducer, useContext } from "react"
import {formReducer} from './Reducer'


const FormContext=createContext();

const AppContext = ({children}) => {
    
    const initialState={
        data: {
            firstName: "",
            lastName: "",
            gender: "",
            phone: "",
            email: "",

            highestDegree: "",
            issuedBy: "",
            yearOfPassing: "",
            jobType: "",

            skill: "",
            jobApplyFor: "",
            workExperience: "",
            expectedSalary: "",
        },
        errors: {},
        currentStep: 0,
    }

    const [state,dispatch]=useReducer(formReducer,initialState)

  return (
    <FormContext.Provider value={{state,dispatch}}>
        {children}
    </FormContext.Provider>
  )
}

export default AppContext

export const useFormContext=()=>{
    return useContext(FormContext)
}
