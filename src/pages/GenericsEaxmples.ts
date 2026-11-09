const convertToArray = <T extends number | string>(value: T): T[] => {
  return [value];
};

convertToArray(5);
convertToArray("Hello");

function getIndexofArray<T>(array: T[], arrayItem: T): number {
  return array.findIndex((item) => item === arrayItem);
}

// const getArrayofIndex = <T>(array: T[], arrayItem: T) => {
//   return array.findIndex((item) => item === arrayItem);
// };

const arr = [1, 2, 3, 4, 5];
getIndexofArray(arr, 3);

//tuple
function createArrayPair<T, K>(input1: T, input2: K): [T, K] {
  return [input1, input2];
}

createArrayPair("1", 2);
