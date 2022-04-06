document.getElementById('showStudents').addEventListener('click', showStudents);
document.getElementById('hideStudents').addEventListener('click', hideStudents);
function showStudents() {
		fetch('student.json')
		.then((res) => res.json())
		.then((data) => {
			var output = '';
			data.forEach(function (student) {
				output += `<div class="menu">
					<ul ID="size">
					<img class="imglist" src="${student.Photo}" alt="">
					<li>Student ID: ${student.id}</li>
					<li>${student.name}</li>
					<li id="emaillist">${student.email}</li>
					<li ID="icons"><a href="${student.github}" target="_blank" class="fa fa-github"></a>
					<a href="${student.linkedIn}" target="_blank" class="fa fa-linkedin"></a>
					<a href="${student.facebook}" target="_blank" class="fa fa-facebook"></a></li>
					</ul>
					</div>
				`;
			});
		document.getElementById('output').innerHTML = output;
	})
	document.getElementById('showStudents').style.display = "none";	
	document.getElementById('hideStudents').style.display = "block";	
}



function hideStudents() {
	window.location.reload();
}

