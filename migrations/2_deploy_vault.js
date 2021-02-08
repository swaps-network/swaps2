const BN = require('bn.js');

require('dotenv').config();
const {
} = process.env;

const Vault = artifacts.require("Vault");

const ZERO = new BN(0);

module.exports = async function (deployer, network) {
    if (network == "test" || network == "development")
        return;

    await deployer.deploy(
        Vault
    );
    let VaultInst = await Vault.deployed();
    console.log("Vault address = ", VaultInst.address);
};