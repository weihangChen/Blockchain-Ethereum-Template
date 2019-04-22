pragma solidity ^0.5.0;

contract SimpleStorage {
    uint256 storedData;

    constructor() public {
        storedData = 7;
    }

    function get() external view returns (uint256) {
        return storedData;
    }

    function set(uint256 newValue) external {
        storedData = newValue;
    }
}
