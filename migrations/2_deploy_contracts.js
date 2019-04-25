var HelloBlockchain = artifacts.require("HelloBlockchain");
var Arg = "0x1234abcd1234abcd1234abcd1234abcd1234abcd";
module.exports = deployer => {
    deployer.deploy(HelloBlockchain, Arg);
};