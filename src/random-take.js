import randomIndex from "@rojo2/random-index";

/**
 * Returns a random value from an Array (removing it from the list).
 *
 * @param {Array} list - List of values.
 * @param {Function} [random=Math.random] - Random generator function to be used.
 * @returns {*|undefined} - Returns a value from the list (removing it from the list) or undefined if the list is empty.
 */
export default function randomTake(list, random = Math.random) {
  const index = randomIndex(list, random);
  if (index < 0) {
    return undefined;
  }
  const [value] = list.splice(index, 1);
  return value;
}

