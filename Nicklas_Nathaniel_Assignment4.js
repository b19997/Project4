/* SDI 1307 Nathaniel Nicklas*/ 


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
    for(var i = (0, 4); i < val.length; i++){
        if(val[i] === "https:") {
            return ("This does start with http or https")
    }else {
}

      return("This does not start with an http or https"); i+1;
    }

};//end of http

/*Title-case a string (split into words, then uppercase the first
letter of each word)*/
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

};// end of string






 /* Number
Format a number to use a specific number of decimal places, as for 
money: 2.1 → 2.10*/
var specific = function(number){
	  var i = parseFloat(number);
	      if(isNaN(i)) { i = 0.00; 
	      }
	        var minus = '';
	          if(i < 0) { minus = '-'; 
	          }
	             i = Math.abs(i);
	             i = parseInt((i + .005) * 100);
	             i = i / 100;
	             s = new String(i);
	               if(s.indexOf('.') < 0) { s += '.00'; 
	               }
	               if(s.indexOf('.') == (s.length - 2)) { s += '0'; 
	               }
	                s = minus + s;
	                  return s;
}; // end of specific

/*Given a string version of a number such as "42", return the value as an actual Number, such as 42.*/

var numeric = function(number){
    if (number = "42")
       return 42
} 
    







    
    




     return{
       "str":str,
       "em":em,
       "http":http,
       "string":string,
       "specific":specific,
       "numeric":numeric
  
     };
 
 
 }// end of Library function
 
// main code 
var newlib = new library();
console.log ("is this a number? " + newlib.str(7));
console.log(" There is only one @ symbol and it's index is  " + newlib.em("aaa@bbb.ccc"));
console.log("is this a url? " + newlib.http("xda-developers.com"));
console.log("I have split a string into two words " + newlib.string("This string"));
console.log(newlib.specific(2));
console.log(newlib.numeric("42"));
