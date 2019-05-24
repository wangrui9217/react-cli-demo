import axois from './axios'

export function Login (data) {
    return axois({
        url: 'app/api/app/userLogin/appLogin',
        method: 'post',
        data
    })
}
