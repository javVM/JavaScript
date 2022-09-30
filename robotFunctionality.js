/*
  VillageState is an external class.
  runRobot is an external function.
*/

function compareRobots(parcels, robot1, memory1, robot2, memory2) {
  
  const state = VillageState.random(parcels);
  
  const robot1t = runRobot(state, robot1, memory1);
  const robot2t = runRobot(state, robot2, memory2);
  
  console.log(robot1t > robot2t ? 
              `Robot1 did the tasks slower: ${robot1t} > ${robot2t}` :
              `Robot2 did the tasks slower: ${robot1t} < ${robot2t}`)
  
}

function optimizedRobot({place, parcels}, route) {

  let routes = [];
  
  for (let parcel of parcels) {
    if (parcel.place != place) {
      routes.push(findRoute(roadGraph, place, parcel.place));
    } else {
      routes.push(findRoute(roadGraph, place, parcel.address));
    }
  }
  
  route = routes.reduce((a,b) => (a.length < b.length ? a : b));
  return {direction: route[0], memory: route.slice(1)};
}

compareRobots(5,optimizedRobot, [], goalOrientedRobot, []);
