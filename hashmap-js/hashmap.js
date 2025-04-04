import LinkedList from "./linkedlist.js";

class HashMap {
  constructor(loadFactor) {
    (this.buckets = []),
      (this.capacity = 16),
      (this.loadFactor = loadFactor),
      (this.buckets.length = this.capacity);
  }

  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
      hashCode = hashCode % this.capacity;
    }

    return hashCode;
  }

  set(key, value) {
    const hashCode = this.hash(key);

    if (hashCode < 0 || hashCode >= this.buckets.length) {
      throw new Error("Trying to access index out of bounds");
    }

    if (!this.buckets[hashCode]) {
      this.buckets[hashCode] = new LinkedList();
      this.buckets[hashCode].prepend(key, value);
      this.growBuckets();
      return;
    }

    if (this.buckets[hashCode].size === 1) {
      if (this.buckets[hashCode].head.key === key) {
        this.buckets[hashCode].head.value = value;
        this.growBuckets();
        return;
      }
      this.buckets[hashCode].prepend(key, value);
      this.growBuckets();
      return;
    }

    if (this.buckets[hashCode].contains(key)) {
      const index = this.buckets[hashCode].find(key);
      const node = this.buckets[hashCode].at(index);
      node.value = value;
      this.growBuckets();
      return;
    } else {
      this.buckets[hashCode].prepend(key, value);
      this.growBuckets();
    }
  }

  get(key) {
    const hashCode = this.hash(key);

    if (!this.buckets[hashCode]) {
      return null;
    }

    if (this.buckets[hashCode].size === 1) {
      if (this.buckets[hashCode].head.key === key) {
        return this.buckets[hashCode].head.value;
      }
      return null;
    }

    if (this.buckets[hashCode].contains(key)) {
      const index = this.buckets[hashCode].find(key);
      const node = this.buckets[hashCode].at(index);
      return node.value;
    } else {
      return null;
    }
  }

  has(key) {
    const hashCode = this.hash(key);

    if (!this.buckets[hashCode]) {
      return false;
    }

    if (this.buckets[hashCode].size === 1) {
      if (this.buckets[hashCode].head.key === key) {
        return true;
      }
      return false;
    }

    if (this.buckets[hashCode].contains(key)) {
      return true;
    } else {
      return false;
    }
  }

  remove(key) {
    if (!this.has(key)) {
      return false;
    }

    const hashCode = this.hash(key);

    if (this.buckets[hashCode].size === 1) {
      if (this.buckets[hashCode].head.key === key) {
        this.buckets[hashCode] = null;
        return true;
      }
      return false;
    }

    if (this.buckets[hashCode].contains(key)) {
      const index = this.buckets[hashCode].find(key);
      this.buckets[hashCode].removeAt(index);
      return true;
    } else {
      return false;
    }
  }

  length() {
    if (this.buckets.length === 0) {
      return 0;
    }

    let count = 0;

    for (let i = 0; i < this.buckets.length; i++) {
      if (!this.buckets[i]) {
        count += 0;
      } else {
        count += this.buckets[i].size;
      }
    }

    return count;
  }

  clear() {
    this.buckets.length = 0;
    this.capacity = 16;
    this.buckets.length = this.capacity;
  }

  keys() {
    const arr = [];

    if (this.buckets.length === 0) {
      return arr;
    }

    for (let i = 0; i < this.buckets.length; i++) {
      if (this.buckets[i]) {
        if (this.buckets[i].size === 1) {
          arr.push(this.buckets[i].head.key);
        } else {
          let current = this.buckets[i].head;

          while (current) {
            arr.push(current.key);
            current = current.nextNode;
          }
        }
      }
    }

    return arr;
  }

  keys() {
    const arr = [];

    if (this.buckets.length === 0) {
      return arr;
    }

    for (let i = 0; i < this.buckets.length; i++) {
      if (this.buckets[i]) {
        if (this.buckets[i].size === 1) {
          arr.push(this.buckets[i].head.key);
        } else {
          let current = this.buckets[i].head;

          while (current) {
            arr.push(current.key);
            current = current.nextNode;
          }
        }
      }
    }

    return arr;
  }

  values() {
    const arr = [];

    if (this.buckets.length === 0) {
      return arr;
    }

    for (let i = 0; i < this.buckets.length; i++) {
      if (this.buckets[i]) {
        if (this.buckets[i].size === 1) {
          arr.push(this.buckets[i].head.value);
        } else {
          let current = this.buckets[i].head;

          while (current) {
            arr.push(current.value);
            current = current.nextNode;
          }
        }
      }
    }

    return arr;
  }

  entries() {
    const arr = [];

    if (this.buckets.length === 0) {
      return arr;
    }

    for (let i = 0; i < this.buckets.length; i++) {
      if (this.buckets[i]) {
        if (this.buckets[i].size === 1) {
          arr.push([this.buckets[i].head.key, this.buckets[i].head.value]);
        } else {
          let current = this.buckets[i].head;

          while (current) {
            arr.push([current.key, current.value]);
            current = current.nextNode;
          }
        }
      }
    }

    return arr;
  }

  growBuckets() {
    if (this.buckets.length * this.loadFactor < this.length()) {
      const tempArr = this.entries();
      this.buckets.length = 0;
      this.capacity = this.capacity * 2;
      this.buckets.length = this.capacity;
      tempArr.forEach((arr) => this.set(arr[0], arr[1]));
    }
  }
}

export default HashMap