function createSet(iterable) {
    return new Set(iterable);
}

// Array
const anTestingArr = [
    1,
    'a',
    4,
    // 'a',
    // 1,
    // true,
    // undefined,
    // NaN,
    // NaN,
    // Infinity,
    // Infinity,
];
const testingSet = new Set(anTestingArr);
// console.log(testingSet);
// console.log(testingSet.size);
testingSet.add('12');
// testingSet.delete(4);
// console.log(testingSet.values());
// for (const val of testingSet.values()) {
// 	console.log(val);
// }
// console.log(testingSet.entries());

// Iterable Object
const iterableObj = {
    *[Symbol.iterator]() {
        let i = 0;
        while (i < 10) {
            yield i;
            i++;
        }
    },
};
const testingSet2 = createSet(iterableObj);
// testingSet2.clear();
// console.log('testingSet2', testingSet2.entries());
// testingSet2.forEach((item) => console.log(item));
