// Delete an order

const request = require('supertest')
const baseUrl = require('../../../environment')

describe('Get Request Order Data', () => {
    it('Delete Order Data by Id', async() => {
        const response = request('baseURL')
        .delete('/store/order/8')
        console.log((await response).status)
        console.log((await response).body)
    })
})