(function(e){function t(t){for(var r,c,i=t[0],u=t[1],s=t[2],f=0,p=[];f<i.length;f++)c=i[f],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&p.push(a[c][0]),a[c]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);l&&l(t);while(p.length)p.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,i=1;i<n.length;i++){var u=n[i];0!==a[u]&&(r=!1)}r&&(o.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},a={app:0},o=[];function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var l=u;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},1:function(e,t){},10:function(e,t){},11:function(e,t){},12:function(e,t){},13:function(e,t){},14:function(e,t){},15:function(e,t){},16:function(e,t){},17:function(e,t){},18:function(e,t){},19:function(e,t){},2:function(e,t){},"25ed":function(e,t,n){"use strict";n("cac1")},3:function(e,t){},4:function(e,t){},5:function(e,t){},6:function(e,t){},7:function(e,t){},8:function(e,t){},"8dff":function(e,t,n){"use strict";n("e5ef")},9:function(e,t){},"994e":function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d})),n.d(t,"c",(function(){return v})),n.d(t,"e",(function(){return y})),n.d(t,"d",(function(){return k}));var r=n("3835"),a=n("1da1"),o=(n("96cf"),n("d3b7"),n("99af"),n("fb6a"),n("25f0"),n("1d46")),c=n("8e01"),i=n("3e44"),u=n("f00f"),s=new o["d"].PublicKey("cndyAnrLdpjq1Ssp1z8xxDsB8dxe7u4HL5Nxi2K5WXZ"),l=new o["d"].PublicKey("ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"),f=new o["d"].PublicKey("metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s"),p=function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t,n,r){var o,c,i,s,l,f=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return o=f.length>3&&void 0!==f[3]?f[3]:"recent",c=f.length>4&&void 0!==f[4]&&f[4],i=!1,s={slot:0,confirmations:0,err:null},l=0,e.next=7,new Promise((function(e,f){setTimeout((function(){i||(i=!0,console.log("Rejecting for timeout..."),f({timeout:!0}))}),n);try{l=r.onSignature(t,(function(t,n){i=!0,s={err:t.err,slot:n.slot,confirmations:0},t.err?(console.log("Rejected via websocket",t.err),f(s)):(console.log("Resolved via websocket",t),e(s))}),o)}catch(p){i=!0,console.error("WS error in setup",t,p)}while(!i&&c)Object(a["a"])(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,r.getSignatureStatuses([t]);case 3:a=n.sent,s=a&&a.value[0],i||(s?s.err?(console.log("REST error for",t,s),i=!0,f(s.err)):s.confirmations?(console.log("REST confirmation for",t,s),i=!0,e(s)):console.log("REST no confirmations for",t,s):console.log("REST null result for",t,s)),n.next=11;break;case 8:n.prev=8,n.t0=n["catch"](0),i||console.log("REST connection error: txid",t,n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})))(),Object(u["b"])(2e3)}));case 7:return s=e.sent,r._signatureSubscriptions[l]&&r.removeSignatureListener(l),i=!0,console.log("Returning status",s),e.abrupt("return",s);case 12:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),b=function(t,n,r,a){var c=[{pubkey:n,isSigner:!0,isWritable:!0},{pubkey:t,isSigner:!1,isWritable:!0},{pubkey:r,isSigner:!1,isWritable:!1},{pubkey:a,isSigner:!1,isWritable:!1},{pubkey:o["d"].SystemProgram.programId,isSigner:!1,isWritable:!1},{pubkey:i["e"],isSigner:!1,isWritable:!1},{pubkey:o["d"].SYSVAR_RENT_PUBKEY,isSigner:!1,isWritable:!1}];return new o["d"].TransactionInstruction({keys:c,programId:l,data:e.from([])})},d=function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t,n,r){var a,c,i,u,l,f,p,b,d,m;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a={publicKey:t.publicKey.value,signAllTransactions:t.signAllTransactions.value,signTransaction:t.signTransaction.value},c=new o["b"](r,a,{preflightCommitment:"recent"}),e.next=4,o["a"].fetchIdl(s,c);case 4:if(i=e.sent,!i){e.next=19;break}return u=new o["a"](i,s,c),l={id:n,connection:r,program:u},e.next=10,u.account.candyMachine.fetch(n);case 10:return f=e.sent,p=f.data.itemsAvailable.words[0],b=f.itemsRedeemed.words[0],d=p-b,m=f.data.goLiveDate.toNumber(),m=new Date(1e3*m),e.abrupt("return",{candyMachine:l,itemsAvailable:p,itemsRedeemed:b,itemsRemaining:d,goLiveDate:m});case 19:throw new Error("Fetching idl returned null: check CANDY_MACHINE_PROGRAM");case 20:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),m=function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(n){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,o["d"].PublicKey.findProgramAddress([e.from("metadata"),f.toBuffer(),n.toBuffer(),e.from("edition")],f);case 2:return t.abrupt("return",t.sent[0]);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),g=function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(n){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,o["d"].PublicKey.findProgramAddress([e.from("metadata"),f.toBuffer(),n.toBuffer()],f);case 2:return t.abrupt("return",t.sent[0]);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),h=function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t,n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,o["d"].PublicKey.findProgramAddress([t.toBuffer(),i["e"].toBuffer(),n.toBuffer()],l);case 2:return e.abrupt("return",e.sent[0]);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();function v(e,t){return w.apply(this,arguments)}function w(){return w=Object(a["a"])(regeneratorRuntime.mark((function t(n,a){var u,s,l,p,b,d,m,g,h,v,w;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return u=[],t.next=3,n.getParsedTokenAccountsByOwner(a,{programId:i["e"]});case 3:s=t.sent,l=0;case 5:if(!(l<s.value.length)){t.next=30;break}if(p=s.value[l],b=p.account.data.parsed.info.tokenAmount,"1"!=b.amount||"0"!=b.decimals){t.next=27;break}return t.next=11,o["d"].PublicKey.findProgramAddress([e.from("metadata"),f.toBuffer(),new o["d"].PublicKey(p.account.data.parsed.info.mint).toBuffer()],f);case 11:return d=t.sent,m=Object(r["a"])(d,1),g=m[0],t.next=16,n.getParsedAccountInfo(g);case 16:return h=t.sent,v=new c["a"].metadata.Metadata(a.toString(),h.value),t.next=20,fetch(v.data.data.uri);case 20:if(w=t.sent,200!==w.status){t.next=27;break}return t.t0=u,t.next=25,w.json();case 25:t.t1=t.sent,t.t0.push.call(t.t0,t.t1);case 27:l++,t.next=5;break;case 30:return t.abrupt("return",u);case 31:case"end":return t.stop()}}),t)}))),w.apply(this,arguments)}var y=function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t,n,r,a){var c,u,s,l,p,d,v,w;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return c=o["d"].Keypair.generate(),e.next=3,h(r,c.publicKey);case 3:return u=e.sent,s=t.connection,l=t.program,e.next=7,g(c.publicKey);case 7:return p=e.sent,e.next=10,m(c.publicKey);case 10:return d=e.sent,e.next=13,s.getMinimumBalanceForRentExemption(i["c"].span);case 13:return v=e.sent,w={accounts:{config:n,candyMachine:t.id,payer:r,wallet:a,mint:c.publicKey,metadata:p,masterEdition:d,mintAuthority:r,updateAuthority:r,tokenMetadataProgram:f,tokenProgram:i["e"],systemProgram:o["d"].SystemProgram.programId,rent:o["d"].SYSVAR_RENT_PUBKEY,clock:o["d"].SYSVAR_CLOCK_PUBKEY},signers:[c],instructions:[o["d"].SystemProgram.createAccount({fromPubkey:r,newAccountPubkey:c.publicKey,space:i["c"].span,lamports:v,programId:i["e"]}),i["f"].createInitMintInstruction(i["e"],c.publicKey,0,r,r),b(u,r,r,c.publicKey),i["f"].createMintToInstruction(i["e"],c.publicKey,u,r,[],1)]},e.next=17,l.rpc.mintNft(w);case 17:return e.abrupt("return",e.sent);case 18:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),k=function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t,n,r,a,c){var s,l,p,d,v,w,y,k,j,x,O;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:s=[],l=[],p=0;case 3:if(!(p<c)){e.next=30;break}return d=o["d"].Keypair.generate(),e.next=7,h(r,d.publicKey);case 7:return v=e.sent,w=t.connection,e.next=11,w.getMinimumBalanceForRentExemption(i["c"].span);case 11:return y=e.sent,k=[o["d"].SystemProgram.createAccount({fromPubkey:r,newAccountPubkey:d.publicKey,space:i["c"].span,lamports:y,programId:i["e"]}),i["f"].createInitMintInstruction(i["e"],d.publicKey,0,r,r),b(v,r,r,d.publicKey),i["f"].createMintToInstruction(i["e"],d.publicKey,v,r,[],1)],e.next=15,m(d.publicKey);case 15:return j=e.sent,e.next=18,g(d.publicKey);case 18:return x=e.sent,e.t0=k,e.next=22,t.program.instruction.mintNft({accounts:{config:n,candyMachine:t.id,payer:r,wallet:a,mint:d.publicKey,metadata:x,masterEdition:j,mintAuthority:r,updateAuthority:r,tokenMetadataProgram:f,tokenProgram:i["e"],systemProgram:o["d"].SystemProgram.programId,rent:o["d"].SYSVAR_RENT_PUBKEY,clock:o["d"].SYSVAR_CLOCK_PUBKEY}});case 22:e.t1=e.sent,e.t0.push.call(e.t0,e.t1),O=[d],s.push(O),l.push(k);case 27:p++,e.next=3;break;case 30:return e.next=32,Object(u["a"])(t.program.provider.connection,t.program.provider.wallet,l,s);case 32:return e.abrupt("return",e.sent);case 33:case"end":return e.stop()}}),e)})));return function(t,n,r,a,o){return e.apply(this,arguments)}}()}).call(this,n("1c35").Buffer)},cac1:function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23");function a(e,t,n,a,o,c){var i=Object(r["z"])("wallet-multi-button"),u=Object(r["z"])("wallet-modal-provider"),s=Object(r["z"])("home"),l=Object(r["z"])("wallet-provider");return Object(r["s"])(),Object(r["f"])(l,{wallets:e.wallets,"auto-connect":""},{default:Object(r["D"])((function(){return[Object(r["i"])("div",null,[Object(r["i"])("div",null,[Object(r["l"])(u,null,{default:Object(r["D"])((function(){return[Object(r["l"])(i)]})),_:1})]),Object(r["l"])(s)])]})),_:1},8,["wallets"])}var o=n("4c05"),c=n("aacd"),i=Object(r["i"])("p",null,"WipeMyAss - Profit Calculator",-1),u={key:0},s={key:0},l=["disabled"],f={key:1,style:{display:"inline-block"}},p=["disabled"],b={key:0};function d(e,t,n,a,o,c){return Object(r["s"])(),Object(r["h"])("div",null,[i,Object(r["l"])(r["c"],{name:"fade"},{default:Object(r["D"])((function(){return[e.connected?(Object(r["s"])(),Object(r["h"])("div",u,[0===e.balance||0===e.nftCount?(Object(r["s"])(),Object(r["h"])("div",s,[Object(r["i"])("button",{disabled:e.calculating,onClick:t[0]||(t[0]=function(t){return e.calculate()})},"Calculate",8,l)])):(Object(r["s"])(),Object(r["h"])("div",f,[Object(r["i"])("button",{disabled:e.calculating,onClick:t[1]||(t[1]=function(t){return e.calculate()})},"Calculate",8,p),Object(r["i"])("p",null,"$WIPE Balance: "+Object(r["A"])(e.balance),1),Object(r["i"])("p",null,"NFT Count: "+Object(r["A"])(e.nftCount),1),Object(r["i"])("p",null,Object(r["A"])(e.output[1])+" "+Object(r["A"])(e.output[4]),1),e.output.length>0?(Object(r["s"])(),Object(r["h"])("table",b,[Object(r["i"])("tr",null,[Object(r["i"])("th",null,Object(r["A"])(e.output[0]),1),Object(r["i"])("th",null,Object(r["A"])(e.output[2]),1)]),Object(r["i"])("tr",null,[Object(r["i"])("td",null,Object(r["A"])(e.output[3]),1),Object(r["i"])("td",null,Object(r["A"])(e.output[5]),1)])])):Object(r["g"])("",!0)]))])):Object(r["g"])("",!0)]})),_:1})])}var m=n("3835"),g=(n("4de4"),n("d3b7"),n("b0c0"),n("99af"),n("a9e3"),n("c638"));n("1da1"),n("96cf"),n("3ca3"),n("ddb0");function h(e){var t=Object(r["v"])(e),n=function(e){t.value=e};return[Object(r["u"])(t),n]}var v=n("1d46"),w=n("994e"),y=(n("64b9"),n("f00f"),n("98a0"),n("bc3a")),k=n.n(y),j=(new v["d"].PublicKey("3gGHT6gyowscSPGpRKjk3ycLnYEuQgqJrutXmkcNTp3E"),new v["d"].PublicKey("2PxQAP5uF2FiC7neRQo8jNt2FAszrL3dz1ij9Ax7EwT1"),new v["d"].PublicKey("47M8nkDwgzd4yXTHN7vcY92zJtHDqtuv6VLRcfKLf6t9"),"https://explorer-api.devnet.solana.com"),x=(new v["d"].Connection(j),h(0)),O=Object(m["a"])(x,2),R=(O[0],O[1],h({itemsRemaining:0,itemsRedeemed:0,itemsAvailable:0})),P=Object(m["a"])(R,2),_=(P[0],P[1],h(!1)),S=Object(m["a"])(_,2),T=(S[0],S[1],h(!1)),A=Object(m["a"])(T,2);A[0],A[1];function K(e,t){return new Promise((function(n,r){e.publicKey.value?k.a.post("https://api.mainnet-beta.solana.com",{jsonrpc:"2.0",id:1,method:"getTokenAccountsByOwner",params:[e.publicKey.value.toBase58(),{mint:t},{encoding:"jsonParsed"}]},{headers:{"Content-Type":"application/json"}}).then((function(e){var t=e.data.result.value[0].account.data.parsed.info.tokenAmount,r=t.amount/Math.pow(10,t.decimals);n(r)})):n(-1)}))}var E=Object(r["m"])({name:"Home",components:{},methods:{diff_weeks:function(e,t){var n=(e.getTime()-t.getTime())/1e3;return n/=604800,Math.abs(Math.round(n))},calculate:function(){var e=this;this.setCalculating(!0),K(this.wallet,"9ae76zqD3cgzR9gvf5Thc2NN3ACF7rqqnrLqxNzgcre6").then((function(t){e.setBalance(t)})),this.wallet.publicKey.value&&Object(w["c"])(this.connection,this.wallet.publicKey.value).then((function(t){e.setNftCount(t.filter((function(e){return void 0!==e.collection&&("WipeMyAss"===e.collection.name&&"WipeMyAss"===e.collection.family)})).length);var n=e.diff_weeks(new Date,new Date("Sunday, May 1, 2022"));e.calculate_profit_using_current_price("wipemyass",e.balance,10,1,e.nftCount,n,1,"usd").then((function(t){var n=[];n.push("Total $".concat(t.symbol.toUpperCase()," (min - max)")),n.push("Price (".concat(t.denomination.toUpperCase(),")")),n.push("Total ".concat(t.denomination.toUpperCase()," (min - max)")),n.push("".concat(t.least_token," - ").concat(t.most_token)),n.push("$ ".concat(t.current_price)),n.push("$ ".concat(t.profit_least," - ").concat(t.profit_most)),e.setOutput(n),e.setCalculating(!1)})).catch((function(t){e.setOutput([t]),e.setCalculating(!1)}))}))},calculate_profit_using_current_price:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"wipemyass",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:30895,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1.1,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:25,o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:25,c=arguments.length>6&&void 0!==arguments[6]?arguments[6]:1,i=arguments.length>7&&void 0!==arguments[7]?arguments[7]:"usd";return new Promise((function(u,s){var l=[];t<-1&&l.push("starting_token has to be greater than or equal to zero."),(a>3e3||a<0)&&l.push("number_of_nfts has to be greater than or equal to zero and less than three thousand."),(o>25||o<1)&&l.push("number_of_weeks has to be between 1 and 25 (inclusive)."),(c>25||c<1)&&l.push("starting_week has to be between 1 and 25 (inclusive)."),l.length>0&&(l.forEach((function(e){console.error(e)})),s(new Error("Failed to calculate the profit, check your parameters")));for(var f=function(){return 3e3*a},p=function(){return 2e3},b=Number(0+t),d=c;d<=o;d++)d%r===0&&(b*=1+1/n),b+=f(),b>5e4&&(b+=p());for(var m=Number(0+t),g=c;g<=o;g++)m+=f(),m>5e4&&(m+=p()),g%r===0&&(m*=1+1/n);k.a.get("https://api.coingecko.com/api/v3/coins/"+e).then((function(e){var n=e.data.market_data.current_price[i];u({symbol:e.data.symbol,denomination:i,number_of_nfts:a,starting_token:t,least_token:b,most_token:m,current_price:n,profit_most:Number(m*n),profit_least:Number(b*n),error:null})})).catch((function(e){console.error(e),u({symbol:null,denomination:i,number_of_nfts:a,starting_token:t,least_token:b,most_token:m,current_price:null,profit_most:null,error:new Error("Failed to retrieve current_price from coingecko")})}))}))}},mounted:function(){setTimeout((function(){}),2e3)},setup:function(){var e="https://api.mainnet-beta.solana.com",t=new v["d"].Connection(e),n=Object(g["b"])(),r=h(0),a=Object(m["a"])(r,2),o=a[0],c=a[1],i=h(0),u=Object(m["a"])(i,2),s=u[0],l=u[1],f=h([""]),p=Object(m["a"])(f,2),b=p[0],d=p[1],w=h(!1),y=Object(m["a"])(w,2),k=y[0],j=y[1];return{connected:n.connected,wallet:n,balance:o,setBalance:c,nftCount:s,setNftCount:l,connection:t,output:b,setOutput:d,calculating:k,setCalculating:j}}}),C=(n("25ed"),n("6b0d")),B=n.n(C);const M=B()(E,[["render",d]]);var N=M,W=n("9129"),z=Object(r["m"])({name:"App",components:{Home:N,WalletProvider:c["a"],WalletModalProvider:o["a"],WalletMultiButton:o["b"]},setup:function(){var e=[Object(W["c"])(),Object(W["a"])(),Object(W["b"])(),Object(W["b"])(),Object(W["d"])(),Object(W["e"])(),Object(W["f"])(),Object(W["g"])(),Object(W["h"])()];return{wallets:e}}});n("8dff");const I=B()(z,[["render",a]]);var L=I,q=(n("c4bb"),Object(r["e"])(L));q.mount("#app")},e5ef:function(e,t,n){},f00f:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var r,a=n("2909"),o=n("1da1"),c=(n("96cf"),n("d3b7"),n("159b"),n("ac1f"),n("3ca3"),n("ddb0"),n("d81d"),n("99af"),n("2ca0"),n("fb6a"),n("e9c4"),n("25f0"),n("64b9")),i=n("33f7");(function(e){e[e["Sequential"]=0]="Sequential",e[e["Parallel"]=1]="Parallel",e[e["StopOnFailure"]=2]="StopOnFailure"})(r||(r={}));var u=function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t,n,o,u){var s,l,p,b,d,m,g,h,v,w,y,k,j,x,O,R=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(s=R.length>4&&void 0!==R[4]?R[4]:r.Parallel,l=R.length>5&&void 0!==R[5]?R[5]:"singleGossip",p=R.length>6?R[6]:void 0,n.publicKey){e.next=5;break}throw new i["g"];case 5:if(b=[],p){e.next=10;break}return e.next=9,t.getRecentBlockhash(l);case 9:p=e.sent;case 10:d=function(e){var t=o[e],r=u[e];if(0===t.length)return"continue";var i=new c["Transaction"];t.forEach((function(e){return i.add(e)})),i.recentBlockhash=p.blockhash,i.feePayer=n.publicKey,r.length>0&&i.partialSign.apply(i,Object(a["a"])(r.map((function(e){return e})))),b.push(i)},m=0;case 12:if(!(m<o.length)){e.next=19;break}if(g=d(m),"continue"!==g){e.next=16;break}return e.abrupt("continue",16);case 16:m++,e.next=12;break;case 19:return e.next=21,n.signAllTransactions(b);case 21:h=e.sent,v=[],w={breakEarly:!1,i:0},console.log("Signed txns length",h.length,"vs handed in length",o.length),y=[],k=0;case 27:if(!(k<h.length)){e.next=59;break}return j=f({connection:t,signedTransaction:h[k]}),e.prev=29,e.next=32,j;case 32:x=e.sent,O=x.txid,y.push(O),e.next=41;break;case 37:e.prev=37,e.t0=e["catch"](29),console.error(e.t0),s===r.StopOnFailure&&(w.breakEarly=!0,w.i=k);case 41:if(s===r.Parallel){e.next=55;break}return e.prev=42,e.next=45,j;case 45:e.next=53;break;case 47:if(e.prev=47,e.t1=e["catch"](42),console.log("Caught failure",e.t1),!w.breakEarly){e.next=53;break}return console.log("Died on ",w.i),e.abrupt("return",w.i);case 53:e.next=56;break;case 55:v.push(j);case 56:k++,e.next=27;break;case 59:if(s===r.Parallel){e.next=62;break}return e.next=62,Promise.all(v);case 62:return e.abrupt("return",y);case 63:case"end":return e.stop()}}),e,null,[[29,37],[42,47]])})));return function(t,n,r,a){return e.apply(this,arguments)}}(),s=function(){return(new Date).getTime()/1e3},l=15e3;function f(e){return p.apply(this,arguments)}function p(){return p=Object(o["a"])(regeneratorRuntime.mark((function e(t){var n,r,a,c,i,u,f,p,d,g,v,w,y;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.signedTransaction,r=t.connection,a=t.timeout,c=void 0===a?l:a,i=n.serialize(),u=s(),f=0,e.next=6,r.sendRawTransaction(i,{skipPreflight:!0});case 6:return p=e.sent,console.log("Started awaiting confirmation for",p),d=!1,Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(d||!(s()-u<c)){e.next=6;break}return r.sendRawTransaction(i,{skipPreflight:!0}),e.next=4,h(500);case 4:e.next=0;break;case 6:case"end":return e.stop()}}),e)})))(),e.prev=10,e.next=13,m(p,c,r,"recent",!0);case 13:if(g=e.sent,g){e.next=16;break}throw new Error("Timed out awaiting confirmation on transaction");case 16:if(!g.err){e.next=19;break}throw console.error(g.err),new Error("Transaction failed: Custom instruction error");case 19:f=(null===g||void 0===g?void 0:g.slot)||0,e.next=42;break;case 22:if(e.prev=22,e.t0=e["catch"](10),console.error("Timeout Error caught",e.t0),!e.t0.timeout){e.next=27;break}throw new Error("Timed out awaiting confirmation on transaction");case 27:return v=null,e.next=30,b(r,n,"single");case 30:if(v=e.sent.value,!v||!v.err){e.next=42;break}if(!v.logs){e.next=41;break}w=v.logs.length-1;case 34:if(!(w>=0)){e.next=41;break}if(y=v.logs[w],!y.startsWith("Program log: ")){e.next=38;break}throw new Error("Transaction failed: "+y.slice("Program log: ".length));case 38:--w,e.next=34;break;case 41:throw new Error(JSON.stringify(v.err));case 42:return e.prev=42,d=!0,e.finish(42);case 45:return console.log("Latency",p,s()-u),e.abrupt("return",{txid:p,slot:f});case 47:case"end":return e.stop()}}),e,null,[[10,22,42,45]])}))),p.apply(this,arguments)}function b(e,t,n){return d.apply(this,arguments)}function d(){return d=Object(o["a"])(regeneratorRuntime.mark((function e(t,n,r){var a,o,c,i,u,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t._recentBlockhash(t._disableBlockhashCaching);case 2:return n.recentBlockhash=e.sent,a=n.serializeMessage(),o=n._serialize(a),c=o.toString("base64"),i={encoding:"base64",commitment:r},u=[c,i],e.next=10,t._rpcRequest("simulateTransaction",u);case 10:if(s=e.sent,!s.error){e.next=13;break}throw new Error("failed to simulate transaction: "+s.error.message);case 13:return e.abrupt("return",s.result);case 14:case"end":return e.stop()}}),e)}))),d.apply(this,arguments)}function m(e,t,n){return g.apply(this,arguments)}function g(){return g=Object(o["a"])(regeneratorRuntime.mark((function e(t,n,r){var a,c,i,u,s,l=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=l.length>3&&void 0!==l[3]?l[3]:"recent",c=l.length>4&&void 0!==l[4]&&l[4],i=!1,u={slot:0,confirmations:0,err:null},s=0,e.next=7,new Promise((function(e,l){setTimeout((function(){i||(i=!0,console.log("Rejecting for timeout..."),l({timeout:!0}))}),n);try{s=r.onSignature(t,(function(t,n){i=!0,u={err:t.err,slot:n.slot,confirmations:0},t.err?(console.log("Rejected via websocket",t.err),l(u)):(console.log("Resolved via websocket",t),e(u))}),a)}catch(f){i=!0,console.error("WS error in setup",t,f)}while(!i&&c)Object(o["a"])(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,r.getSignatureStatuses([t]);case 3:a=n.sent,u=a&&a.value[0],i||(u?u.err?(console.log("REST error for",t,u),i=!0,l(u.err)):u.confirmations?(console.log("REST confirmation for",t,u),i=!0,e(u)):console.log("REST no confirmations for",t,u):console.log("REST null result for",t,u)),n.next=11;break;case 8:n.prev=8,n.t0=n["catch"](0),i||console.log("REST connection error: txid",t,n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})))(),h(2e3)}));case 7:return u=e.sent,r._signatureSubscriptions[s]&&r.removeSignatureListener(s),i=!0,console.log("Returning status",u),e.abrupt("return",u);case 12:case"end":return e.stop()}}),e)}))),g.apply(this,arguments)}var h=function(e){return new Promise((function(t){return setTimeout(t,e)}))}}});
//# sourceMappingURL=app.bf299080.js.map