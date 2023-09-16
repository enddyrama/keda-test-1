// 1. Buatlah fungsi dengan input array of number untuk mengurutkan angka dari terbesar ke terkecil dengan manual tanpa fungsi bawaan javascript
// Input : [1, 2, 4, 3, 5, 3, 2, 1]			Expected Output : [5, 4, 3, 3, 2, 2, 1, 1]

const input = [1, 2, 4, 3, 5, 3, 2, 1];
const input2 = ["Asdasd", "sdsdf"]

const sortDescending = (numbers) => {
  if (!Array.isArray(numbers)) {
    return "It is not an array of numbers";
  }
  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = 0; j < numbers.length - 1 - i; j++) {
      if (typeof numbers[j] !== 'number' || typeof numbers[j + 1] !== 'number') {
        return "It is not an array of numbers";
      }

      if (numbers[j] < numbers[j + 1]) {
        const temp = numbers[j];
        numbers[j] = numbers[j + 1];
        numbers[j + 1] = temp;
      }
    }
  }
  return numbers;
};

console.log("Task 1 Result", sortDescending(input))

// 2. Buatlah fungsi dengan input array of number dan number untuk menemukan jumlah maksimum subarray dengan panjang angka yang dimasukan ke fungsi
// Input : ([100, 200, 300, 400], 2)				Expected Output : 700 		// didapatkan dari 300 + 400
// Input : ([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)		Expected Output : 39 		// didapatkan dari 4 + 2 + 10 + 23
// Input : ([-3, 4, 0, -2, 6, -1], 2)				Expected Output : 5 		// didapatkan dari 6 + -1

const maxSubarraySum = (arr, num) => {
  if (num <= 0 || num >= arr.length) {
    return "Error Array is not as many as the Offsett";
  }

  const result = [];

  for (let i = 0; i < arr.length - num + 1; i++) {
    let sum = 0;
    for (let j = i; j < i + num; j++) {
      sum += arr[j];
    }
    result.push(sum);
  }
  return Math.max(...result);
}

console.log("Task 2 result", maxSubarraySum([100, 200, 300, 400], 2));
console.log("Task 2 result", maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4));
console.log("Task 2 result", maxSubarraySum([-3, 4, 0, -2, 6, -1], 2));

// 3. Buatlah fungsi untuk mendapatkan jumlah semua bilangan genap dalam nested objek
const nestedinput1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup"
    }
  }
};

const nestedinput2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: 'ball', ccc: 5 },
  d: 1,
  e: { e: { e: 4 }, ee: 'car' }
};

const evenNumberTotalNested = (obj) => {
  let total = 0;
  for (const key in obj) {
    if (typeof obj[key] === 'number') {
      if (obj[key] % 2 === 0) {
        total += obj[key];
      }
    } else if (typeof obj[key] === 'object') {
      total += evenNumberTotalNested(obj[key]);
    }
  }

  return total;
};


console.log("Task 3 result 1", evenNumberTotalNested(nestedinput1)); // Output: 6
console.log("Task 3 result 2", evenNumberTotalNested(nestedinput2)); // Output: 12