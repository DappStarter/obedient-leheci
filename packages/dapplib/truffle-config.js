require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hunt basket flip spot finger deliver remember million half climb surge genuine'; 
let testAccounts = [
"0x305d22310ed4b24d4483bd16ad23151bc2f792ca1015c2126c4a6494c7506a29",
"0x4238661b6671e1ae32b916785023b474650329bf6746481f9988a117c4883b28",
"0x717a0ff0f93c8be3cbbf32a7c38195f13b1e5008158d72f382bd1fb29ca0e182",
"0x8c1058279ae15a4bbc02dfaa27a0faab8a2ba63b40a5d1ca92786403d52d2a2f",
"0x7fa6eeab97b42cee91cfd95abd02b7fa7358d189f9d53e8578bf0cd27e58dbb1",
"0xe63bb8eb91cbc3658020ba511d933ba7f62e85d193c767e73f0ec95508212753",
"0x28ea019de127bd6bca6729be92a726772c075777e5a1c5a2cc50b802030e42af",
"0x54ec9a4f8fc5473481a4e1b3fc9cc37e344f355ae2ec2e586f93d00fba76c7e5",
"0xa949cf492f5123d5673843fd3abf4c18758fbe5b797b39e53d56083a5cc4875d",
"0xd64507c0731bc72a4b2cc01e0b52e85b4d4bfa63503c5b3bde36661025d852b8"
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
