const searchButton = document.getElementById('searchButton')
let resultTable = document.getElementById('resultTable')
const mapCheck = document.getElementById('mapCheck')
const searchData = document.getElementsByClassName("searchData");
const memberInfoTableBody = document.getElementById("memberInfoTableBody")

for(let i=0; i<searchData.length; i++){
	searchData[i].addEventListener('keyup', (e)=>{
		if(!e.target.value){
			searchButton.disabled = true;
		}else{
			searchButton.disabled = false;
		}
	})
}

searchButton.addEventListener('click', ()=>{
	let inputName = document.getElementById("name").value.trim();
	let inputId = document.getElementById("idd").value.trim();
	let inputNumber = document.getElementById("number").value.trim();
	let memberInfo = memberInfoTableBody.getElementsByTagName("tr");

	for(let i=0; i<memberInfo.length; i++){
		let member = memberInfo[i].getElementsByTagName("td");
		let name_check = false;
		let id_check = false;
		let number_check = false;
		
		let name = member[0].firstChild.data;
		let id = member[1].firstChild.data;
		let pwd = member[2].firstChild.data;
		let number = member[3].firstChild.data;

		if(inputName){
			if(name == inputName){
				name_check = true;
			}
		}
		if(inputId){
			if(id == inputId){
				id_check = true;
			}
		}
		if(inputNumber){
			if(number == inputNumber){
				number_check = true;
			}
		}
		if(name_check || id_check || number_check){
			resultTable.appendChild(memberInfo[i])
		}
	}

	if(resultTable.childElementCount == 0){
		searchButton.disabled = true;
		document.getElementById("name").value="";
		document.getElementById("idd").value="";
		document.getElementById("number").value="";
		alert("해당 회원 정보가 없습니다 다시 입력해주세요")
	}

})