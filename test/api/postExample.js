// Post API (create new user)

const request = require('supertest')
const baseUrl = require('../../environment')

describe('Post Request example', () => {
    it('Success create user', async() => {
        const response = request('baseUrl')
        .post('/user')
        .send({
            "id": "h3h3",
            "username": "haha3",
            "firstName": "he",
            "lastName": "he",
            "email": "hihehe@gmail.com",
            "password": "trying",
            "phone": "6274",
            "userStatus": 1
        })
    })
})