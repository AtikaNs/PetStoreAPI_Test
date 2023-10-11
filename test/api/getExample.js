const request = require('supertest')
const baseUrl = require('../../environment')

describe('Get Request example', () => {
    it('Find Pets by Status', async() => {
        const response = request('baseURL')
        .get('/store/inventory')
        console.log((await response).status)
        console.log((await response).body)
    })
})