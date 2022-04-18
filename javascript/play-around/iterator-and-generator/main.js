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

for (const obj of company.getEmployeeNameOnly()) {
	console.log(obj);
}

for (const obj of company.getFullEmployeeInfo()) {
	console.log(obj);
}
