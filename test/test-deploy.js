const { ethers } = require("hardhat")
const { assert, expect } = require("chai")
describe("SimpleStorage", function() {
    let simpleStorageFactory, simpleStorage
    beforeEach(async function () {
        simpleStorageFactory = await ethers.getContractFactory(
            "SimpleStorage"
        )
        simpleStorage = await simpleStorageFactory.deploy() 
    })
    it("Should start with a favourite number of 0", async function () {
         const currentValue = await simpleStorage.retrieve() 
         const expectedValue = "0"
         assert.equal(currentValue.toString(), expectedValue)

    }) 
    it("should update when we call store", async function () {
        const expectedValue = "7"
        const transactionResponse = await simpleStorage.store(expectedValue)
        await transactionResponse.wait(1)
        
        const currentValue = await simpleStorage.retrieve() 
        assert.equal(currentValue.toString(), expectedValue)
    })
    it("should store persons favourite number", async function () {
        const expectedValue = 7;
        const expectedName = "Sid"; 
        const transactionResponse = await simpleStorage.addPerson(expectedName, expectedValue)
        await transactionResponse.wait(1)

        const currentValue = await simpleStorage.nameToFavouriteNumber(expectedName); 
        expect(currentValue).to.equal(expectedValue);
    })

})