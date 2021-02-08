const BN = require('bn.js');

require('dotenv').config();
const {
    FEE_AMOUNT,
    FEE_ADDRESS
} = process.env;

const Swaps = artifacts.require("Swaps");

const ZERO = new BN(0);

module.exports = async function (deployer, network) {
    if (network == "test" || network == "development")
        return;

    await deployer.deploy(
        Swaps,
        FEE_AMOUNT,
        FEE_ADDRESS
    );
    let SwapsInst = await Swaps.deployed();
    console.log("Swaps address = ", SwapsInst.address);
};