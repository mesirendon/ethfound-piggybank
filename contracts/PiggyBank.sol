// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.8.0;

contract PiggyBank {
  address public owner;

  constructor() public {
    owner = msg.sender;
  }
}
