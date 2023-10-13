// Get API (order by Id)

const request = require('supertest')
const baseUrl = require('../../../environment')

describe('Get Request order', () => {
    it('Find Store Order', async() => {
        const response = request('baseURL')
        .get('/store/order/3')
        console.log((await response).status)
        console.log((await response).body)
    })
})