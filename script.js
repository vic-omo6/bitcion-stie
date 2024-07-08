let btcnaira = document.getElementById('btcnaira');
let btcdollar = document.getElementById('btcdollar');
let btcmc = document.getElementById('btcmc');
let ethnaira = document.getElementById('ethnaira');
let ethdollar = document.getElementById('ethdollar');
let ethmc = document.getElementById('ethmc');
let dogenaira = document.getElementById('dogenaira');
let dogedollar = document.getElementById('dogedollar');
let dogemc = document.getElementById('dogemc');
let solnaira = document.getElementById('solnaira');
let soldollar = document.getElementById('soldollar');
let solmc = document.getElementById('solmc');
let busdnaira = document.getElementById('busdnaira');
let busddollar = document.getElementById('busddollar');
let busdmc = document.getElementById('busdmc');



let myrequest = new XMLHttpRequest();

  setInterval(() => {
    
    myrequest.open('GET',`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin%2Csolana%2Ctether&vs_currencies=ngn%2Cusd&include_market_cap=true&precision=3`);
  
  myrequest.onload = function () {
    console.log(myrequest);
    console.log(myrequest.responseText);
  
    let newdata = JSON.parse(myrequest.responseText);
    console.log(newdata);
  
    btcnaira.innerHTML = newdata.bitcoin.ngn;
    btcdollar.innerHTML = newdata.bitcoin.usd;
    btcmc.innerHTML = newdata.bitcoin.usd_market_cap;
  
    ethnaira.innerHTML = newdata.ethereum.ngn;
    ethdollar.innerHTML = newdata.ethereum.usd;
    ethmc.innerHTML = newdata.ethereum.usd_market_cap;
  
    dogenaira.innerHTML = newdata.dogecoin.ngn;
    dogedollar.innerHTML = newdata.dogecoin.usd;
    dogemc.innerHTML = newdata.dogecoin.usd_market_cap;
  
    solnaira.innerHTML = newdata.solana.ngn;
    soldollar.innerHTML = newdata.solana.usd;
    solmc.innerHTML = newdata.solana.usd_market_cap;
  
    busdnaira.innerHTML = newdata.tether.ngn;
    busddollar.innerHTML = newdata.tether.usd;
    busdmc.innerHTML = newdata.tether.usd_market_cap;
  
  }
  
  myrequest.send();
  }, 3000);
    