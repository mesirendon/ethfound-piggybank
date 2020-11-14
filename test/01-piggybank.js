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
    unauthorizedUser,
  ] = accounts;
  describe('Deployment', () => {
    let piggyBank;
    beforeEach(async () => {
      piggyBank = await PiggyBank.new();
    });
    it('should deploy the contract by demand', () => {
      return piggyBank.owner.call()
        .then((registeredOnwer) => {
          expect(registeredOnwer).to.eq(owner);
        });
    });
    it('should be registered to expected owner');
  });
  describe('Deposits', () => {
    it('should allow the owner to deposit funds');
    it('should allow anyone to deposit funds');
  });
  describe('Withdraw', () => {
    it('should allow the owner to withdraw the funds');
    it('should not allow withdraw the funds if it is another user');
  });
});
