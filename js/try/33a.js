function flatten(obj, k) {
    Object.keys(obj).forEach(key => {

        if (myType(obj[key]) == "object") {
           flatten(obj[key], `${k}.${key}` );
        } else if(myType(obj[key])=="array") {
           obj[key].forEach()
        }
    })
}

function arrayFlatten(arr, key) {
  
}

function myType(obj) {
    return Object.prototype.toString.call(obj).slice(8, 1).toLowerCase()
}