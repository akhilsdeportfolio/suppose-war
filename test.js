function removeDuplicates(arr) {
  // TODO: Implement the 'removeDuplicates' function

  let map = {};
  let ll = new LinkedList();
  for (let i = 0; i < arr.length; i++) {
    if (map[arr[i]] === undefined) {
      map[arr[i]] = true;
      ll.append(arr[i]);
    }
  }

  console.log(JSON.stringify(ll));

  return ll.head;
}

class Node {
  constructor(val) {
    this.data = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  append(val) {
    let node = new Node(val);
    if (this.head === null) this.head = node;
    else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }

    this.size++;
  }

  insertAt(element, position) {
    const node = new Node(element);

    if (position < 0 || position > this.size) {
      console.log("Enter a valid position");
      return;
    }

    if (position === 0) {
      node.next = this.head;
      this.head = node;
    } else {
      let current = this.head;
      let prev;
      let index = 0;

      while (index < position) {
        index++;
        prev = current;
        current = current.next;
      }

      node.next = current;
      prev.next = node;
    }
    this.size++;
  }

  removeAt(position) {
    if (position < 0 || position > this.size) {
      console.log("enter a valid index");
      return;
    }

    let index = 0;
    let curr = this.head;
    let prev = null;

    if (position === 0) {
      prev = this.head;
      this.head = prev.next;

      return prev.val;
    } else {
      while (index < position) {
        index++;
        prev = curr;
        curr = curr.next;
      }
      this.size--;
      prev.next = curr.next;

      return curr.val;
    }
  }
}

removeDuplicates([1, 1, 2, 3, 4, 5, 3, 2, 1]);
