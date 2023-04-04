let arrData=[];

if(localStorage.arrData != null){
    arrData=JSON.parse(localStorage.arrData);
  }
 
let userName;
let userPassword;
let userEmail;
let userNumber;

let DataCollected=document.getElementById("myForm");

DataCollected.addEventListener("submit",function(event){
    event.preventDefault();
    
      userName=event.target.name.value;
      userPassword=event.target.password.value;
      userEmail=event.target.email.value;
      userNumber=event.target.phone.value;



      if( validateName() && validateNumber() &&  validateEmail() && validateNumber()){
		arrData.push(userName);
		localStorage.setItem('arrData',JSON.stringify(arrData) );
		
  }

} ); 


function validateName() {
	let Name = userName;
	if (Name == "") {
	  alert("Name must be filled out");
	  return false;

	}else if(Name.includes(" ")){
		alert("Name must be filled with no spaces");
		return false;	
	} else if(arrData.includes(userName)){

		alert("Username already exists. welcome "+userName);
		return false;
	}
	
return true;

  }

  function validateEmail(){
    let iChars = "!#$%^&*()+=-[]\\\';,/{}|\":<>?";
    let Email = userEmail.toLowerCase();
     if(!Email.includes("@")  || !Email.includes(".com") ){
        alert("Please enter a valid Email EX.. majdi@gamil.com");
        return false;
    }
    for (let i = 0; i < Email.length; i++) {
        if (iChars.indexOf(Email.charAt(i)) != -1) {
        alert ("The Email has special characters. \nThese are not allowed.\n");
        return false;
            }
        }
        return true;
    }   


    function validateNumber(){
        let iChars = "!#$%^&*()+=-[]\\\';,/{}|\":<>?@.";
        let Number = userNumber;

         if( !(Number.includes("07"))    || !(Number.length ==10)  ){
            alert("Please enter a valid number ex. 0799855850");
            return false;
        }
        
        for (let i = 0; i < Number.length; i++) {
            if (iChars.indexOf(Number.charAt(i)) != -1) {
            alert ("The Number has special characters. \nThese are not allowed.\n");
            return false;
                }
            }
    return true;
        }   

        function validatePassword(){
          
            let password = userPassword;
            var passwordRegex = ("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
            if (!passwordRegex.test(password)) {
                alert ("The password mustcontain at least 8characters , 1number, 1 uppercase letter, and 1 special character");
                return false;
                    }
            
                return true;
            }   