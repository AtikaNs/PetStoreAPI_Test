// Delete a pet

const request = require('supertest')
const baseUrl = require('../../../environment')

describe('Get Request Pet Data', () => {
    it('Delete Pet Data by Id', async() => {
        const response = request('baseURL')
        .delete('/pet/35')
        console.log((await response).status)
        console.log((await response).body)
    })
})