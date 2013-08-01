var library = function(){

/* String 
Does a string follow a 123-456-7890 pattern like a phone number?*/

var str = function(val){
    if (isNaN(val)) {
       return true
       } else {
       return false
       };
    
};// end of str
    
/*Does a string follow an aaa@bbb.ccc pattern like an email address?*/

var em = function (val){
    var add = val.length;
    for(var i = 0; i <= add; i++){
    
    if (val.substring(i, i+1) === "@"){
        return i+1;
        };
    };
     
    
};
/*Is the string a URL? (Does it start with http: or https:?)*/

var http = function(val) {
    var points = [];
    for(var i = 0; i < val.length; i++){
        if(val[i] == "@") {
           for(var j = i; j < (val.length + i); j++){
               points.push(val[j]);
           }
    }
}
if (points.length === 0){
      console.log("This does not start with an http or https");
    return i+1;
    }
};//end of http

/*Title-case a string (split into words, then uppercase the first letter of each word)*/
// make up credit for loop project 2 and mutator project 3
var string = function (val){
    for(var i = 0; val.length; i++){
    if (val.substring(i, i+1) === " "){
        return i;
        var j = function ChangeToUpper(){
              key = window.event.which || window.event.keyCode
                if ((key > 0x60) && (key < 0x7B))
                  window.event.keyCode = key-0x20;
                   return j;
                   };
         };
     }; 

};

    
    




     return{
       "str":str,
       "em":em,
       "http":http,
       "string":string,
       "j":j
     };
 
 
 }// end of Library function
 
// main code 
var newlib = new library();
 console.log ("is this a number? " + newlib.str(7));
 console.log(" Does the email contain " + newlib.em("aaa@bbb.ccc"));
 console.log("is this a url " + newlib.http("https://xda-developers.com"));
 console.log("I have split a string into two words " + newlib.string + "I have capitalized the first letter of each word " + newlib.j("title case"));