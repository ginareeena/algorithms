// Write a function that takes in a Binary search Tree and a target integer value
// and returns the closest value to that target value in the BST.
// You can assume there will be only one closest value.

// Each BST node has:
// value (integer)
// left (child node)
// right (child node)

//A node is only a valid BST node if it's "value" property
// is greater than the values of every node to its left
// it's value is less than or equal to every node to its right
// and children are either valid BST nodes or None/null.

function findClosestValueInBst(tree, target, closest) {
  if (!closest) {
    closest = tree.value;
  }
  if (tree === null) return closest;
  if (Math.abs(target - closest) > Math.abs(target - tree.value)) {
    closest = tree.value;
  }

  if (tree.value < target) {
    return findClosestValueInBst(tree.right, target, closest);
  } else if (tree.value > target) {
    return findClosestValueInBst(tree.left, target, closest);
  } else {
    return closest;
  }
}

//algo expert's solution:

function findClosestValueInBstAlt(tree, target) {
  return findClosestValueInBstHelper(tree, target, tree.value);
}

function findClosestValueInBstHelper(tree, target, closest) {
  if (tree === null) return closest;
  if (Math.abs(target - closest) > Math.abs(target - tree.value)) {
    closest = tree.value;
  }
  if (target < tree.value) {
    return findClosestValueInBstHelper(tree.left, target, closest);
  } else if (target > tree.value) {
    return findClosestValueInBstHelper(tree.right, target, closest);
  } else {
    return closest;
  }
}
