var annee = 2016;
var month = "1 Janv";
var end_annee = annee+1;
var start_string = month+" "+annee
var startDate = new Date(start_string);
var endDate = new Date(start_string);
endDate.setFullYear(end_annee);

console.log(startDate);
console.log(endDate);

var diff = endDate.getTime() - startDate.getTime();
console.log(diff);