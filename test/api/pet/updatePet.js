// Post API (update pet)

const request = require('supertest')
const baseUrl = require('../../../environment')
const DATA = require('../../../data/petData.js')

describe('Update Pet Data', () => {
    it('Success update Pet', async() => {
        const response = request(baseUrl)
        .put('/pet')
        .send(DATA.UPDATE_PET)

        console.log((await response).status)
        console.log((await response).body)
    })
})