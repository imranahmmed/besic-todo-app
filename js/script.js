let newInput = document.querySelector(".newInput");
let taskinput = document.querySelector(".taskinput");
let addtaskbutton = document.querySelector(".taskbutton");
let mylist = document.querySelector(".mylist");

let taskarr = [];

addtaskbutton.addEventListener("click", function () {
	taskarr.push(taskinput.value);
	console.log(taskarr);
	addTodo();
});

taskinput.addEventListener("keyup", e => {
	if (e.key == "Enter") {
		taskarr.push(taskinput.value);
		addTodo();
	}
});

function addTodo() {
	mylist.innerHTML = "";
	let li = "";
	taskarr.map((item, index) => {
		li += `<li class="task">
					<p>${item}</p> 
					<div class="actions">
						<button class="editBtn" data-id=""><i class="uil uil-pen"></i>Edit</button>
						<button class="removeBtn" data-id=""><i class="uil uil-trash"></i>Delete</button>
					</div>
				</li>`
	});
	mylist.innerHTML = li;
	taskinput.value = "";

	let removeBtn = document.querySelectorAll(".removeBtn");
	let removeArr = Array.from(removeBtn);

	removeArr.map((button, index) => {
		button.addEventListener("click", function () {
			taskarr.splice(index, 1);
			mylist.innerHTML = "";
			addTodo();
		});
	});




	let editInput = document.querySelector(".editInput");
	let taskEdit = document.querySelector(".taskEdit");
	let editButton = document.querySelector(".editButton");
	let editBtn = document.querySelectorAll(".editBtn");
	let editArr = Array.from(editBtn);
	let editid = document.getElementById('editid');

	editArr.map((btn, index) => {
		btn.addEventListener("click", function () {
			taskEdit.value = taskarr[index];
			editid.value = index;
			editInput.style.display = "block";
			newInput.style.display = "none";
			editButton.addEventListener("click", function () {
				if (editid.value == index) {
					taskarr[index] = taskEdit.value;
					console.log(index);

					editInput.style.display = "none";
					newInput.style.display = "block";
					addTodo();
				}

			});
		});
	});











	// let editInput = document.querySelector(".editInput");
	// let taskEdit = document.querySelector(".taskEdit");
	// let editButton = document.querySelector(".editButton");
	// let editBtn = document.querySelectorAll(".editBtn");
	// let editArr = Array.from(editBtn);

	// editArr.map((btn, index) => {
	// 	btn.addEventListener("click", function () {
	// 		taskEdit.value = taskarr[index];

	// 		editInput.style.display = "block";
	// 		newInput.style.display = "none";

	// 		editButton.addEventListener("click", function () {
	// 			taskarr[index] = taskEdit.value;
	// 			console.log(index);

	// 			editInput.style.display = "none";
	// 			newInput.style.display = "block";
	// 			addTodo();
	// 		});
	// 	});
	// });

}
