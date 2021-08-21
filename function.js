
  let taskValue = document.querySelector('#text-box');
  let button = document.querySelector("#butt");
  let rowDiv = document.querySelector(".row");
  let textSectionPicker = document.getElementsByClassName("list-field");
  let paraPickers = document.getElementsByClassName("ground-style");
  let shutButts = document.getElementsByClassName("styling");
  let textPegPicker = document.getElementsByClassName("text-peg");

  button.addEventListener("click", taskCreator);

  function taskCreator() {
    let taskPick = taskValue.value;
    let paraText = document.createElement("p");
    let closeBox = document.createElement("div");
    paraText.setAttribute("class", "ground-style");
    closeBox.textContent = "X";
    closeBox.setAttribute("class", "styling");


    let textPeg = document.createElement("div");
    textPeg.classList.add("text-peg");
    textPeg.append(paraText, closeBox);



    if (taskPick){
      let textSection = document.createElement("section");
      textSection.classList.add("list-field");
      paraText.innerText = taskPick;
      textSection.appendChild(textPeg);
      rowDiv.appendChild(textSection);
      taskValue.focus();
      taskValue.value = "";
      taskValue.select();
    }else if (taskValue.value === "" || taskValue.value === null){
      alert("the input field is empty");
    }

  function closeAction(e) {
    e.currentTarget.parentNode.remove(textSectionPicker);
  }

  for (let i = 0; i < shutButts.length; i++) {
    shutButts[i].addEventListener("click", closeAction);
}

localStorage.setItem("taskLIst", taskPick);


// function buttonShutter(){
//   for (let i = 0; i < shutButts.length; i++){
//     shutButts[i].onclick = function(e){
//       const button = e.currentTarget;
//       const container = button.parentNode;
//       button.parentNode.removeChild(container);
//     }
//
//
//   }
 }
