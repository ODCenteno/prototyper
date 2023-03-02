class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  hashMethod(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set(key, value) {
    const address = this.hashMethod(key);

    if(!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
    return this.data;
  }

  get(key) {
    const address = this.hashMethod(key);
    const currentBucket = this.data[address];
    if(currentBucket) {
      for(let i = 0; i < currentBucket.length; i++) {
        if(currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      }
    }
    return undefined;
  }

  delete(key) {
    const address = this.hashMethod(key);
    const bucketToDelete = this.data[address];
    if(bucketToDelete) {
      for(let i = 0; i < bucketToDelete.length; i++) {
        if(bucketToDelete[i][0] === key) {
          let deletedBucket = bucketToDelete.splice(i, 1);;
          return deletedBucket[0];
        }
      }
    }
  }
}

// TODO: Delete method
// TODO: Method that returns all values

const myHashTable = new HashTable(50);
console.log(myHashTable.set('Omar', 1986));
console.log(myHashTable.set('Michi', 1999));
console.log(myHashTable.set('Meli', 1990));
