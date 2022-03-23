const loginForm = document.querySelector("#login");
const inputName = document.getElementById("loginUsername");
const inputPwd = document.getElementById("loginUserpwd");
const errorMessage = document.getElementById("msg");

function setFormMessage(formElement, type, message) {
	const messageElement = formElement.querySelector(".message");
		
	messageElement.textContent = message;
	messageElement.classList.remove("message_success", "message_error");
	messageElement.classList.add(`message_${type}`);
}

loginForm.addEventListener("submit", e => {
	e.preventDefault();
	
	// email이나 password창이 비어있으면 error메세지를 출력한다.
	if(inputName.value == "" || inputPwd.value == ""){
		setFormMessage(loginForm, "error", "Invalid username/pw combination");
	}
	
	// 값을 다 넣었으면 페이지 이동
	if(inputName.value && inputPwd.value){
		location.replace('../index.html');
	}
});

// 이메일 입력창에 마우스 클릭하면 오류 메세지와 이메일 비밀번호 초기화
inputName.onfocus = function(){
	errorMessage.innerHTML = "";
	inputName.value = null;
}

inputPwd.onfocus = function(){
	inputPwd.value = null;
}

