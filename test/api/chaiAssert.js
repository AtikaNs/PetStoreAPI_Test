const {expect} = require('chai')
const request = require('supertest')
const baseUrl = require('../../environment')
const DATA = require('../../data/userData.js')
const DATAPET = require('../../data/petData.js')
const DATAORDER = require('../../data/orderData.js')

describe('Get Request Example', () => {
    const response = request(baseUrl)
    .get('/store/inventory')

    it('response status equal to 200', async() => {
        // Check response status equal to 200
        expect((await response).status).to.equal(200)
    })

    it('response body to have property', async () => {
        expect((await response).body).to.haveOwnProperty(`available`)
        expect((await response).body).to.haveOwnProperty(`unavailable`)
        expect((await response).body).to.haveOwnProperty(`pending`)
        expect((await response).body).to.haveOwnProperty(`status`)
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
})

describe('add Pet test', () => {
    const response = request(baseUrl)
    .post('/pet')
    .send(DATAPET.CREATE_PET_DATA)

    it('response status equal to 200', async() => {
        // Check response status equal to 200
        expect((await response).status).to.equal(200)
    })

    it('response body to haveOwnProperty', async() => {
        // Expect the body response has value
        expect((await response).body).to.haveOwnProperty('message')
    })
})

describe('get Pet data', () => {
    const response = request(baseUrl)
    .get('/pet/152')

    it('response status equal to 200', async() => {
        // Check response status equal to 200
        expect((await response).status).to.equal(200)
    })
    it('response body to have property', async () => {
        expect((await response).body).to.haveOwnProperty(`available`)
        expect((await response).body).to.haveOwnProperty(`pending`)
        expect((await response).body).to.haveOwnProperty(`sold`)
    })
})

describe('update Pet data', () => {
    const response = request(baseUrl)
    .post('/pet')
    .send(DATAPET.UPDATE_PET)

    it('response status equal to 200', async() => {
        // Check response status equal to 200
        expect((await response).status).to.equal(200)
    })

    it('response body to haveOwnProperty', async() => {
        // Expect the body response has value
        expect((await response).body).to.haveOwnProperty('message')
    })
})

describe('delete Pet data', () => {
    const response = request(baseUrl)
    .delete('/pet/150')

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

    it('response body to haveOwnProperty', async() => {
        // Expect the body response has value
        expect((await response).body).to.haveOwnProperty('message')
    })
})

describe('get Order by Id', () => {
    const response = request(baseUrl)
    .get('/store/order/3')

    it('response status equal to 200', async() => {
        // Check response status equal to 200
        expect((await response).status).to.equal(200)
    })
    it('response body to have property', async () => {
        expect((await response).body).to.haveOwnProperty(`placed`)
        expect((await response).body).to.haveOwnProperty(`approved`)
        expect((await response).body).to.haveOwnProperty(`delivered`)
    })
})

describe('delete Order', () => {
    const response = request(baseUrl)
    .delete('/store/order/8')

    it('response status equal to 200', async() => {
        // Check response status equal to 200
        expect((await response).status).to.equal(200)
    })
    
    it('response body to haveOwnProperty', async() => {
        // Expect the body response has value
        expect((await response).body).to.haveOwnProperty('message')
    })
})