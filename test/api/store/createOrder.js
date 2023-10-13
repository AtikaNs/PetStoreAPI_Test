// Post API (create order)

const request = require('supertest')
const baseUrl = require('../../../environment')
const DATA = require('../../../data/orderData.js')

describe('Create Order Data', () => {
    it('Success create Order', async() => {
        const response = request(baseUrl)
        .post('/store/order')
        .send(DATA.CREATE_ORDER_DATA)
    })
})