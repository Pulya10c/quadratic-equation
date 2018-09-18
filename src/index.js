module.exports = function solveEquation(equation) {
  // your implementation
var TestStr = equation;

if (TestStr[0] == "-") {
  var A =  - TestStr.substring(1, TestStr.indexOf(" * x^2 "));
} 
else {var A = + TestStr.substring(0, TestStr.indexOf(" * x^2 "));}

if (TestStr.substr(TestStr.indexOf(" * x^2 ")+7, 1) == "-") {
  var B =  - TestStr.substring(TestStr.indexOf("x^2 ")+5, TestStr.indexOf(" * x "));
} 
else {var B = + TestStr.substring(TestStr.indexOf("x^2 ")+5, TestStr.indexOf(" * x ")); }

if (TestStr.substr(TestStr.indexOf("x ")+2, 1) == "-") {
  var C =  - TestStr.substring(TestStr.indexOf("x ")+4);
} 
else {var C = + TestStr.substring(TestStr.indexOf("x ")+4);}

A = Number(A);
B = Number(B);
C = Number(C);

var X = Math.round((- B - Math.sqrt(B*B-4*A*C))/(2*A));
var X1 = Math.round((- B + Math.sqrt(B*B-4*A*C))/(2*A));

var MyAns = [];
  if (X>X1) {
  MyAns[0] = X1;
  MyAns[1] = X;
 } 
  else {
    MyAns[1] = X1;
    MyAns[0] = X;
      }
 return MyAns;
}
