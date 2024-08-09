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