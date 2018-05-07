
var names = ['simon', 'wax', 'zilla', 'allan', 'simon', 'allan'];

//...using a for loop method
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