// import Web3 from 'web3'
// import { ethers } from 'ethers'
//
// import $cookies from 'vue-cookies'
// import $store from '../store/index'
// import { Toast } from 'mint-ui';
// //build
//
// let _contract_instance;
// let from_addr = '',
//   network = process.env.network,
//   tips = "Please switch to " + process.env.networkunit + " network";
//
// let we3_loadingInstance
//
// var ethUtil = require('ethereumjs-util')
// var sigUtil = require('eth-sig-util')
// class Web3Tools {
//   constructor() {
//     // this.userinfo_contract_json = json;
//     // this.user_info_contract_addr = addr;
//     this.init_web3(1);
//
//     // this.init_web3_1_0_version();
//   }
//
//   async init_web3(change) {
//     if(window.ethereum) {
//       this.ethereum = window.ethereum;
//       this.web3 = new Web3(ethereum);
//
//       ethereum.autoRefreshOnNetworkChange = true;
//       if(change != 1) {
//         let ch = 1
//         if(window.location.href.indexOf("utm_source=luckyWallet") == -1){
// //				if(ch == 1) {
//           await ethereum.enable()
//           //				.then(function(accounts) {
//           //					console.log(accounts[0])
//           let provider = new ethers.providers.Web3Provider(window.ethereum)
//           let signer = provider.getSigner()
//           await signer.getAddress().then(function(accounts) {
//             from_addr = accounts;
//             // console.log(from_addr)
//           })
//             //    				console.log(address)
//             //					from_addr = address;
//             //					console.log(from_addr)
//             //				})
//             .catch(function(reason) {
//               Toast("Please link wallet");
//               // Handle error. Likely the user rejected the login:
//               //                  MessageBox.alert(i18n.t('UserRejected'), '', {
//               //                      confirmButtonText: 'OK',
//               //                      callback: action => {
//               //                          window.open('https://metamask.io', '_blank');
//               //                      }
//               //                  });
//               return false;
//             })
//         } else {
//           var account = await ethereum.enable()
//           console.log(account)
//           from_addr = account[0];
//         }
//       }
//       this.listening_web3();
//       // //console.log( 'this.web3', this.web3 );
// //			ethereum.on('accountsChanged', function(accounts) {
// //				// //console.log(accounts[0])
// //			})
// //			ethereum.on('networkChanged', function(result) {
// //				// //console.log(result)
// //			})
//
//       return true;
//     } else if(window.web3) {
//       this.web3 = new Web3(web3.currentProvider);
//       this.listening_web3();
//       //console.log( 'this.web3', this.web3 );
//       return true;
//     } else {
//       //			console.log(i18n.t('NoEthereum'));
//       // MessageBox.alert(i18n.t('NoEthereum'), '', {
//       //     confirmButtonText: 'OK',
//       //     callback: action => {
//       //         window.open('https://metamask.io', '_blank');
//       //     }
//       // });
//       return false;
//     }
//
//   }
//
//   async init_web3_singIn() {
//     if(window.ethereum) {
//       this.ethereum = window.ethereum;
//       this.web3 = new Web3(ethereum);
//       this.listening_web3();
//       //console.log( 'this.web3', this.web3 );
//       return true;
//     } else if(window.web3) {
//       this.web3 = new Web3(web3.currentProvider);
//       this.listening_web3();
//       //console.log( 'this.web3', this.web3 );
//       return true;
//     } else {
//       // //console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
//       // MessageBox('Non-Ethereum browser detected. You should consider trying MetaMask!', '', {});
//       //console.log(i18n.t('NoEthereum'));
//
//       // MessageBox.alert(i18n.t('NoEthereum'), '', {
//       //     confirmButtonText: 'OK',
//       //     callback: action => {
//       //         window.open('https://metamask.io', '_blank');
//       //     }
//       // });
//       return false;
//     }
//
//   }
//
//   async verifyWeb3(num) {
//     if(this.web3) {
//       //console.log('==' + from_addr);
//     } else {
//       var _web3 = await this.init_web3();
//     }
//     //		if(num=='p'){
//     //			if(ethereum.networkVersion != networkp) {
//     //				Toast(tipsp);
//     //				return false;
//     //			}
//     //		}else{
//
//     //		}
//
//     if($cookies.get('walletAddress') == '') {
//       return false;
//     }
//     // this.web3.eth.net.getId().then((e) => {
//     // 	if(e != network) {
//     // 		Toast(tips);
//     // 		return false;
//     // 	}
//     // })
//     //		if($cookies.get('walletAddress').toString().toUpperCase() != from_addr.toString().toUpperCase()) {
//     //			return false;
//     //		}
//
//     return true;
//   }
//   async verifyWeb3Addr() {
//     // //console.log('==' + from_addr)
//     if(this.web3) {
//       // //console.log('==' + from_addr);
//     } else {
//       var _web3 = await this.init_web3();
//       // //console.log(_web3)
//       // //console.log('==2 ' + from_addr)
//       return true;
//     }
//     return true;
//   }
//
//   listening_web3() {
//     this.web3.eth.net.isListening().then((result) => {});
//     this.web3.eth.net.getId().then((result) => {
//       // eth_net_id = result;
//     });
//   }
//
//   event_contract(contract_instance) {
//     contract_instance.events.NewArtist((error, event) => {
//       //console.log( 'eventInfo', error, event );
//     }).on('data', (result) => {
//       //console.log( 'data', result.returnValues );
//     }).on('changed', (result) => {
//       //console.log( 'changed', result );
//     }).on('error', console.error);
//
//     contract_instance.events.eventInfo((error, event) => {
//       //console.log( 'eventInfo', error, event );
//     }).on('data', (result) => {
//       //console.log( 'data', result.returnValues );
//     }).on('changed', (result) => {
//       //console.log( 'changed', result );
//     }).on('error', console.error);
//   }
//   change_web3(fromaddr, toaddr, money) {
//     this.web3.eth.sendTransaction({
//       from: fromaddr,
//       to: toaddr,
//       value: money
//     })
//       .on('transactionHash', function(hash) {})
//       .on('receipt', function(receipt) {})
//       .on('error', function(error) {})
//   }
//
//   async getEthAddrInfo() {
//     var _verify = await this.verifyWeb3Addr();
//     //console.log(from_addr);
//     if(from_addr == '') {
//       return '';
//     }
//     return from_addr;
//   }
//
//   async verifyWeb3AddrSingIn() {
//     //console.log('==' + from_addr)
//     var _web3 = await this.init_web3();
//     //console.log('==2 ' + from_addr)
//     return true;
//   }
//
//   // init web3 singin
//   async initWeb3SingIn() {
//     var _web3 = await this.init_web3_singIn();
//
//     //console.log('web3.eth.coinbase == ', this.web3.eth.coinbase)
//
//     return _web3;
//   }
//
//   async getEthAddrInfoSingIn() {
//     //console.log(this.web3)
//     if(this.web3) {
//       var _verify = await this.verifyWeb3AddrSingIn();
//       // //console.log('====== ', from_addr);
//     }
//     return from_addr;
//   }
//
//   sign_web(_nonce, _sign_web_callback) {
//     console.log(_nonce)
//     var text = '' + _nonce
//     var msg = ethUtil.bufferToHex(new Buffer(text, 'utf8'))
//     var from = from_addr
//     var params = [msg, from]
//     var method = 'personal_sign'
//     if(this.web3==undefined){
//       this.ethereum = window.ethereum;
//       this.web3 = new Web3(ethereum);
//
//       ethereum.autoRefreshOnNetworkChange = true;
//     }
//     this.web3.currentProvider.sendAsync({
//       method,
//       params,
//       from,
//     }, function(err, result) {
//       if(err) return console.error(err)
//       if(result.error) return console.error(result.error)
//       const msgParams = {
//         data: msg
//       }
//       msgParams.sig = result.result
//       // console.dir({ msgParams })
//       const recovered = sigUtil.recoverPersonalSignature(msgParams)
//       // console.dir({ recovered })
//       console.log(result.result)
//       if (recovered === from||recovered === from.toLowerCase()) {
//         _sign_web_callback(result.result)
//       } else {
//         console.dir(recovered)
//       }
//     })
//   }
//
//
// }
//
//
// let web3tools = new Web3Tools();
// export default web3tools
