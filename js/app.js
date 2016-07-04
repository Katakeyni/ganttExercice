var annee = 2016;
var nMonth = 12;
months = [
	{
		position: 1,
		label: "Janvier",
		nDays: 0
	},
	{
		position: 2,
		label: "Février",
		nDays: 0
	},
	{
		position: 3,
		label: "Mars",
		nDays: 0
	},
	{
		position: 4,
		label: "Avril",
		nDays: 0
	},
	{
		position: 5,
		label: "Mai",
		nDays: 0
	},
	{
		position: 6,
		label: "Juin",
		nDays: 0
	},
	{
		position: 7,
		label: "Juillet",
		nDays: 0
	},
	{
		position: 8,
		label: "Aout",
		nDays: 0
	},
	{
		position: 9,
		label: "Septembre",
		nDays: 0
	},
	{
		position: 10,
		label: "Octobre",
		nDays: 0
	},
	{
		position: 11,
		label: "Novembre",
		nDays: 0
	},
	{
		position: 12,
		label: "Decembre",
		nDays: 0
	}
];
var month = "1 Janv";
var end_annee = annee+1;
var start_string = month+" "+annee
var startDate = new Date(start_string);
var endDate = new Date(start_string);
endDate.setFullYear(end_annee);

for (var i = Things.length - 1; i >= 0; i--) {
	Things[i]
}
console.log(startDate);
console.log(endDate);

var diff = Math.abs(endDate.getTime() - startDate.getTime());
var nDays = Math.ceil(diff / (3600*1000*24));
