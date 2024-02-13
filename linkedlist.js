// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

// class LinkedList {
//   constructor() {
//     this.head = null;
//     this.size = 0;
//   }

//   append(val) {
//     let node = new Node(val);
//     if (this.head === null) this.head = node;
//     else {
//       let current = this.head;
//       while (current.next) {
//         current = current.next;
//       }
//       current.next = node;
//     }

//     this.size++;
//   }

//   insertAt(element, position) {
//     const node = new Node(element);

//     if (position < 0 || position > this.size) {
//       console.log("Enter a valid position");
//       return;
//     }

//     if (position === 0) {
//       node.next = this.head;
//       this.head = node;
//     } else {
//       let current = this.head;
//       let prev;
//       let index = 0;

//       while (index < position) {
//         index++;
//         prev = current;
//         current = current.next;
//       }

//       node.next = current;
//       prev.next = node;
//     }
//     this.size++;
//   }

//   removeAt(position) {
//     if (position < 0 || position > this.size) {
//       console.log("enter a valid index");
//       return;
//     }

//     let index = 0;
//     let curr = this.head;
//     let prev = null;

//     if (position === 0) {
//       prev = this.head;
//       this.head = prev.next;

//       return prev.val;
//     } else {
//       while (index < position) {
//         index++;
//         prev = curr;
//         curr = curr.next;
//       }
//       this.size--;
//       prev.next = curr.next;

//       return curr.val;
//     }
//   }
// }

// let ll = new LinkedList();
// ll.append(19);
// ll.append(29);
// ll.append(39);
// ll.insertAt(300, 2);
// ll.insertAt(301, 4);
// console.log(JSON.stringify(ll));
// console.log(ll.removeAt(0), JSON.stringify(ll));

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  // ... append method and other methods as explained in the previous answer ...

  findKthFromEnd(k) {
    if (k <= 0 || !this.head) {
      return null; // Invalid input or empty list
    }

    let first = this.head;
    let second = this.head;

    // Move the first pointer K nodes ahead
    for (let i = 0; i < k; i++) {
      if (first.next) {
        first = first.next;
      } else {
        return null; // K is greater than the number of nodes
      }
    }

    // Move both pointers simultaneously until first reaches the end
    while (first.next) {
      first = first.next;
      second = second.next;
    }

    return second.data; // Return the data of the Kth node from the end
  }
}

// Create a linked list and add elements
const myList = new LinkedList();
myList.append(1);
myList.append(2);
myList.append(3);
myList.append(4);
myList.append(5);

console.log("Original linked list:");
myList.print();

const k = 2;
const kthNode = myList.findKthFromEnd(k);

if (kthNode !== null) {
  console.log(`\n${k}nd node from the end: ${kthNode}`);
} else {
  console.log(`\nThere is no ${k}nd node from the end.`);
}
