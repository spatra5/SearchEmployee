function Add(x,y)
{
	return (x+y);
}

function Square(x)
{
	return (x*x);
}

function Increment(value)
{
    value += 1;
    return value;
}


function Employee(empid, empname)
{
    this.EmpId = empid;
    this.EmpName = empname;
}


var employees = [
    new Employee(1, 'A'),
    new Employee(2, 'B'),
    new Employee(3, 'C'),
    new Employee(4, 'D'),
    new Employee(5, 'E')
];


//1. it should return the correct Employee object for an empid passed as an arg.
//2. it should return null if empid does not exist.
//3. it should return undefined if no empid is passed.

//TODO
//4. it should return an Employee object for an empid passed.
//5. it should return only a single Employee object for an empid passed.
function SearchEmployee(empid)
{
    if (empid == undefined)
    {
        return undefined;
    }

    var result = null;
    for (var i = 0; i < employees.length; i++)
    {
        if (empid == employees[i].EmpId)
        {
            result = employees[i];
            break;
        }
    }
    return result;
}



//var result = Search(3)     -   will return the 3rd Employee object from the array
//var result = Search();    -   will return 'undefined'
//var result = Search(1000);    -   will return 'null'
