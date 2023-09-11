//방법1
if(nameVal == "") {
	alert("이름을 입력해주세요.");
	return false;
}
if(korVal == 0) {
	alert("국어를 입력해주세요.");
	return false;
}
if(engVal == 0) {
	alert("영어를 입력해주세요.");
	return false;
}
if(mathVal == 0) {
	alert("수학를 입력해주세요.");
	return false;
}

//방법2
if(nameVal == "") {
	alert("이름을 입력해주세요.");
	return false;
}

var scoreCheck = {
	"kor" : korVal,
	"eng" : engVal,
	"math" : mathVal
}
for(var keyword in scoreCheck) {
	if(scoreCheck[keyword] == 0) {
		alert(keyword + "를 입력하세요.");
		return false;
	}
}

//방법3
if(nameVal && korVal && engVal && mathVal) {
	var student = {
		"name" : nameVal,
		"kor" : korVal,
		"eng" : engVal,
		"math" : mathVal,
		"total" : totalVal,
		"avg" : avgVal
	}
	with(student) {
		div6Tag.innerHTML += "이름 : " + name +"<br>";
		div6Tag.innerHTML += "국어 : " + kor +"<br>";
		div6Tag.innerHTML += "영어 : " + eng +"<br>";
		div6Tag.innerHTML += "수학 : " + math +"<br>";
		div6Tag.innerHTML += "총점 : " + total +"<br>";
		div6Tag.innerHTML += "평균 : " + avg +"<br>";
	}
}else {
	alert("값이 모두 입력되지 않았습니다.");
}