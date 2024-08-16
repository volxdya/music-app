interface IFriends {
    name: string;
    age: number;
}

const friends: IFriends[] = [
    { name: 'John', age: 22 },
    { name: 'Peter', age: 23 },
    { name: 'Mark', age: 24 },
    { name: 'Maria', age: 22 },
    { name: 'Monica', age: 21 },
    { name: 'Martha', age: 19 },
]

function mappingArray(arr: IFriends[]): string[] {
    return arr.map((item) => item.name);
}

function secondMapping(arr: IFriends[]): string[] {
    return Array.from(arr, ({name}) => name);
}

console.log(mappingArray(friends));
console.log(secondMapping(friends))


// ["John", "Peter", "Mark", "Maria", "Monica", "Martha"]