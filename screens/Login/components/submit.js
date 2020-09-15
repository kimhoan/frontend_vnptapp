// import { SubmissionError } from 'redux-form'

// const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

// function submit(values) {
//     console.log("VALUEEES", values)
//     return sleep(1000) // simulate server latency
//         .then(() => {
//             if (!['kimhoan', 'test1', 'test2', 'test3'].includes(values.username)) {
//                 throw new SubmissionError({ username: 'Sai tên đăng nhập mk', _error: 'Login failed!' })
//             } else if (values.password !== 'redux-form') {
//                 throw new SubmissionError({ password: 'Wrong password', _error: 'Login failed!' })
//             } else {
//                 window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`)
//             }
//         })
// }

// export default submit