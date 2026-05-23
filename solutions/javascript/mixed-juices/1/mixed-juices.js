// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 
   'Pure Strawberry Joy' takes 0.5 minutes,
   'Energizer' and 'Green Garden' take 1.5 minutes each,
   'Tropical Island' takes 3 minutes 
   'All or Nothing' takes 5 minutes.

   DEFAULT For all other drinks (e.g., special offers) you can assume a preparation     time of 2.5 minutes.
   
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  switch(name){
      case 'Pure Strawberry Joy':return 0.5; break;
      case 'Energizer':case'Green Garden':return 1.5; break;
      case 'Tropical Island':return 3; break;
      case 'All or Nothing':return 5; break;
    default: return 2.5;
    
  }
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
    6 wedges from a 'small' lime
    8 wedges from a 'medium' lime and 
    10 from a 'large' lime

 
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) 
  { 
    let limeNum=0;
    
    while (wedgesNeeded>0 &&limes.length>limeNum) {
      
      switch(limes[limeNum]){
          
      case 'small':wedgesNeeded-=6;break;
      case 'medium':wedgesNeeded-=8;break;
      case 'large':wedgesNeeded-=10;break;
          
  }limeNum+=1;
  }return limeNum;
}
/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  do {
   timeLeft -= timeToMixJuice(orders[0]) ;
     orders.shift();
  } while (timeLeft>0)
  return orders;
  
}
