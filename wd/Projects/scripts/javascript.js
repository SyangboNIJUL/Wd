/*validation for the contact form*/
							
								 
								function validation(){
									var user = document.getElementById('user').value; 

									var password = document.getElementById('pass').value; 

									var mobilenumber = document.getElementById('MobileNumber').value; 

									var emails = document.getElementById('emails').value; 



								if(user ==""){
										document.getElementById('username').innerHTML ="***Please fill the username field";
										return false;
									}
									

									if((user.length <2)||  (user.length >20)){
										document.getElementById('username').innerHTML ="***username length must be between 2 and 20";
										return false;

									}
									if(!isNaN(user)){
										document.getElementById('username').innerHTML ="***only characters are allowed";
										return false;
									}





								if(password ==""){
										document.getElementById('Passwords').innerHTML ="***Please fill the password field";
										return false;
									}
									if((password.length <5)||  (password.length >10)){
										document.getElementById('Passwords').innerHTML ="***Password length must be between 2 and 10";
										return false;
									}





								if(mobilenumber ==""){
										document.getElementById('mobileno').innerHTML ="***Please fill the Mobile Number field";
										return false;
									}
									if(isNaN(mobilenumber)){
										document.getElementById('mobileno').innerHTML ="***user must enter the digits only";
										return false;
									}

									if( mobilenumber.length!=10){
										document.getElementById('mobileno').innerHTML ="***Mobile number must contain 10 digits";
										return false;
									}

									

									if(emails == ""){
										document.getElementById('emailids').innerHTML =" ** Please fill the email ids field";
										return false;
									}
									if(emails.indexOf('@') <= 0 ){
										document.getElementById('emailids').innerHTML =" ** @ Invalid Position";
										return false;
									}

									if((emails.charAt(emails.length-4)!='.') && (emails.charAt(emails.length-3)!='.')){
										document.getElementById('emailids').innerHTML =" ** . Invalid Position";
										return false;
									}

									if(user!="" && password!="" && mobilenumber!="" && emails!=""){
										alert("Your form has been submitted");
									}
														
	


								}
/*validation ends here*/
						