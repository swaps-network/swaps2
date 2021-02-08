const BN = require('bn.js');

require('dotenv').config();
const {
    VAULT_OWNER,
    SWAPS_OWNER
} = process.env;

const Vault = artifacts.require("Vault");
const Swaps = artifacts.require("Swaps");

const ZERO = new BN(0);

module.exports = async function (deployer, network) {
    if (network == "test" || network == "development")
        return;

    let VaultInst = await Vault.deployed();
    let SwapsInst = await Swaps.deployed();

    await VaultInst.setSwaps(SwapsInst.address);
    await SwapsInst.setVault(VaultInst.address);

    await VaultInst.transferOwnership(VAULT_OWNER);
    await SwapsInst.transferOwnership(SWAPS_OWNER);

    console.log("Contracts connected");
};