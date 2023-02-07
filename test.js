let arr = ["A", "B", "C", "D", "E"];

console.log("start");
let count = 0;
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length; j++) {
    for (let k = 0; k < arr.length; k++) {
      console.log(arr[i] + arr[j] + arr[k]);
      count++;
      if (count % 25 == 0) {
        console.log("------------------ ");
      }
    }
  }
}
