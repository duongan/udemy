const newMap = new Map();
newMap.set(1, 'mot');
newMap.set('hai', 2);
newMap.set(true, 'boolean');
newMap.set(undefined, null);

// using for...of to traverse all keys of map object
for (const key of newMap.keys()) {
    console.log('for...of => keys', key);
}

// using for...of to traverse all entries
for (const entry of newMap.entries()) {
    const [key, value] = entry;
    console.log('for...of => entries', key, value);
}

// using for...of to traverse all values
for (const value of newMap.values()) {
    console.log('for...of => values', value);
}

// Map.prototype.has()
console.log(newMap.has(1));
console.log(newMap.has(true));
console.log(newMap.has(undefined));
console.log(newMap.has('hai'));
console.log(newMap.has(3));
