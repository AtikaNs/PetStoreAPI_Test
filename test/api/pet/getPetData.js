// Get API (Pet Data by Id)

const request = require('supertest')
const baseUrl = require('../../../environment')

describe('Get Request Pet Data', () => {
    it('Get Pet Data by Id', async() => {
        const response = request('baseURL')
        .get('/pet/35') // pet Data available (valid)
        console.log((await response).status)
        console.log((await response).body)
    })

    it('Get Pet Data by Id invalid', async() => {
        const response1 = request('baseURL')
        .get('/pet/152') // pet Data invalid
        console.log((await response1).status)
        console.log((await response1).body)
    })
})