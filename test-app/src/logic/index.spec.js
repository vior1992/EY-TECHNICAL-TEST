const { expect } = require("chai")
const logic = require(".")

require('isomorphic-fetch')

describe("test logic", () => {
    describe("retrieveHotels", () => {
      it("should succed on correct data(retrieve all hotels)", async () => {
        const hotels = await logic.retrieveHotels()

        expect(hotels).to.be.an("array")
        expect(hotels.length).to.be.equal(9)
        expect(hotels[1].brand).to.be.equal("red")
        expect(hotels[3].name).to.be.equal("Crown Bay Hotel")
        expect(hotels[5].rating.reviewNumber).to.be.equal("97")
        expect(hotels[7].rating.score).to.be.equal("3")
        expect(hotels[8].brand).to.be.equal("gold")
      })
    })
})