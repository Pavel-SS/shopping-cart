const CURRENCY_FORMAT = new Intl.NumberFormat(undefined, {
    currency: "BYN", 
    style: "currency"
})

export const currencyFormat = (number: number) => {
    return CURRENCY_FORMAT.format(number)
}