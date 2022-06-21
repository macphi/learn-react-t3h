// import jwt from 'jsonwebtoken'
// import { KEY_TOKEN } from '../const/index'

const loginUser = ({ username, password }) => {
    let token = null
    // gia lap token - vi khong co api backend
    if (username === 'admin' && password === '123456789') {
        // ma hoa token
        //   jwt.sign({ id: 1, username: username }, KEY_TOKEN, { algorithm: 'RS256' })
        token = { id: 1, username: username }
    }
    // luu token vao localStorage tren trinh duyet
    return token
}
export const apiLogin = {
    loginUser
}

