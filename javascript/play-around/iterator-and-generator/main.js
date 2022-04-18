// Iterator
const person = {
	name: 'James',
	age: 30,
	friends: ['Mathew', 'Patric', 'Johny'],
	curIndex: 0,
	next() {
		if (this.curIndex < this.friends.length) {
			const result = { value: this.friends[this.curIndex], done: false };
			this.curIndex++;
			return result;
		}
		return { value: '', done: true };
	},
};
person.friends.push('Ted');

let iteratorResult = person.next();
while (!iteratorResult.done) {
	// console.log(iteratorResult.value);
	iteratorResult = person.next();
}

// Generator
const company = {
	employees: [
		{
			name: 'Nguyen Van A',
			age: 32,
		},
		{
			name: 'Tran Van B',
			age: 22,
		},
		{
			name: 'Phan Van C',
			age: 44,
		},
	],
	getFullEmployeeInfo: function* () {
		let currentEmployeeIdx = 0;
		while (currentEmployeeIdx < this.employees.length) {
			const employee = this.employees[currentEmployeeIdx];
			yield `Nhân viên ${currentEmployeeIdx + 1}: ${employee.name}, ${
				employee.age
			} tuổi.`;
			currentEmployeeIdx++;
		}
	},
	getEmployeeNameOnly: function* () {
		let currentEmployeeIdx = 0;
		while (currentEmployeeIdx < this.employees.length) {
			const employee = this.employees[currentEmployeeIdx];
			yield employee.name;
			currentEmployeeIdx++;
		}
	},
};

// console.log('company', company);

// const it = company.getFullEmployeeInfo();
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());

// const itNameOnly = company.getEmployeeNameOnly()

// for (const obj of company.getEmployeeNameOnly()) {
// 	console.log(obj);
// }

// for (const obj of company.getFullEmployeeInfo()) {
// 	console.log(obj);
// }

class Sequence {
	constructor(start = 0, end = Infinity, interval = 1) {
		this.start = start;
		this.end = end;
		this.interval = interval;
	}

	[Symbol.iterator]() {
		let count = 0;
		let nextIndex = this.start;
		return {
			next: () => {
				if (nextIndex <= this.end) {
					let result = { value: nextIndex, done: false };
					nextIndex += this.interval;
					count++;
					return result;
				}
				return { value: count, done: true };
			},
			return: () => {
				console.log('cleaning up...');
				return { value: undefined, done: true };
			},
		};
	}
}

const seq = new Sequence(1, 10, 2);
console.log('seq', seq);
// for (const num of seq) {
// 	if (num < 7) {
// 		console.log('num', num);
// 		break;
// 	}
// }

// console.log(seq.next());

class Sequence2 {
	constructor(start = 0, end = Infinity, interval = 1) {
		this.start = start;
		this.end = end;
		this.interval = interval;
	}
	*[Symbol.iterator]() {
		let nextIndex = this.start;
		while (nextIndex <= this.end) {
			const result = nextIndex;
			nextIndex += this.interval;
			yield result;
		}
	}
	*sayHello() {
		let nextIndex = this.start;
		while (nextIndex <= this.end) {
			yield `Hello ${nextIndex}`;
			nextIndex++;
		}
	}
}

const seq2 = new Sequence2(1, 10, 2);
console.log('seq2', seq2);
for (const num of seq2) {
	console.log('num.2', num);
}
for (const obj of seq2.sayHello()) {
	console.log('obj', obj);
}
