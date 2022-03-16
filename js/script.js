// send mail function

function sendMail() {
	document.getElementById("form_response").innerHTML = "Sending...";
	let message = `Hi Admin,

You got a message from Tyzent contact field.

Sender Name : `+document.getElementById("form_name").value+
`
Sender Email/Mobile No. : `+document.getElementById("form_phone").value+
`
Message is : `+document.getElementById("form_message").value+
`

Regards:
Team Tyzent
`;
		let data1 = {
		"from":"Tyzent",
        "sendTo":"hr@tyzent.com",
		"subject":"Message from Tyzent website",//create body Email thisForm["name"].value  thisForm["name"].value
		"messageBody":message,
		"carbonCopy":"NA"
		};
		
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
			 if (this.readyState == 4 && this.status == 200) {
				 //alert(this.responseText);
				 document.getElementById("form_response").innerHTML = "Message Sent";
				 document.getElementById("form_response").style.color = "green";
				 document.getElementById("form_name").value = "";
				document.getElementById("form_phone").value = "";
				document.getElementById("form_message").value = "";
			 }
			 else if(this.readyState == 4)
			 {
				document.getElementById("form_response").innerHTML = "Message Sent Failed"
				document.getElementById("form_response").style.color = "red";
			 }
		};
		
		xhttp.open("POST", "https://maths.host/api/util/email/send-mail", true);
		xhttp.setRequestHeader("Content-type", "application/json");
		xhttp.send(JSON.stringify(data1));	
	}
