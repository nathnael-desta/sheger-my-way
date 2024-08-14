import _ from 'lodash';

export function routeListCreator(route) {
  const result = {
    order: [
    ],
    route: route
  }

  let routeChunk = chunkArray(route, 5);

  for (let i = 0; i < routeChunk.length; i++) {
    const quotient = Math.floor(routeChunk[i].length / 3);
    const remainder = routeChunk[i].length % 3;

    checkMain(result, quotient, remainder, routeChunk[i]);
    checkEnding(result, quotient, remainder, routeChunk[i]);
  }





  // console.log(route.length, "quotient", quotient, "remainder", remainder, "...............................................")

  return result;
}

function checkMain(result, quotient, remainder, route) {
  if (quotient === 0) {
    return;
  }

  const nextOrderNormal = {
    type: "",
    data: []
  }

  const nextOrderCurved = {
    type: "",
    data: []
  }

  if (quotient === 1) {
    nextOrderNormal.data.push(...route.slice(0, 3));
    nextOrderNormal.type = "normal";
    result.order.push(nextOrderNormal);
  }

  if (remainder === 2) {
    nextOrderCurved.data.push(...route.slice(3, 5));
    nextOrderCurved.type = "curved";
    result.order.push(nextOrderCurved);
  }




  // for (let i = 0; i < quotient; i++) {
  //   if (i % 2 === 0) {
  //     result.order.push("normal"); 
  //     result.normal.push(...route.slice(i * 3, (i * 3) + 3));
  //   } else {
  //     result.order.push("curved");
  //     result.curved.push(...route.slice(i * 3, (i * 3) + 3));
  //   }
  // }
}

function checkEnding(result, quotient, remainder, route) {
  if (remainder === 0) {
    return;
  }

  const nextOrderNormal = {
    type: "",
    data: []
  }

  const nextOrderCurved = {
    type: "",
    data: []
  }

  if (quotient == 0) {
    nextOrderNormal.data.push(...route.slice(-remainder));
    nextOrderNormal.type = "normalEnding";
    result.order.push(nextOrderNormal);
  }

  if (quotient == 1 && remainder !== 2) {
    nextOrderCurved.data.push(...route.slice(-remainder));
    nextOrderCurved.type = "curvedEnding";
    result.order.push(nextOrderCurved);
  }


  // if (quotient % 2 === 0) {
  //   result.order.push("normalEnding");
  //   result.normalEnding.push(...route.slice(-remainder))
  // }

  // if (quotient % 2 !== 0) {
  //   result.order.push("curvedEnding");
  //   result.curvedEnding.push(...route.slice(-remainder))
  // }
}

function chunkArray(array, chunkSize) {
  const result = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    const chunk = array.slice(i, i + chunkSize);
    result.push(chunk);
  }
  return result;
}


function isShallowEqual(obj1, obj2) {
  if (obj1 === obj2) return true; // Same reference

  if (obj1 == null || obj2 == null) return false; // One of them is null

  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) return false; // Different number of keys

  for (const key of keys1) {
    if (obj1[key] !== obj2[key]) return false; // Values are different
  }

  return true; // Objects are shallowly equal
}

export function getNearestBus(buses, currentBus) {
  const fastestBus = [...buses].reduce((closestBus, bus) => {
    const currentBusTime = parseInt(currentBus.time.arrival, 10);
    const busTime = parseInt(bus.time.arrival, 10);

    return busTime < currentBusTime ? bus : closestBus;
  }, buses[0]);

  return fastestBus;
}