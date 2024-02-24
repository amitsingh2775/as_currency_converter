import Freecurrencyapi from '@everapi/freecurrencyapi-js';
const freecurrencyapi = new Freecurrencyapi('fca_live_Kl7bxc7IKvlQmfG6LYxr8vNOzyKybI0iRmVBOA3T');

export async function convertCurrency(fromCurrency,toCurrency,units){
   const res= await freecurrencyapi.latest({
        base_currency: fromCurrency,
        currencies: toCurrency
    })
    const multiplier=res.data[toCurrency]
    return multiplier*units;

}
