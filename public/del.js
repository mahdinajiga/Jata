/*
delete request page js
*/


/*
sending delete request to server

INPUTS:
add: Faculty address
inx: Record indexed file name

OUTPUT:
POST request to __dirname/delb
POSTData:
faculty address
record indexed file name
record deleting password
*/
async function SendDel(add, inx) 
{
	var DataTS = "BD=" + JSON.stringify({index:inx
							,addr:add
							,sps:document.getElementById("Spass").value});
	var xp = new XMLHttpRequest();	
	xp.onreadystatechange = function() 
	{
		if (this.readyState == 4 && this.status == 200) 
		{
			document.getElementById("msg").innerHTML = this.responseText;
		}
	};
	document.getElementById("msg").innerHTML = "Sending Delete request<br>Please wait...";
	xp.open("POST", "/delb");
	xp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	xp.send(DataTS);
}




/*
Sending regenerate new password
*/
async function RegPsB(add, inx) 
{
	var DataTS = "BDa=" + JSON.stringify({index:inx
							,addr:add
							,sps:document.getElementById("Spass").value});
	var xp = new XMLHttpRequest();	
	xp.onreadystatechange = function() 
	{
		if (this.readyState == 4 && this.status == 200) 
		{
			document.getElementById("msg2").innerHTML = this.responseText;
		}
	};
	xp.open("POST", "/SRP");
	xp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	xp.send(DataTS);
}