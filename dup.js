
var names = ['simon', 'wax', 'zilla', 'allan', 'simon', 'allan'];

//...using a for loop method...

function duplicates(arr){
    var storeDup = []
    for(var i = 0; i < arr.length; i++ ){
        if(storeDup.indexOf(arr[i]) === -1){
            storeDup.push(arr[i]);
        }
    }
    return storeDup;
}
console.log(duplicates(names));

//...OR...(using the filter method)...

function duplicates(arr){
   var storeDup = names.filter(function(name,index, array){//...you can as well eliminate the two parameters (index & array since they are optional)
    return array.indexOf(name) == index;//...return names.indexOf(name);
   })
   return storeDup;
}
console.log(duplicates(names));

//...OR...(using arrow function in filter method...)

function duplicates(arr){
    return names.filter((name) => names.indexOf(name));
}
console.log(duplicates(names));

//...OR...(using the built in javascript object set method)...

function duplicates(arr){
    return Array.from(Set(arr));
}
console.log(duplicates(names));

//...OR....(another for loop method)...

function duplicates(arr){

    var storeDup = [];
    var b = 0;

    for(var i = 0; i < arr.length; i++){
        current = arr[i];
        for( var j = 0; j < storeDup.length; j++){
            if(current !== storeDup[j]){
                b++//...if its not in the new array increase counter
            }
        }
        if(b === storeDup.length){// if the counter increased on all values
            storeDup.push(current);// then its not in the new array yet, put it in
        }
        b = 0;//...reset counter
    }
    return storeDup;
}
console.log(duplicates(names));