var grid = [
  $("row")[0].children,
  $("row")[1].children,
  $("row")[2].children,
];

function transformGrid(grid) {
  
}

function hasThreeInARow(arr) {
  return hasThreeRow(arr) || hasThreeColumn(arr) || hasThreeDiag(arr);
}
function hasThreeRow(arr) {
  return arr.some(function(row) {
    return sameStuff(row);
  })
}

function sameStuff(arr) {
  // are all of them X's?
  // or are all of them O's?
  if (arr[0] === arr[1] && arr[1] === arr[2] && arr[0] === "X") {
    return true;
  } else if (arr[0] === arr[1] && arr[1] === arr[2] && arr[0] === "O") {
    return true;
  }
  return false;
}
function hasThreeColumn(arr) {
  for (var j = 0; j < arr.length; j++) {
    if (sameStuff([arr[0][j], arr[1][j], arr[2][j]])) {
      return true;
    }
  }
  return false;
}

function hasThreeDiag(arr) {
  if (sameStuff([arr[0][0], arr[1][1], arr[2][2]])) {
    return true;
  } else if (sameStuff([arr[0][2], arr[1][1], arr[2][0]])) {
    return true;
  }
  return false;
}
