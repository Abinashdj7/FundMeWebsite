export const contractAddress="0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512"

export const abi = [
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "priceFeed",
                "type": "address"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "inputs": [],
        "name": "FundMe__NotOwner",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "MINIMUM_USD",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "cheaperWithdraw",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "fund",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "fundingAddress",
                "type": "address"
            }
        ],
        "name": "getAddressToAmountFunded",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "index",
                "type": "uint256"
            }
        ],
        "name": "getFunder",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getOwner",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getPriceFeed",
        "outputs": [
            {
                "internalType": "contract AggregatorV3Interface",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getVersion",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "withdraw",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
]

//export const bytecode="0x60a060405234801561001057600080fd5b5060405161120938038061120983398181016040528101906100329190610110565b80600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055503373ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff16815250505061013d565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006100dd826100b2565b9050919050565b6100ed816100d2565b81146100f857600080fd5b50565b60008151905061010a816100e4565b92915050565b600060208284031215610126576101256100ad565b5b6000610134848285016100fb565b91505092915050565b608051611095610174600039600081816102cc01528181610459015281816104ff0152818161068a015261087a01526110956000f3fe6080604052600436106100865760003560e01c8063893d20e811610059578063893d20e8146101355780639e87a5cd14610160578063b60d42881461018b578063be2693f014610195578063d7b4750c146101ac57610086565b80630343fb251461008b5780630d8e6e2c146100c85780633ccfd60b146100f35780636b69a5921461010a575b600080fd5b34801561009757600080fd5b506100b260048036038101906100ad9190610b2e565b6101e9565b6040516100bf9190610b74565b60405180910390f35b3480156100d457600080fd5b506100dd610232565b6040516100ea9190610b74565b60405180910390f35b3480156100ff57600080fd5b506101086102ca565b005b34801561011657600080fd5b5061011f6104ee565b60405161012c9190610b74565b60405180910390f35b34801561014157600080fd5b5061014a6104fb565b6040516101579190610b9e565b60405180910390f35b34801561016c57600080fd5b50610175610523565b6040516101829190610c18565b60405180910390f35b61019361054d565b005b3480156101a157600080fd5b506101aa610688565b005b3480156101b857600080fd5b506101d360048036038101906101ce9190610c5f565b610910565b6040516101e09190610b9e565b60405180910390f35b6000600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166354fd4d506040518163ffffffff1660e01b8152600401602060405180830381865afa1580156102a1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102c59190610ca1565b905090565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461034f576040517f579610db00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60005b6000805490508110156103f457600080828154811061037457610373610cce565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690506000600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550508080600101915050610352565b50600067ffffffffffffffff8111156104105761040f610cfd565b5b60405190808252806020026020018201604052801561043e5781602001602082028036833780820191505090505b5060009080519060200190610454929190610a24565b5060007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff164760405161049b90610d5d565b60006040518083038185875af1925050503d80600081146104d8576040519150601f19603f3d011682016040523d82523d6000602084013e6104dd565b606091505b50509050806104eb57600080fd5b50565b6802b5e3af16b188000081565b60007f0000000000000000000000000000000000000000000000000000000000000000905090565b6000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6802b5e3af16b188000061058c600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff163461095790919063ffffffff16565b10156105cd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105c490610dcf565b60405180910390fd5b34600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461061c9190610e1e565b925050819055506000339080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461070d576040517f579610db00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008080548060200260200160405190810160405280929190818152602001828054801561079057602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311610746575b5050505050905060005b81518110156108155760008282815181106107b8576107b7610cce565b5b602002602001015190506000600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555050808060010191505061079a565b50600067ffffffffffffffff81111561083157610830610cfd565b5b60405190808252806020026020018201604052801561085f5781602001602082028036833780820191505090505b5060009080519060200190610875929190610a24565b5060007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16476040516108bc90610d5d565b60006040518083038185875af1925050503d80600081146108f9576040519150601f19603f3d011682016040523d82523d6000602084013e6108fe565b606091505b505090508061090c57600080fd5b5050565b600080828154811061092557610924610cce565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b60008061096383610993565b90506000670de0b6b3a7640000858361097c9190610e52565b6109869190610ec3565b9050809250505092915050565b6000808273ffffffffffffffffffffffffffffffffffffffff1663feaf968c6040518163ffffffff1660e01b815260040160a060405180830381865afa1580156109e1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a059190610f6c565b5050509150506402540be40081610a1c9190610fe7565b915050919050565b828054828255906000526020600020908101928215610a9d579160200282015b82811115610a9c5782518260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555091602001919060010190610a44565b5b509050610aaa9190610aae565b5090565b5b80821115610ac7576000816000905550600101610aaf565b5090565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610afb82610ad0565b9050919050565b610b0b81610af0565b8114610b1657600080fd5b50565b600081359050610b2881610b02565b92915050565b600060208284031215610b4457610b43610acb565b5b6000610b5284828501610b19565b91505092915050565b6000819050919050565b610b6e81610b5b565b82525050565b6000602082019050610b896000830184610b65565b92915050565b610b9881610af0565b82525050565b6000602082019050610bb36000830184610b8f565b92915050565b6000819050919050565b6000610bde610bd9610bd484610ad0565b610bb9565b610ad0565b9050919050565b6000610bf082610bc3565b9050919050565b6000610c0282610be5565b9050919050565b610c1281610bf7565b82525050565b6000602082019050610c2d6000830184610c09565b92915050565b610c3c81610b5b565b8114610c4757600080fd5b50565b600081359050610c5981610c33565b92915050565b600060208284031215610c7557610c74610acb565b5b6000610c8384828501610c4a565b91505092915050565b600081519050610c9b81610c33565b92915050565b600060208284031215610cb757610cb6610acb565b5b6000610cc584828501610c8c565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600081905092915050565b50565b6000610d47600083610d2c565b9150610d5282610d37565b600082019050919050565b6000610d6882610d3a565b9150819050919050565b600082825260208201905092915050565b7f596f75206e65656420746f207370656e64206d6f726520455448210000000000600082015250565b6000610db9601b83610d72565b9150610dc482610d83565b602082019050919050565b60006020820190508181036000830152610de881610dac565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610e2982610b5b565b9150610e3483610b5b565b9250828201905080821115610e4c57610e4b610def565b5b92915050565b6000610e5d82610b5b565b9150610e6883610b5b565b9250828202610e7681610b5b565b91508282048414831517610e8d57610e8c610def565b5b5092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000610ece82610b5b565b9150610ed983610b5b565b925082610ee957610ee8610e94565b5b828204905092915050565b600069ffffffffffffffffffff82169050919050565b610f1381610ef4565b8114610f1e57600080fd5b50565b600081519050610f3081610f0a565b92915050565b6000819050919050565b610f4981610f36565b8114610f5457600080fd5b50565b600081519050610f6681610f40565b92915050565b600080600080600060a08688031215610f8857610f87610acb565b5b6000610f9688828901610f21565b9550506020610fa788828901610f57565b9450506040610fb888828901610c8c565b9350506060610fc988828901610c8c565b9250506080610fda88828901610f21565b9150509295509295909350565b6000610ff282610f36565b9150610ffd83610f36565b925082820261100b81610f36565b91507f8000000000000000000000000000000000000000000000000000000000000000841460008412161561104357611042610def565b5b828205841483151761105857611057610def565b5b509291505056fea2646970667358221220235f71b1b7c4369accc9e56e4a0fe03f14ea1d768a2ea9524a3ac9b3bd6404c464736f6c63430008190033"