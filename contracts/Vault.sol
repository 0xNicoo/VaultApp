//SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract Vault {
    mapping(address => uint256) public vaults;

    receive() external payable {
        vaults[msg.sender] += msg.value;
    }

    function withdraw(uint256 _amount) external {
        uint256 userAmount = vaults[msg.sender]; //gas optimisation, i use userAmount to do operatios because if i use vauls[msgsender] the vm has to access memory and that cosume more gas.
        require(_amount <= userAmount, "not enough ethereum");
        payable(msg.sender).transfer(_amount * 10**18);
        userAmount -= _amount * 10**18;
        vaults[msg.sender] = userAmount;
    }

    function viewBalance() external view returns (uint256) {
        return (address(this).balance);
    }
}
