// Post API (add pet)

const request = require('supertest')
const baseUrl = require('../../../environment')
const DATA = require('../../../data/petData.js')

describe('Add Pet Data', () => {
    it('Success update Pet', async() => {
        const response = request(baseUrl)
        .post('/pet')
        .send(DATA.UPDATE_PET)
    })
})