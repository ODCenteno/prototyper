class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  unshiftIndex() {
    if (this.length !== 0) {
      for (let i = this.length - 1; i >= 0; i--) {
        this.data[i + 1] = this.data[i];
      }
    }
  }

  unshift(item){
     if (!item) {
      return this.length;
     } else {
      this.unshiftIndex();
      this.data[0] = item;
      this.length++;
      return this.length;
     }
  }
}

const myArray = new MyArray()

myArray.unshift("!!!")
myArray.unshift("Platzinauta")
myArray.unshift("lograste")
myArray.unshift("lo")

console.log(myArray.data);
