const {expect} = require('chai')
const request = require('supertest')
const baseUrl = require('../../environment')
const DATA = require('../../data/userData.js')

describe('Get Request Example', () => {
    const response = request(baseUrl)
    .get('/store/inventory')
    
    it('response status equal to 200', async() => {
        // Check response status equal to 200
        expect((await response).status).to.equal(200)
    })
})

describe('Post Request Example', () => {
    const response = request(baseUrl)
    .post('/user')
    .send(DATA.CREATE_USERDATA)

    it('response status equal to 200', async() => {
        // Check response status equal to 200
        expect((await response).status).to.equal(200)
    })

    it('response body to haveOwnProperty', async() => {
        // Expect the body response has value
        expect((await response).body).to.haveOwnProperty('message')
    })

    //Reporting in mochawesome
    //npx mocha --spec test/api/chaiAssert.js --reporter mochawesome
})