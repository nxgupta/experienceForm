import * as Yup from 'yup'

export const formValidation = [Yup.object().shape({
    firstName: Yup.string().min(4).max(20).required('Please enter your First Name').trim(),
    lastName: Yup.string().min(4).max(20).required('Please enter your Last Name').trim(),
    email: Yup.string().email().min(10).required('Please enter your Email').trim(),
    phone: Yup.number().min(10).required('Please enter your number'),
    gender: Yup.string().required('Please select your gender')
}),

    Yup.object().shape({
    highestDegree: Yup.string().required('Please select your degree').trim(),
    issuedBy: Yup.string().required(`Please enter your degree issuer's details`).trim(),
    yearOfPassing: Yup.string().min(4, 'Pass Out must be at least 4 characters long')
    .max(4, 'Pass Out must not exceed 4 characters').required(`Please enter your degree issuer's details`)
}),

    Yup.object().shape({skill: Yup.string().required('Please select your degree').trim(),
    jobApplyFor: Yup.string().required('Please select your Job Type').trim(),
    workExperience: Yup.string().required('Please select your Work Experience').trim(),
    expectedSalary: Yup.string().required('Please enter your Expected Salary').trim()
})
]