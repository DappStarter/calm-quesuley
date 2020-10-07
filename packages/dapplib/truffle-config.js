require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom arena brave foot blanket razor soccer pulse grace sister army gate'; 
let testAccounts = [
"0x41f65ee8f2cb259c168e08ea91430f2e7532656603a95525dc3ae121e6789c6a",
"0x025207632684810390e0354b5efcca0cf31707a7fc837a97668ac361a0a90593",
"0x45398ffcbbbaebf69f12aa144a42fe6abcd8f8d28e20b9d5ae7fd2c654cce49b",
"0x7220570f601297d4b642ac5a01fab22ee2a7cc72b7e66581e7e398a51347559b",
"0xe5c9093a17697e0a128848d0e4091f741f9f7b92253e83e7ee982d74e885bebe",
"0x9762af8cb8585584d51c3a481bc043e225334c21d0e08b3139160edf95202e69",
"0x56325d15393c765ceb1ddb24a5632e7f3fa3c7637f37327cabf89d61a3a46ec2",
"0x9404e927952644a40dfe0c379a49fd14c58bcf0aa9847c63b967c6d60f80be33",
"0xf375d24b84d5dd44e747a37526aec97c5b787dfb5c7dca2de4b94b38150aa879",
"0xd928102ccec80d230692db1a040b63741c01b40262136a8463198663d5fe76e4"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
