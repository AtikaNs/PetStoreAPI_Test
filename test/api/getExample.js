// Get API (store inventory)

const request = require('supertest')
const baseUrl = require('../../environment')

describe('Get Request example', () => {
    it('Find Store Inventory', async() => {
        const response = request('baseURL')
        .get('/store/inventory')
        console.log((await response).status)
        console.log((await response).body)
    })
})