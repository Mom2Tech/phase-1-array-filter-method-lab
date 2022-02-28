// * `findMatching`- This function takes an array of drivers' names and a `string`
//   as arguments, and returns the matching list of drivers. The function should be
//   case insensitive.

//Two parameters (driversName,driverName That We Want To Find In The Arrray)

//['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
// Bobby 

//It should return array of matched list of drives
//Parameters: ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'] , Name: Bobby
//Return: 

//Filter returns an array/list/collection etc...

function findMatching(drivers,driverName){
   let matched = drivers.filter(function(name) {
        return driverName.toLowerCase() == name.toLowerCase();
    })
    return matched;
}
    


// * `fuzzyMatch` - This function takes an array of drivers' names and a `string`
//   as arguments for querying the array, and returns all drivers whose names begin
//   with the provided letters.
function fuzzyMatch(drivers,driverNameStartsWith) {
    let matched = drivers.filter(function(name) {
        let driverName=name.startsWith(driverNameStartsWith)
        if(driverName==true){
            return name.startsWith(driverNameStartsWith);
        }else{
            return "";
        }
     })
    return matched;
}
// * `matchName` - This function takes an array of `driver` objects and a `string`
//   as arguments. 
//   The function should return each element whose `name` property matches the
//   provided `string` argument.

function matchName(array, string) {
    const printHometown = array.filter(element => element.driver === string);
    return printHometown;
}