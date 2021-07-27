// 1st task -------------------------------------------------------------------------------

function Employee(mName, mAge, mDepartment) {
    this._name = mName;
    this.age = mAge;
    this.department = mDepartment;
    var salary;

    this.setSalay = function (amount) {
        salary = amount;
    }

    this.getSalary = function () {
        return salary;
    }

    this.toString = function () {
        console.log(this._name + ' ' + this.age + ' ' + this.department + ' ' + this.salary);
    }

}

// 2ed task ------------------------------------------------------------------------------
var numberOfEmployees = prompt('Enter a number');
console.log(numberOfEmployees);
var arrOfEmployees = [];
for (var index = 0; index < numberOfEmployees; index++) {
    arrOfEmployees[index] = new Employee('omar', 23, 'CS');
}

for (var index = 0; index < numberOfEmployees; index++) {
    var myInput = prompt('enter employee details');
    var splittedReadyArray = divideInputByComma(myInput);
    arrOfEmployees[index] = new Employee(splittedReadyArray[0], splittedReadyArray[1], splittedReadyArray[2]);
    arrOfEmployees[index].setSalay(splittedReadyArray[3]);

    console.log(arrOfEmployees[index]);
    console.log(arrOfEmployees[index].getSalary());
}

function divideInputByComma(input) {
    var splittedArray = input.split(',')
    return splittedArray;
}





var emp = new Employee('omar', 21, 'CS');
emp.setSalay(4000);
arrOfEmployees.push(emp);

var emp = new Employee('ahmed', 20, 'BIO');
emp.setSalay(2000);
arrOfEmployees.push(emp);

var emp = new Employee('hussain', 22, 'IT');
emp.setSalay(3000);
arrOfEmployees.push(emp);


console.log(arrOfEmployees);

// 3rd task ------------------------------------------------------------------------------
function sortACSByDepartment() {
    arrOfEmployees.sort(function (a, b) {
        if (a instanceof Employee && b instanceof Employee) {
            return a.department.localeCompare(b.department);
        }
    })

    console.log(arrOfEmployees);
}

function sortDECBySalary() {
    arrOfEmployees.sort(function (a, b) {
        if (a instanceof Employee && b instanceof Employee) {
            return b.getSalary() - a.getSalary();
        }
    });
    console.log(arrOfEmployees);
}

// task 4 --------------------------------------------------------------------------------- 
var filteredArray = []
function filterEmployee() {
    filteredArray = arrOfEmployees.filter(function (a) {
        return a.getSalary() > 2000;
    })
    console.log(filteredArray);
}

function getTotalAndAvrageSalary() {
    var total = 0;
    arrOfEmployees.forEach(function (num) {
        total += num.getSalary();
    })

    var avg = total / arrOfEmployees.length;

    console.log('total= ' + total + '\n' + 'avrage= ' + avg);
}
