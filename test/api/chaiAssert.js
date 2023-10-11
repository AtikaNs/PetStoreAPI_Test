const {expect} = require('chai')
const request = require('supertest')
const baseUrl = require('../../environment')

describe('Post Request Example', () => {
    const response = request('https://petstore.swagger.io/v2')
    .post('/user')
    .send({
        "id": 12365,
        "username": "haha3",
        "firstName": "he",
        "lastName": "he",
        "email": "hihehe@gmail.com",
        "password": "trying",
        "phone": "6274",
        "userStatus": 1
    })

    it('response status equal to 200', async() => {
        // Check response status equal to 200
        expect((await response).status).to.equal(200)
    })

    it('response body to haveOwnProperty', async() => {
        // Expect the body response has value
        expect((await response).body).to.haveOwnProperty('message')
    })

    //Reporting in mochawesome

})