import LinkedList from "./LinkedList.js";

let list = new LinkedList();

// tests on an empty list
console.log(list.size());
console.log(list.headNode());
console.log(list.tailNode());
console.log(list.at(0));
console.log(list.at(1));
console.log(list.pop());
console.log(list.contains("2"));
console.log(list.find("2"));
list.instertAt("2", 5)
list.instertAt("34", 0)
list.removeAt(2)
list.removeAt(0)
console.log(list.toString());

// fill the list
list.append("1");
list.append("2");
list.append("3");
list.append("4");
list.append("5");

// tests on valid list

console.log(list.size());
console.log(list.headNode());
console.log(list.tailNode());
console.log(list.at(2));
console.log(list.at(10));
console.log(list.pop());
console.log(list.contains("2"));
console.log(list.contains("34"));
console.log(list.find("2"));
console.log(list.find("34"));
list.instertAt("34", 3);
list.removeAt(3)
console.log(list.toString());
