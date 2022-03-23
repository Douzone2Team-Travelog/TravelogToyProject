const searchButton = document.getElementById('searchButton')
const resultTable = document.getElementById('resultTable')
const mapCheck = document.getElementById('mapCheck')

searchButton.addEventListener('click', ()=>{
	console.log("eeeeeeeeeeeeeeeeeeeee")
	const inputId = document.getElementById("id").value;
	const inputName = document.getElementById("name").value;
	const inputNumber = document.getElementById("number").value;
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
			document.getElementById('resultTable').appendChild(memberInfo[i])
		}
	}
})

mapCheck.addEventListener('click', (e)=>{
	
})