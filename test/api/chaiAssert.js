const {expect} = require('chai')
const request = require('supertest')
const baseUrl = require('../../environment')
const DATA = require('../../data/userData.js')
const DATAPET = require('../../data/petData.js')
const DATAORDER = require('../../data/orderData.js')

describe('Get Request Example', () => {
    const response = request(baseUrl)
    .get('/store/inventory')

    it('status code is 200', async() => {
        // Check response status equal to 200
        expect((await response).status).to.equal(200)
    })

    it('response body to have property', async() => {
        expect((await response).body).to.haveOwnProperty(`available`)
        expect((await response).body).to.haveOwnProperty(`sold`)
    })
})

describe('Post Request Example', () => {
    const response = request(baseUrl)
    .post('/user')
    .send(DATA.CREATE_USERDATA)

    it('status code is 200', async() => {
        // Check response status equal to 200
        expect((await response).status).to.equal(201)
    }) // make sure that this post request can't be created since it response should be void

    it('response body to haveOwnProperty', async() => {
        // Expect the body response has value
        expect((await response).body).to.haveOwnProperty('message')
    })
})

describe('add Pet test', () => {
    const response = request(baseUrl)
    .post('/pet')
    .send(DATAPET.CREATE_PET_DATA)

    it('response status equal to 200', async() => {
        // Check response status equal to 200
        expect((await response).status).to.equal(200)
    })

    it('response body to the created id', async() => {
        // Expect the body response has the same id that has created before
        expect((await response).body).to.haveOwnProperty('{id: 35')
    })
})

describe('get invalid Pet data', () => {
    const response = request(baseUrl)
    .get('/pet/152')

    it('response status equal to 404 Not Found', async() => {
        // Check response status equal to 404
        expect((await response).status).to.equal(404)
    })
    it('response body to have message', async() => {
        // Expect the body response has value
        expect((await response).body).to.haveOwnProperty('message')
    })
})

describe('get valid Pet data', () => {
    const response = request(baseUrl)
    .get('/pet/35')

    it('response status equal to 200', async() => {
        // Check response status equal to 200
        expect((await response).status).to.equal(200)
    })
    it('response body contains requested Id', async() => {
        // Expect the body response contains requested value
        expect((await response).body).to.haveOwnProperty('{id: 35')
    })
})

describe('delete Pet data', () => {
    const response = request(baseUrl)
    .delete('/pet/35')

    it('response status equal to 200', async() => {
        // Check response status equal to 200
        expect((await response).status).to.equal(200)
    })

    it('response body to haveOwnProperty', async() => {
        // Expect the body response has value
        expect((await response).body).to.haveOwnProperty('message')
    })
})

describe('create Order', () => {
    const response = request(baseUrl)
    .post('/store/order')
    .send(DATAORDER.CREATE_ORDER_DATA)

    it('response status equal to 200', async() => {
        // Check response status equal to 200
        expect((await response).status).to.equal(200)
    })

    it('response body to the created id', async() => {
        // Expect the body response has the same id that has created before
        expect((await response).body).to.haveOwnProperty('{id: 25')
    })
})

describe('get Order by Id', () => {
    const response = request(baseUrl)
    .get('/store/order/25')

    it('response status equal to 200', async() => {
        // Check response status equal to 200
        expect((await response).status).to.equal(200)
    })
    it('response body to get right pet Id', async () => {
        expect((await response).body).to.haveOwnProperty(`{id: 23}`)
        expect((await response).body).to.haveOwnProperty(`status`)
        expect((await response).body).to.haveOwnProperty(`shipdate`)
    })
})

describe('delete Order', () => {
    const response = request(baseUrl)
    .delete('/store/order/25')

    it('response status equal to 200', async() => {
        // Check response status equal to 200
        expect((await response).status).to.equal(200)
    })
    
    it('response body to have the same deleted id', async() => {
        // Expect the body response has value
        expect((await response).body).to.haveOwnProperty('{id: 25}')
    })
})