describe("Add() function",function()
{
    //beforeEach(function ()
    //{
    //    console.log("beforeEach() executed...");
    //});

    //afterEach(function ()
    //{
    //    console.log("afterEach() executed...");
    //});

    
    //beforeAll(function () {
    //    console.log("beforeAll() executed...");
    //});

    //afterAll(function () {
    //    console.log("afterAll() executed...");
    //});

	//it("should return the addition of 10 and 20",function()
	//{
	//	var ans = Add(10,20);
	//	expect(ans).toEqual(30);
	//});

	//it("should return undefined if any one of the  arguments is not specified", function ()
	//{
	//    var ans = Add(10);
	//    expect(ans).toEqual(NaN);
    //});

    //var counter = 0;

    //beforeEach(function ()
    //{
    //    counter = Increment(counter);
    //});
    
    //it("should increment by one. result must be 1", function ()
    //{
    //    expect(counter).toEqual(1);
    //});

    //it("should increment by one. result must be 2", function ()
    //{
    //    expect(counter).toEqual(2);
    //});

    //it("should increment by one. result must be 3", function ()
    //{
    //    expect(counter).toEqual(3);
    //});


    it("should return the correct Employee object when an employee id is passed.", function ()
    {
        var myemp = employees[2];

        var result;
        result = SearchEmployee(3);
        expect(myemp).toEqual(result);
    });

    it("should return a null when an incorrect employee id is passed.", function ()
    {
        var result = SearchEmployee(1000);
        expect(result).toBeNull();
    });

    it("should return undefined when no employee id is passed.", function ()
    {
        var result = SearchEmployee();
        //expect(result).not.toBeDefined();
        expect(result).toBeUndefined();
    });

    it("should return an Employee object when a correct employee id is passed.", function ()
    {
        var result = SearchEmployee(3);
        //expect(result).toEqual(jasmine.any(Number)); 
        expect(result).toEqual(jasmine.any(Employee));
    });
    
    it("should return a single Employee object when a correct employee id is passed.", function ()
    {
        var result = SearchEmployee(3);
        expect(result).not.toEqual(jasmine.any(Array));
    });
});