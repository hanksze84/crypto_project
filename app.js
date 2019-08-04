const tickersContainer = document.getElementById('tickers');


fetch('https://api.coingecko.com/api/v3/exchanges/gdax').then(function(res){
  return res.json();
}).then(function(res) {
  const tickers = res.tickers;
  console.log('res', res);
  let htmlStr = '';

  for (let i = 0; i <= tickers.length - 1; i+=1)  {
      const currentTicker = tickers[i]; 
      const base = currentTicker.base;
      const target = currentTicker.target; 
      const price = currentTicker.last; 
    htmlStr = htmlStr + `<div>${base}/${target}${price}</div>`; 
  }

  console.log('htmlStr', htmlStr);
  tickersContainer.innerHTML = htmlStr;
});