const basePrice = 520
const discount = 120
let shippingCost = 12
let shippingTIme = "5-12 days"

shippingCost = 15
shippingTIme ="7-14 days"

const fullPrice = basePrice - discount + shippingCost

console.log("Total Cost: " + fullPrice + ". It will arrive in " + shippingTIme)