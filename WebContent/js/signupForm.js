const createAccountForm = document.querySelector("#createAccount");
const inputName = document.getElementById("signupUsername");
const errorMessage = document.getElementById("msg");
const esText = document.querySelectorAll(".input");

function setFormMessage(formElement, type, message) {
	const messageElement = formElement.querySelector(".message");
		
	messageElement.textContent = message;
	messageElement.classList.remove("message_success", "message_error");
	messageElement.classList.add(`message_${type}`);
}

function checkInputValue(inputList){
	let checkValue = true;
	inputList.forEach((input) => {
		if(input.value === ''){
			checkValue = false;
		}
	})
	return checkValue;
}

createAccountForm.addEventListener("submit", e => {
	e.preventDefault();
	
	if(inputName.value.length < 3 || inputName.value.length > 10){
		setFormMessage(createAccountForm, "error", "Username must be at least 3 and maximum 10 characters");
	}
	
	if(inputName.value.length >= 3 && inputName.value.length <= 10 && checkInputValue(esText)){
		location.replace('../index.html');
	}
});

inputName.onfocus = function(){
	errorMessage.innerHTML = "";
	inputName.value = null;
}