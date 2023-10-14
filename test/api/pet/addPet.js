// Post API (add pet)

const request = require('supertest')
const baseUrl = require('../../../environment')
const DATA = require('../../../data/petData.js')
const {expect} = require('chai')

describe('Add Pet Data', () => {
    it('Success add Pet', async() => {
        const response = request(baseUrl)
        .post('/pet')
        .send(DATA.CREATE_PET_DATA)
        console.log((await response).status)
        console.log((await response).body)
    })
})