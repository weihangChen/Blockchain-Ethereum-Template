const SimpleStorage = artifacts.require('SimpleStorage');

contract('SimpleStorage', (accounts) => {
  let contract;
  let owner;

  before(async () => {
    contract = await SimpleStorage.deployed();
    owner = accounts[0];
  });

  it('should return a new instance with default stored state', async () => {
    let initialValue = await contract.get.call();
    assert.strictEqual(initialValue.toNumber(), 7, 'The returned value was not the expected default value.');
  });

  it('should return an updated stored state', async () => {
    await contract.set(42);
    let updatedValue = await contract.get.call();
    assert.strictEqual(updatedValue.toNumber(), 42, 'The returned value was not the expected updated value.');
  });
});
