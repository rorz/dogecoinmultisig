// This is a custom wrapper for https://github.com/miohtama/bitcoin-prices (contained in 'bicoinprices.js')



$(document).ready(function() {
       bitcoinprices.init({

           // Where we get bitcoinaverage data
           url: "http://cors.io/?https://www.cryptonator.com/api/ticker/doge-usd", // This uses a cors.io proxy to avoid No 'Access-Control-Allow-Origin' (see http://cors.io/)

           // Which of bitcoinaverages value we use to present prices
           marketRateVariable: "price",

           // Which currencies are in shown to the user
           currencies: ["ticker", "BTC"],

           // Special currency symbol artwork

           symbols: {
               // "BTC": "<i class='fa fa-btc'></i>"
               "ticker": "DOGE",
               "BTC": "USD"
           },


           // Which currency we show user by the default if
           // no currency is selected
           defaultCurrency: "ticker",

           // How the user is able to interact with the prices
           ux : {
               // Make everything with data-btc-price HTML attribute clickable
               clickPrices : true,

               // Build Bootstrap dropdown menu for currency switching
               menu : true,

               // Allow user to cycle through currency choices in currency:

               clickableCurrencySymbol:  true
           },

           // Allows passing the explicit jQuery version to bitcoinprices.
           // This is useful if you are using modular javascript (AMD/UMD/require()),
           // but for most normal usage you don't need this
           jQuery: jQuery,

           // Price source data attribute
           priceAttribute: "data-btc-price",

           // Price source currency for data-btc-price attribute.
           // E.g. if your shop prices are in USD
           // but converted to BTC when you do Bitcoin
           // checkout, put USD here.
           priceOrignalCurrency: "ticker"

       });
   });
