const EC = require('elliptic').ec;
const ec = new EC('secp256k1');
const {
    Blockchain,
    Transaction
} = require('./Blockchian');

const myKey = ec.keyFromPrivate('474fe3cebc5183bab892dd31fbda80a0ec957b598823d23e462c9d015f884bb1');
const myWalletAddress = myKey.getPublic('hex');


let XCoin = new Blockchain();

const tx1 = new Transaction(myWalletAddress, 'public key goes here', 10);
tx1.signTransaction(myKey);
XCoin.addTransaction(tx1);


console.log("\n starting the miner ...");
XCoin.miningPendingTransactions(myWalletAddress);


console.log("\n Balance of Xavier is " + XCoin.getBalanceOfAddress(myWalletAddress));