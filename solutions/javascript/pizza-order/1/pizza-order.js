/// <reference path="./global.d.ts" />
//
// @ts-check

/**
 * Determine the price of the pizza given the pizza and optional extras
 *
 * @param {Pizza} pizza name of the pizza to be made
 * @param {Extra[]} extras list of extras
 *
 * @returns {number} the price of the pizza
 */
export function pizzaPrice(pizza, ...extras) {
  let price = 0;
  if (pizza ==='Margherita') {
    price+=7;
  }if (pizza ==='Caprese') {
    price+=9;
  }if (pizza ==='Formaggio') {
    price+=10;
  }
  for (const arg of extras) {
    if (arg ==='ExtraSauce') {
    price+=1;
  }if (arg ==='ExtraToppings') {
    price+=2;
  }
  }
  return price;
}

/**
 * Calculate the price of the total order, given individual orders
 *
 * (HINT: For this exercise, you can take a look at the supplied "global.d.ts" file
 * for a more info about the type definitions used)
 *
 * @param {PizzaOrder[]} pizzaOrders a list of pizza orders
 * @returns {number} the price of the total order
 */
export function orderPrice(pizzaOrder) {
  let totalprice = 0;
  for (const order of pizzaOrder) {
    const pizzaName = order.pizza;
    const pizzaExtra = order.extras ;
    totalprice += pizzaPrice(pizzaName,...pizzaExtra)
  }
  return totalprice;
}
