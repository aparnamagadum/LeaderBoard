const firstName = document.getElementById("con").children[0];
const lastName = document.getElementById("con").children[1];
const country = document.getElementById("con").children[2];
const score = document.getElementById("con").children[3];
const addPlayer = document.getElementById("addPlayer");

let data = [
  {
    firstName: "Aparna",
    lastName: "Magadum",
    time: "May 27 2024 18:30:36",
    country: "ind",
    score: 80,
  },
  {
    firstName: "Samart",
    lastName: "patil",
    time: "May 26 2024 12:29:31",
    country: "Pak",
    score: 78,
  },
  {
    firstName: "Abhishek",
    lastName: "pujari",
    time: "May 27 2024 07:50:18",
    country: "Eng",
    score: 85,
  },
];

function show() {
  section.innerHTML = "";
  sort();

  data.forEach(function (ele, index) {
    let div = document.createElement("div");
    div.className = "button_group";
    div.innerHTML = `<span class="rank">${index + 1}.</span>
  <span class='wrapperProfile'>  <span>${ele.firstName} ${ele.lastName}</span>
    <span>${ele.time}</span></span>
     <span>${ele.country}</span>
     <span>${ele.score}</span><button class = "del">X</button>
  <button class = "but1">+5</button>
  <button class = "but2">-5</button>`;

    section.appendChild(div);
  });
  
  let rankElements = document.getElementsByClassName("rank");
  if (rankElements.length >= 3) {
    rankElements[0].textContent = "🥇";
    rankElements[1].textContent = "🥈";
    rankElements[2].textContent = "🥉";
  }

  activate();
}
function sort() {
  data.sort((a, b) => {
    let num1 = a.score;
    let num2 = b.score;
    return num2 - num1;
  });
}

addPlayer.addEventListener("click", function (e) {
  e.preventDefault();
  if (
    firstName.value == "" ||
    lastName.value == "" ||
    score.value == "" ||
    country.value == ""
  ) {
    alert("required all value");
    return;
  }
  const time = new Date();
  let x = (time + "").split(" ");
  let currTime = x.slice(1, 5).join(" ");
  let section = document.getElementById("section");
  data.push({
    firstName: firstName.value,
    lastName: lastName.value,
    time: currTime,
    country: country.value,
    score: score.value,
  });
  console.log(currTime);
  console.log(data);
  show();
  firstName.value = "";
  lastName.value = "";
  country.value = "";
  score.value = "";
  sort();
  // console.log(data);
});
window.addEventListener("load", show);
function activate() {
  let buttons = document.querySelectorAll(".button_group");
  // console.log(buttons);
  buttons.forEach(function (ele, index) {
    ele.addEventListener("click", function (e) {
      // console.log(e.target.classList.value)
      if (e.target.classList.value === "del") {
        console.log(data);
        data.splice(index, 1);
        show();
      } else if (e.target.classList.value === "but1") {
        data[index].score =+data[index].score+5;
        show();
      } else if (e.target.classList.value === "but2") {
        data[index].score -= 5;
        show();
      }
    });
  });
}