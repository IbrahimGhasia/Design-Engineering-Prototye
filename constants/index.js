const customerAbi = require('./Customer.json');
const contractAddress = require('./networkMapping.json');
const customerContractAddress = contractAddress.Customer;
const tableland = require('./tableland.json');

export { customerAbi, customerContractAddress, tableland };
