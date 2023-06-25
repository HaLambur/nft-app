/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type {
  MyAwesomeLogo,
  MyAwesomeLogoInterface,
} from "../../contracts/MyAwesomeLogo";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "_fromTokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_toTokenId",
        type: "uint256",
      },
    ],
    name: "BatchMetadataUpdate",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
    ],
    name: "MetadataUpdate",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "currentCounter",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "string",
        name: "nftTokenURI",
        type: "string",
      },
    ],
    name: "freeMint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "string",
        name: "nftTokenURI",
        type: "string",
      },
    ],
    name: "safeMint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040518060400160405280600d81526020017f4d79417765736f6d654c6f676f000000000000000000000000000000000000008152506040518060400160405280600381526020017f4d414c0000000000000000000000000000000000000000000000000000000000815250816000908051906020019062000096929190620001a6565b508060019080519060200190620000af929190620001a6565b505050620000d2620000c6620000d860201b60201c565b620000e060201b60201c565b620002bb565b600033905090565b6000600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600760006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b828054620001b49062000256565b90600052602060002090601f016020900481019282620001d8576000855562000224565b82601f10620001f357805160ff191683800117855562000224565b8280016001018555821562000224579182015b828111156200022357825182559160200191906001019062000206565b5b50905062000233919062000237565b5090565b5b808211156200025257600081600090555060010162000238565b5090565b600060028204905060018216806200026f57607f821691505b602082108114156200028657620002856200028c565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6130df80620002cb6000396000f3fe608060405234801561001057600080fd5b506004361061012c5760003560e01c8063711112be116100ad578063b88d4fde11610071578063b88d4fde1461031b578063c87b56dd14610337578063d204c45e14610367578063e985e9c514610383578063f2fde38b146103b35761012c565b8063711112be1461029d578063715018a6146102b95780638da5cb5b146102c357806395d89b41146102e1578063a22cb465146102ff5761012c565b806342842e0e116100f457806342842e0e146101e757806342966c68146102035780635763440b1461021f5780636352211e1461023d57806370a082311461026d5761012c565b806301ffc9a71461013157806306fdde0314610161578063081812fc1461017f578063095ea7b3146101af57806323b872dd146101cb575b600080fd5b61014b6004803603810190610146919061248f565b6103cf565b604051610158919061284f565b60405180910390f35b6101696103e1565b604051610176919061286a565b60405180910390f35b610199600480360381019061019491906124e1565b610473565b6040516101a691906127e8565b60405180910390f35b6101c960048036038101906101c49190612453565b6104b9565b005b6101e560048036038101906101e091906122f9565b6105d1565b005b61020160048036038101906101fc91906122f9565b610631565b005b61021d600480360381019061021891906124e1565b610651565b005b6102276106ad565b6040516102349190612a4c565b60405180910390f35b610257600480360381019061025291906124e1565b6106be565b60405161026491906127e8565b60405180910390f35b61028760048036038101906102829190612294565b610745565b6040516102949190612a4c565b60405180910390f35b6102b760048036038101906102b291906123ff565b6107fd565b005b6102c1610831565b005b6102cb610845565b6040516102d891906127e8565b60405180910390f35b6102e961086f565b6040516102f6919061286a565b60405180910390f35b610319600480360381019061031491906123c3565b610901565b005b61033560048036038101906103309190612348565b610917565b005b610351600480360381019061034c91906124e1565b610979565b60405161035e919061286a565b60405180910390f35b610381600480360381019061037c91906123ff565b61098b565b005b61039d600480360381019061039891906122bd565b6109c7565b6040516103aa919061284f565b60405180910390f35b6103cd60048036038101906103c89190612294565b610a5b565b005b60006103da82610adf565b9050919050565b6060600080546103f090612be7565b80601f016020809104026020016040519081016040528092919081815260200182805461041c90612be7565b80156104695780601f1061043e57610100808354040283529160200191610469565b820191906000526020600020905b81548152906001019060200180831161044c57829003601f168201915b5050505050905090565b600061047e82610b40565b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b60006104c4826106be565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610535576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161052c90612a0c565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff16610554610b8b565b73ffffffffffffffffffffffffffffffffffffffff16148061058357506105828161057d610b8b565b6109c7565b5b6105c2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105b990612a2c565b60405180910390fd5b6105cc8383610b93565b505050565b6105e26105dc610b8b565b82610c4c565b610621576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106189061288c565b60405180910390fd5b61062c838383610ce1565b505050565b61064c83838360405180602001604052806000815250610917565b505050565b61066261065c610b8b565b82610c4c565b6106a1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106989061288c565b60405180910390fd5b6106aa81610fdb565b50565b60006106b96008610fe7565b905090565b6000806106ca83610ff5565b9050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141561073c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610733906129ec565b60405180910390fd5b80915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156107b6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107ad9061296c565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6108108261080b6008610fe7565b611032565b61082361081d6008610fe7565b82611050565b61082d60086110fb565b5050565b610839611111565b610843600061118f565b565b6000600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60606001805461087e90612be7565b80601f01602080910402602001604051908101604052809291908181526020018280546108aa90612be7565b80156108f75780601f106108cc576101008083540402835291602001916108f7565b820191906000526020600020905b8154815290600101906020018083116108da57829003601f168201915b5050505050905090565b61091361090c610b8b565b8383611255565b5050565b610928610922610b8b565b83610c4c565b610967576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161095e9061288c565b60405180910390fd5b610973848484846113c2565b50505050565b60606109848261141e565b9050919050565b610993611111565b6109a6826109a16008610fe7565b611032565b6109b96109b36008610fe7565b82611050565b6109c360086110fb565b5050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b610a63611111565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610ad3576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610aca906128cc565b60405180910390fd5b610adc8161118f565b50565b6000634906490660e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161480610b395750610b3882611531565b5b9050919050565b610b4981611613565b610b88576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b7f906129ec565b60405180910390fd5b50565b600033905090565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16610c06836106be565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b600080610c58836106be565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480610c9a5750610c9981856109c7565b5b80610cd857508373ffffffffffffffffffffffffffffffffffffffff16610cc084610473565b73ffffffffffffffffffffffffffffffffffffffff16145b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff16610d01826106be565b73ffffffffffffffffffffffffffffffffffffffff1614610d57576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d4e906128ec565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610dc7576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610dbe9061292c565b60405180910390fd5b610dd48383836001611654565b8273ffffffffffffffffffffffffffffffffffffffff16610df4826106be565b73ffffffffffffffffffffffffffffffffffffffff1614610e4a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e41906128ec565b60405180910390fd5b6004600082815260200190815260200160002060006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556001600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825403925050819055506001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540192505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4610fd6838383600161165a565b505050565b610fe481611660565b50565b600081600001549050919050565b60006002600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b61104c8282604051806020016040528060008152506116b3565b5050565b61105982611613565b611098576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161108f9061298c565b60405180910390fd5b806006600084815260200190815260200160002090805190602001906110bf929190612078565b507ff8e1a15aba9398e019f0b49df1a4fde98ee17ae345cb5f6b5e2c27f5033e8ce7826040516110ef9190612a4c565b60405180910390a15050565b6001816000016000828254019250508190555050565b611119610b8b565b73ffffffffffffffffffffffffffffffffffffffff16611137610845565b73ffffffffffffffffffffffffffffffffffffffff161461118d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611184906129cc565b60405180910390fd5b565b6000600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600760006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156112c4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112bb9061294c565b60405180910390fd5b80600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31836040516113b5919061284f565b60405180910390a3505050565b6113cd848484610ce1565b6113d98484848461170e565b611418576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161140f906128ac565b60405180910390fd5b50505050565b606061142982610b40565b600060066000848152602001908152602001600020805461144990612be7565b80601f016020809104026020016040519081016040528092919081815260200182805461147590612be7565b80156114c25780601f10611497576101008083540402835291602001916114c2565b820191906000526020600020905b8154815290600101906020018083116114a557829003601f168201915b5050505050905060006114d36118a5565b90506000815114156114e957819250505061152c565b60008251111561151e5780826040516020016115069291906127c4565b6040516020818303038152906040529250505061152c565b611527846118bc565b925050505b919050565b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614806115fc57507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b8061160c575061160b82611924565b5b9050919050565b60008073ffffffffffffffffffffffffffffffffffffffff1661163583610ff5565b73ffffffffffffffffffffffffffffffffffffffff1614159050919050565b50505050565b50505050565b6116698161198e565b600060066000838152602001908152602001600020805461168990612be7565b9050146116b0576006600082815260200190815260200160002060006116af91906120fe565b5b50565b6116bd8383611adc565b6116ca600084848461170e565b611709576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611700906128ac565b60405180910390fd5b505050565b600061172f8473ffffffffffffffffffffffffffffffffffffffff16611cfa565b15611898578373ffffffffffffffffffffffffffffffffffffffff1663150b7a02611758610b8b565b8786866040518563ffffffff1660e01b815260040161177a9493929190612803565b602060405180830381600087803b15801561179457600080fd5b505af19250505080156117c557506040513d601f19601f820116820180604052508101906117c291906124b8565b60015b611848573d80600081146117f5576040519150601f19603f3d011682016040523d82523d6000602084013e6117fa565b606091505b50600081511415611840576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611837906128ac565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161491505061189d565b600190505b949350505050565b606060405180602001604052806000815250905090565b60606118c782610b40565b60006118d16118a5565b905060008151116118f1576040518060200160405280600081525061191c565b806118fb84611d1d565b60405160200161190c9291906127c4565b6040516020818303038152906040525b915050919050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b6000611999826106be565b90506119a9816000846001611654565b6119b2826106be565b90506004600083815260200190815260200160002060006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556001600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825403925050819055506002600083815260200190815260200160002060006101000a81549073ffffffffffffffffffffffffffffffffffffffff021916905581600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4611ad881600084600161165a565b5050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611b4c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611b43906129ac565b60405180910390fd5b611b5581611613565b15611b95576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611b8c9061290c565b60405180910390fd5b611ba3600083836001611654565b611bac81611613565b15611bec576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611be39061290c565b60405180910390fd5b6001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540192505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4611cf660008383600161165a565b5050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b606060006001611d2c84611e41565b01905060008167ffffffffffffffff811115611d71577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040519080825280601f01601f191660200182016040528015611da35781602001600182028036833780820191505090505b509050600082602001820190505b600115611e36578080600190039150507f3031323334353637383961626364656600000000000000000000000000000000600a86061a8153600a8581611e20577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b0494506000851415611e3157611e36565b611db1565b819350505050919050565b600080600090507a184f03e93ff9f4daa797ed6e38ed64bf6a1f0100000000000000008310611ec5577a184f03e93ff9f4daa797ed6e38ed64bf6a1f0100000000000000008381611ebb577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b0492506040810190505b6d04ee2d6d415b85acef81000000008310611f28576d04ee2d6d415b85acef81000000008381611f1e577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b0492506020810190505b662386f26fc100008310611f7d57662386f26fc100008381611f73577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b0492506010810190505b6305f5e1008310611fcc576305f5e1008381611fc2577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b0492506008810190505b612710831061201757612710838161200d577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b0492506004810190505b606483106120605760648381612056577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b0492506002810190505b600a831061206f576001810190505b80915050919050565b82805461208490612be7565b90600052602060002090601f0160209004810192826120a657600085556120ed565b82601f106120bf57805160ff19168380011785556120ed565b828001600101855582156120ed579182015b828111156120ec5782518255916020019190600101906120d1565b5b5090506120fa919061213e565b5090565b50805461210a90612be7565b6000825580601f1061211c575061213b565b601f01602090049060005260206000209081019061213a919061213e565b5b50565b5b8082111561215757600081600090555060010161213f565b5090565b600061216e61216984612a8c565b612a67565b90508281526020810184848401111561218657600080fd5b612191848285612ba5565b509392505050565b60006121ac6121a784612abd565b612a67565b9050828152602081018484840111156121c457600080fd5b6121cf848285612ba5565b509392505050565b6000813590506121e68161304d565b92915050565b6000813590506121fb81613064565b92915050565b6000813590506122108161307b565b92915050565b6000815190506122258161307b565b92915050565b600082601f83011261223c57600080fd5b813561224c84826020860161215b565b91505092915050565b600082601f83011261226657600080fd5b8135612276848260208601612199565b91505092915050565b60008135905061228e81613092565b92915050565b6000602082840312156122a657600080fd5b60006122b4848285016121d7565b91505092915050565b600080604083850312156122d057600080fd5b60006122de858286016121d7565b92505060206122ef858286016121d7565b9150509250929050565b60008060006060848603121561230e57600080fd5b600061231c868287016121d7565b935050602061232d868287016121d7565b925050604061233e8682870161227f565b9150509250925092565b6000806000806080858703121561235e57600080fd5b600061236c878288016121d7565b945050602061237d878288016121d7565b935050604061238e8782880161227f565b925050606085013567ffffffffffffffff8111156123ab57600080fd5b6123b78782880161222b565b91505092959194509250565b600080604083850312156123d657600080fd5b60006123e4858286016121d7565b92505060206123f5858286016121ec565b9150509250929050565b6000806040838503121561241257600080fd5b6000612420858286016121d7565b925050602083013567ffffffffffffffff81111561243d57600080fd5b61244985828601612255565b9150509250929050565b6000806040838503121561246657600080fd5b6000612474858286016121d7565b92505060206124858582860161227f565b9150509250929050565b6000602082840312156124a157600080fd5b60006124af84828501612201565b91505092915050565b6000602082840312156124ca57600080fd5b60006124d884828501612216565b91505092915050565b6000602082840312156124f357600080fd5b60006125018482850161227f565b91505092915050565b61251381612b31565b82525050565b61252281612b43565b82525050565b600061253382612aee565b61253d8185612b04565b935061254d818560208601612bb4565b61255681612ca8565b840191505092915050565b600061256c82612af9565b6125768185612b15565b9350612586818560208601612bb4565b61258f81612ca8565b840191505092915050565b60006125a582612af9565b6125af8185612b26565b93506125bf818560208601612bb4565b80840191505092915050565b60006125d8602d83612b15565b91506125e382612cb9565b604082019050919050565b60006125fb603283612b15565b915061260682612d08565b604082019050919050565b600061261e602683612b15565b915061262982612d57565b604082019050919050565b6000612641602583612b15565b915061264c82612da6565b604082019050919050565b6000612664601c83612b15565b915061266f82612df5565b602082019050919050565b6000612687602483612b15565b915061269282612e1e565b604082019050919050565b60006126aa601983612b15565b91506126b582612e6d565b602082019050919050565b60006126cd602983612b15565b91506126d882612e96565b604082019050919050565b60006126f0602e83612b15565b91506126fb82612ee5565b604082019050919050565b6000612713602083612b15565b915061271e82612f34565b602082019050919050565b6000612736602083612b15565b915061274182612f5d565b602082019050919050565b6000612759601883612b15565b915061276482612f86565b602082019050919050565b600061277c602183612b15565b915061278782612faf565b604082019050919050565b600061279f603d83612b15565b91506127aa82612ffe565b604082019050919050565b6127be81612b9b565b82525050565b60006127d0828561259a565b91506127dc828461259a565b91508190509392505050565b60006020820190506127fd600083018461250a565b92915050565b6000608082019050612818600083018761250a565b612825602083018661250a565b61283260408301856127b5565b81810360608301526128448184612528565b905095945050505050565b60006020820190506128646000830184612519565b92915050565b600060208201905081810360008301526128848184612561565b905092915050565b600060208201905081810360008301526128a5816125cb565b9050919050565b600060208201905081810360008301526128c5816125ee565b9050919050565b600060208201905081810360008301526128e581612611565b9050919050565b6000602082019050818103600083015261290581612634565b9050919050565b6000602082019050818103600083015261292581612657565b9050919050565b600060208201905081810360008301526129458161267a565b9050919050565b600060208201905081810360008301526129658161269d565b9050919050565b60006020820190508181036000830152612985816126c0565b9050919050565b600060208201905081810360008301526129a5816126e3565b9050919050565b600060208201905081810360008301526129c581612706565b9050919050565b600060208201905081810360008301526129e581612729565b9050919050565b60006020820190508181036000830152612a058161274c565b9050919050565b60006020820190508181036000830152612a258161276f565b9050919050565b60006020820190508181036000830152612a4581612792565b9050919050565b6000602082019050612a6160008301846127b5565b92915050565b6000612a71612a82565b9050612a7d8282612c19565b919050565b6000604051905090565b600067ffffffffffffffff821115612aa757612aa6612c79565b5b612ab082612ca8565b9050602081019050919050565b600067ffffffffffffffff821115612ad857612ad7612c79565b5b612ae182612ca8565b9050602081019050919050565b600081519050919050565b600081519050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600081905092915050565b6000612b3c82612b7b565b9050919050565b60008115159050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b83811015612bd2578082015181840152602081019050612bb7565b83811115612be1576000848401525b50505050565b60006002820490506001821680612bff57607f821691505b60208210811415612c1357612c12612c4a565b5b50919050565b612c2282612ca8565b810181811067ffffffffffffffff82111715612c4157612c40612c79565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b7f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560008201527f72206f7220617070726f76656400000000000000000000000000000000000000602082015250565b7f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560008201527f63656976657220696d706c656d656e7465720000000000000000000000000000602082015250565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b7f4552433732313a207472616e736665722066726f6d20696e636f72726563742060008201527f6f776e6572000000000000000000000000000000000000000000000000000000602082015250565b7f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000600082015250565b7f4552433732313a207472616e7366657220746f20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b7f4552433732313a20617070726f766520746f2063616c6c657200000000000000600082015250565b7f4552433732313a2061646472657373207a65726f206973206e6f74206120766160008201527f6c6964206f776e65720000000000000000000000000000000000000000000000602082015250565b7f45524337323155524953746f726167653a2055524920736574206f66206e6f6e60008201527f6578697374656e7420746f6b656e000000000000000000000000000000000000602082015250565b7f4552433732313a206d696e7420746f20746865207a65726f2061646472657373600082015250565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b7f4552433732313a20696e76616c696420746f6b656e2049440000000000000000600082015250565b7f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560008201527f7200000000000000000000000000000000000000000000000000000000000000602082015250565b7f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60008201527f6b656e206f776e6572206f7220617070726f76656420666f7220616c6c000000602082015250565b61305681612b31565b811461306157600080fd5b50565b61306d81612b43565b811461307857600080fd5b50565b61308481612b4f565b811461308f57600080fd5b50565b61309b81612b9b565b81146130a657600080fd5b5056fea26469706673582212204becfda039e4fa0cfa23cf682cf05b0de617a008a8e58e8251c0aa903329ce3d64736f6c63430008040033";

type MyAwesomeLogoConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MyAwesomeLogoConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MyAwesomeLogo__factory extends ContractFactory {
  constructor(...args: MyAwesomeLogoConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string }
  ): Promise<MyAwesomeLogo> {
    return super.deploy(overrides || {}) as Promise<MyAwesomeLogo>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): MyAwesomeLogo {
    return super.attach(address) as MyAwesomeLogo;
  }
  override connect(signer: Signer): MyAwesomeLogo__factory {
    return super.connect(signer) as MyAwesomeLogo__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MyAwesomeLogoInterface {
    return new utils.Interface(_abi) as MyAwesomeLogoInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MyAwesomeLogo {
    return new Contract(address, _abi, signerOrProvider) as MyAwesomeLogo;
  }
}
