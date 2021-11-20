// ЗАДАНИЕ 1 - ТРЕУГОЛЬНИК
for (var i = 1; i < 8; i++) {
    console.log("#".repeat(i));
}

// ЗАДАНИЕ 2 - FizzBuzz
for (var i = 0; i < 100; i++) {
    if (i%3 == 0) {
      console.log(`${i} - Fizz`)
    } else if (i%5 == 0 && i%3 != 0) {
      console.log(`${i} - Buzz`)
    }
    if (i % 3 == 0 || i % 5 == 0) {
      console.log(`${i} - FizzBuzz`)
    }
}

// ЗАДАНИЕ 3 - Шахматная доска

for (var i = 0; i < 8; i++) {
    i % 2 == 0 ? console.log("# # # #") : console.log(" # # # #"); 
}
// ЗАДАНИЕ 4 - Минимум

function min(a, b) {
    return a < b ? a : b;
}
console.log(min(3, 4));
// ЗАДАНИЕ 5 - Считаем бобы
function countBs1(string1) {
    return (string1.split("B").length - 1);
}
console.log(countBs1("Basdrv"));

function countBs2(string1, key) {
    return (string1.split(key).length - 1);
}
console.log(countBs2("BGASSGS", "S"));
// ЗАДАНИЕ 6 - Сумма диапазона

function arr_1(start, stop) {
    let arr1 = [];
    for (var i = start; i <= stop; i++) {
      arr1.push(i);
    }
    return arr1;
}
let test = arr_1(2, 10)
console.log(test);
function sum(arr) {
    res = 0;
    for (i in arr) {
      res += Number(i);
    }
    return res;
}
console.log(sum(test));

function arr_2(start, stop, step = 1) {
  let arr1 = [];
  if (Number(step) < 0) {
    for (var i = start; i >= stop; i+=step) {
      arr1.push(i);
    }
  } else if (Number(step) > 0) {
    for (var i = start; i <= stop; i+=step) {
      arr1.push(i);
    }
  }
  return arr1;
}
console.log(arr_2(2, 10, 2));
console.log(arr_2(5, 2, -1));
// ЗАДАНИЕ 7 - Обращаем массив вспять

function reverseArr(arr1) {
    let arr2 = [];
    for(var i = arr1.length-1; i >= 0; i--) {
        arr2.push(arr1[i]);
    }
    return arr2;
}
console.log(reverseArr([1, 2, 3, 4]));

function reverseArrayInPlace(arr1) {
    for(let i = 0, j = arr1.length-1; i < j; i++, j--)
        [arr1[i], arr1[j]] = [arr1[j], arr1[i]];
    return arr1;
}
console.log(reverseArrayInPlace([1, 2, 3, 4]));