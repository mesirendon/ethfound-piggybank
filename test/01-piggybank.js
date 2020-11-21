const PiggyBank = artifacts.require('PiggyBank');

const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);

const { expect } = chai;

contract('PiggyBank Smart Contract', (accounts) => {
  const [
    owner,
    contributor1,
    contributor2,
    contributor3,
    unauthorizedUser,
  ] = accounts;
  describe('Deployment', () => {
    it('should deploy the contract by demand', () => {
      return PiggyBank.deployed()
        .then((piggyBank) => piggyBank.owner.call())
        .then((registeredOnwer) => {
          expect(registeredOnwer).to.eq(owner);
        });
    });
  });
  describe('Operational', () => {
    let piggyBank;
    beforeEach(async () => {
      piggyBank = await PiggyBank.new();
    });
    describe('Deposits', () => {
      it('should allow the owner to deposit funds', () => {
        return piggyBank.deposit('Test', {from: owner, value: web3.utils.toWei('0.01')})
          .then((result) => {
            expect(result.tx).to.match(/0x[a-fA-F0-9]{64}/);
          });
      });
      it('should allow anyone to deposit funds', () => {
        return piggyBank.deposit('Deposit from contributor 1', {from: contributor1, value: web3.utils.toWei('0.03')})
          .then((result) => {
            expect(result.tx).to.match(/0x[a-fA-F0-9]{64}/);
          });
      });
    });
    describe('Withdraw', () => {
      it('should allow the owner to withdraw the funds', () => {
        return piggyBank.deposit('From contributor2', {from: contributor2, value: web3.utils.toWei('1')})
          .then(() => web3.eth.getBalance(contributor2))
          .then(web3.utils.fromWei)
          .then(Number)
          .then((balance) => {
            expect(balance).to.be.at.most(99);
            return piggyBank.withdraw();
          })
          .then(() => web3.eth.getBalance(owner))
          .then(web3.utils.fromWei)
          .then(Number)
          .then((balance) => {
            expect(balance).to.be.at.least(100)
          });
      });
      it('should not allow withdraw the funds if it is another user', async() => {
        await piggyBank.deposit('From contributor3', {from: contributor3, value: web3.utils.toWei('1')})
        return expect(piggyBank.withdraw({from: unauthorizedUser}))
          .to.be.eventually.rejectedWith('You are not the expected owner');
      });
    });
  });
});
