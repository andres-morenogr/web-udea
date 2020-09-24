function deleteUniqueElements (list) {
  let frequencies = new Map();

  for (let i = 0; i < list.length ; i++) {
    if (!frequencies.has(list[i])) {
      frequencies.set(list[i], 1);
    } else {
      let value = frequencies.get(list[i]);
      value += 1;
      frequencies.set(list[i], value);
    }
  }

  let listWithOutUniqueValues = [];

  for (let i = 0; i < list.length ; i++) {
    if (frequencies.get(list[i]) > 1) {
      listWithOutUniqueValues.push(list[i])
    }
  }

  return listWithOutUniqueValues;
}

let testList = [1,2,3,1,3];

let result = deleteUniqueElements(testList);

console.log(result) // [1,3,1,3]