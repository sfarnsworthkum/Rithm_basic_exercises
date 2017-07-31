var grid = [
  $("row:eq(0) div"),
  $("row:eq(1) div"),
  $("row:eq(2) div"),
];

grid.forEach(function (row) {
  row.each(function (i, $el) {
    $($el).on("click", handleClick);
  });
});

function handleClick(e) {
  var $el = $(e.currentTarget);
  if (!$el.html()) {
    $el.html(getNextMark());
    if (isGameOver()) {
      setTimeout(() => alert("Hey, you won!"), 0);
    }
  }
}
var lastMark = "O";
function getNextMark() {
  if (lastMark === "O") {
    lastMark = "X"
    return lastMark;
  }
  lastMark = "O";
  return lastMark;
}

function isGameOver() {
  return hasThreeInARow(stringifyGrid(grid));
}

function stringifyGrid(grid) {
  // transform the grid of jquery nodes into a grid of strings
  return grid.map(function(row) { // map over each row
    return row.toArray().map(function($el) { // for each row, map over each $node
      return $el.innerHTML; // set it to be its string value
    })
  });
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
