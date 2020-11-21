// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.8.0;

contract PiggyBank {
  address payable public owner;

  event Deposit(address sender, string msg, uint amount);

  constructor() public {
    owner = msg.sender;
  }

  modifier onlyOwner {
    require(msg.sender == owner, 'You are not the expected owner');
    _;
  }

  function deposit(string memory _msg) public payable {
    emit Deposit(msg.sender, _msg, msg.value);
  }

  function withdraw() public onlyOwner {
    owner.transfer(address(this).balance);
  }
}
