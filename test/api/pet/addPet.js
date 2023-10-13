// Post API (add pet)

const request = require('supertest')
const baseUrl = require('../../../environment')
const DATA = require('../../../data/petData.js')

describe('Add Pet Data', () => {
    it('Success add Pet', async() => {
        const response = request(baseUrl)
        .post('/pet')
        .send(DATA.CREATE_PET_DATA)
    })
})