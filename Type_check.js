function check_datatype(type) {
    if (type === null) {     // It will check the type is null or not
        console.log('Type : NULL')
        console.log('value: ' + type)
    } 
    else if(typeof type === 'boolean'){  // It will check the type is boolean or not
        console.log('Type : Boolean')
        console.log('value: '+type)
    }
    else if(typeof type === 'undefined') {  // It will check the type is undefined or not
        console.log('Type : Undefined')
    }
    else if(typeof type === 'string') {    // It will check the type is string or not
        console.log('Type : String')
        console.log('value: ' + type)
    }
    else if(typeof type === 'number' && isFinite(type)) {  // It will check the type is number or not
        console.log('Type : Number')
        console.log('value: ' + type)
    }
    else if(type && typeof type === 'object' && type.constructor === Object){  // It will check the type is object or not
        console.log('Type : Object')
        console.log('value: ')
        console.log(type)
    }
    else  if(typeof(type)==='object'&& typeof(type[0])!=='object' )        // It will check the type is array or not
    {
        console.log("array");
        type.map((x,i)=>{
            console.log(x)
        })
    }    
    else if(typeof(type)==='object'&& typeof(type[0])==='object')       // It will check the type is array of object or not
    {
        console.log("Array of object");
        type.map((x,i)=>{
            console.log(x)
        })
    }
    else
    {
        if (isNaN(type))                                            // It will check the type is NAn or not
        {
            console.log('Not a Number!');
        } 
    }
}
    check_datatype(10)        // here we are passing a number
    check_datatype("vipin")   // here we are passing a string
    check_datatype(null)      // here we are passing a null value
    B1 = true;
    check_datatype(B1)        // here we are passing a boolean type
    var arr=[3,5,12]
    check_datatype(Math.max(arr))   // here we are passing an array
    check_datatype(arr)             // here we are passing an array
    var b=[{'a':1},{'b':2}]         
    check_datatype(b)              // here we are passing an array of objects
    check_datatype({'a':1})        // here we are passing an object
    