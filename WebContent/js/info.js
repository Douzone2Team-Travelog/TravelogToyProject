const searchButton = document.getElementById('searchButton')
let resultTable = document.getElementById('resultTable')
const mapCheck = document.getElementById('mapCheck')
const searchData = document.getElementsByClassName("searchData");

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
	console.log("eeeeeeeeeeeeeeeeeeeee")
	const inputName = document.getElementById("name").value.trim();
	const inputId = document.getElementById("idd").value.trim();
	const inputNumber = document.getElementById("number").value.trim();
	let memberInfo = document.getElementById("memberInfoTableBody").getElementsByTagName("tr");
	
	for(let i=0; i<memberInfo.length; i++){
		let member = memberInfo[i].getElementsByTagName("td");
		let name_check = true;
		let id_check = true;
		let number_check = true;
		
		let name = member[0].firstChild.data;
		let id = member[1].firstChild.data;
		let pwd = member[2].firstChild.data;
		let number = member[3].firstChild.data;

		if(inputName){
			if(name !== inputName){
				name_check = false;
			}
		}
		if(inputId){
			if(id !== inputId){
				id_check = false;
			}
		}
		if(inputNumber){
			if(number !== inputNumber){
				number_check = false;
			}
		}
		if(name_check && id_check && number_check){
			resultTable.appendChild(memberInfo[i])
		}
	}
	console.log("resultTable.childElementCount = "+resultTable.childElementCount)
	console.log("resultTable.childNodes = "+resultTable.childNodes)
	console.log(resultTable.childNodes)
	console.log("resultTable.childNodes.length = "+resultTable.childNodes.length)
	if(resultTable.childElementCount == 0){
		alert("해당 회원 정보가 없습니다 다시 입력해주세요")
	}
	console.log(document.getElementById("memberInfoTableBody").childNodes)
})

/*
mapCheck.addEventListener('click', (e)=>{
	
})
*/