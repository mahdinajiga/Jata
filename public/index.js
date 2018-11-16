


var ftr2 = 1;
var ftr3 = 1;
function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

var Faculties;
var OD = `<tr><th class="sortT" onclick="SortLess();">LessonName</th>
			<th class="sortT" onclick="SortProf();">ProffName</th>
			<th class="sortT" onclick="SortDate();">Date</th><th>More</th></tr>`;

var GAPage = 1;
var GDccIndex = 0;
var GDcc = 1;
var GIPage = 1;

function sort(tt) {
	alert(tt);
}
async function GetBLs(inx, pge, dccin, dcc) {
	if (pge > 0 && pge <= GAPage) {
		var DataTS = "BA=" + JSON.stringify({
			index: inx
			, page: pge
			, decindex: dccin
			, dec: dcc
		});
		var xp = new XMLHttpRequest();
		xp.onreadystatechange = function () {
			if (this.readyState == 4 && this.status == 200) {
				var oob = JSON.parse(this.responseText);
				document.getElementById("t01").innerHTML = "qwert";
				console.log( OD + oob.data);

				document.getElementById("t01").innerHTML = OD + oob.data;
				
				GAPage = oob.APGS;
				GIPage = oob.CPG;
				document.getElementById("PageInd").innerHTML = GIPage;
			}
		};
		xp.open("POST", "/GetB");
		xp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		xp.send(DataTS);
	}
}

async function NewwPage() 
{
	GAPage = 1;
	GIPage = 1;
	GetBLs(FacultySelect.selectedIndex,GIPage,GDccIndex,GDcc);
}

async function SortLess() 
{
	GDccIndex=2;
	GDcc = (GDcc==0) ? 1 : 0;
	GetBLs(FacultySelect.selectedIndex,GIPage,GDccIndex,GDcc);
}
async function SortProf() 
{
	GDccIndex=1;
	GDcc = (GDcc==0) ? 1 : 0;
	GetBLs(FacultySelect.selectedIndex,GIPage,GDccIndex,GDcc);
}
async function SortDate() 
{
	GDccIndex=0;
	GDcc = (GDcc==0) ? 1 : 0;
	GetBLs(FacultySelect.selectedIndex,GIPage,GDccIndex,GDcc);
}






async function SetMainReady() {
	var xl = new XMLHttpRequest();
	xl.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {
			//console.log(this.responseText);
			var gettdata = JSON.parse(this.responseText);
			Faculties = gettdata['Faculties'];
			var i;
			for (i = 0; i < Faculties.length; i++) {
				var op = document.createElement("option");
				op.text = Faculties[i];
				document.getElementById("FacultySelect").add(op);
			}
			NewwPage();
		}
	};
	xl.open("GET", '/Faculties', true);
	xl.send();


}

async function SetNBReady() {
	var i;
	for (i = 0; i < Faculties.length; i++) {
		var op = document.createElement("option");
		op.text = Faculties[i];
		document.getElementById("FacultySelectN").add(op);
	}
}















async function ShowMain() {
	var i;
	for (i = 1; i > 0; i -= .05) {
		document.getElementById("MainDiv").style.opacity = 1 - i;
		await sleep(20);
	}
	document.getElementById("Desc").innerHTML = "";
}

async function hidemain() {
	SetMainReady();
	if (ftr2 == 1) {
		ftr2 = 0;
		var i;
		for (i = 1; i > 0; i -= .05) {
			document.getElementById("Desc").style.opacity = i;
			await sleep(20);
		}
		document.getElementById("Desc").style.display = "none";
		//document.getElementById("PLogin").innerHTML = "";
		//document.getElementById("PSignin").innerHTML = "";


		ShowMain();
	}
}




async function NewBookl() {
	SetNBReady();
	if (ftr3 == 1) {
		ftr3 = 0;
		var i;
		for (i = 1; i > 0; i -= .05) {
			document.getElementById("MainDiv").style.opacity = i;
			await sleep(20);
		}
		document.getElementById("MainDiv").style.display = "none";
		document.getElementById("NewBokk").style.display = "block";
		var i;
		for (i = 1; i > 0; i -= .05) {
			document.getElementById("NewBokk").style.opacity = 1 - i;
			await sleep(20);
		}
		document.getElementById("MainDiv").innerHTML = "";

	}
}

async function SendNewB() {
	var goo = 1;
	var ErrMs = "";
	if (!(document.getElementById("Spass").value == document.getElementById("Spass2").value)) {
		goo = 0;
		ErrMs += "Password Dosen't match!!!\n";
	}
	else {
		document.getElementById("Spass").value = document.getElementById("Spass2").value;
	}

	if (document.getElementById("PhN").value == "") {
		goo = 0;
		ErrMs += "PhoneNumber field is empty!!!\n";
	}

	if (document.getElementById("Eml").value == "") {
		goo = 0;
		ErrMs += "Email field is empty!!!\n";
	}

	if (document.getElementById("Spass").value == "") {
		goo = 0;
		ErrMs += "Password field is empty!!!\n";
	}

	if (document.getElementById("LeN").value == "") {
		goo = 0;
		ErrMs += "Lesson Name field is empty!!!\n";
	}

	if (document.getElementById("ProffN").value == "") {
		goo = 0;
		ErrMs += "Proff Name field is empty!!!\n";
	}
	if (goo == 0) {
		alert(ErrMs);
	}
	else {
		var data = "NewBA=" + JSON.stringify({
			PhN: document.getElementById("PhN").value
			, Faculty: document.getElementById("FacultySelectN").selectedIndex
			, Eml: document.getElementById("Eml").value
			, Spass: document.getElementById("Spass").value
			, LeN: document.getElementById("LeN").value
			, ProffN: document.getElementById("ProffN").value
			, Desc: document.getElementById("Descr").value
		});



		var xlhttp = new XMLHttpRequest();


		xlhttp.onreadystatechange = function () {
			if (this.readyState == 4 && this.status == 200) {
				//alert(this.responseText);
				document.getElementById("msgres").innerHTML = this.responseText;
				//AnlyData(this.responseText);
			}
		};
		xlhttp.open("POST", "/NewBA");
		xlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		document.getElementById("BSubmitNewB").onclick = "";
		document.getElementById("BSubmitNewB").value = "Data sent...";
		xlhttp.send(data);
	}
	document.getElementById("msgres").innerHTML = "wait till data upload...";

}

function HashPass(Password) {
	return Password;
}
















/*
function InitT() {
	x2http.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			document.getElementById("msg").innerHTML = this.responseText;
			}
		};
		var x3http = new XMLHttpRequest();
		x3http.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200)
		 {
				//document.getElementById("msg").innerHTML = this.responseText;
				AnlyData(this.responseText);
			}
		};
		x3http.open("GET", "configure.php?c=n", true);
		x3http.send();
		var intvar = window.setInterval(GetData, 1000);
}
function AnlyData(str)
{
	var t = str.trim().split(",");
}
*/