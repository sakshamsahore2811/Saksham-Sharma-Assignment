

const slider = document.getElementById("myRange");
const output = document.getElementById("sliderValue");
const thirdCard = document.querySelector(".cards .card-black-default");
const fourthCard = document.querySelector(".cards .card:nth-child(4)");
const btn4  = document.querySelector(".btn4");
const btn5  = document.querySelector(".btn5");
const drpdwn = document.querySelector(".dropdown-content");

output.innerHTML = slider.value;

slider.oninput = function() {
    output.innerHTML = this.value;
    thirdCard.style.backgroundColor="black";
    thirdCard.style.color = "white";
    btn4.style.backgroundColor = "#bd1ebd";
    if (this.value < 120) {
        thirdCard.style.backgroundColor = "black";
        thirdCard.style.color = "white";
        fourthCard.style.backgroundColor = "white"; 
        fourthCard.style.color = "black";
        btn4.style.backgroundColor = "#bd1ebd";
        btn4.style.color = "white";
        btn5.style.color = "black";
        btn5.style.backgroundColor = "#e1e1d8";
        drpdwn.style.backgroundColor ="white"; 

    } else {
        thirdCard.style.backgroundColor = "white"; 
        fourthCard.style.color = "white";
        fourthCard.style.backgroundColor = "black";
        btn5.style.backgroundColor = "#bd1ebd";
        thirdCard.style.color = "black";
        btn4.style.backgroundColor = "#e1e1d8";
        btn5.style.color = "white";
        btn4.style.color = "black";
        drpdwn.style.backgroundColor ="black"; 
    }
}






const viewAllBtn = document.querySelector(".btn2");
const table = document.querySelector(".tbl");

viewAllBtn.addEventListener("click", function() {
    if (table.style.display === "none" || table.style.display === "") {
        table.style.display = "block"; 
    } else {
        table.style.display = "none";
    }
});



function toggleDropdown() {
    var dropdownContent = document.getElementById("dropdownContent");
    dropdownContent.style.display = dropdownContent.style.display === "block" ? "none" : "block";
}

function selectValue(value) {
    document.getElementById("selectedValue").textContent = value;
    if (value=='3488'){
    document.getElementById("dropdownValue").textContent = '900';
    }
    else if (value=='4651'){
        document.getElementById("dropdownValue").textContent = '1200';
    }
    else if (value=='5813'){
        document.getElementById("dropdownValue").textContent = '1500';
    }
    else if (value=='6975'){
        document.getElementById("dropdownValue").textContent = '1800';
    }
}










const monthlyButton = document.getElementById("monthlyButton");
const yearlyButton = document.getElementById("yearlyButton");

monthlyButton.addEventListener("click", () => {
  monthlyButton.classList.add("selected");
  yearlyButton.classList.remove("selected");
});

yearlyButton.addEventListener("click", () => {
  yearlyButton.classList.add("selected");
  monthlyButton.classList.remove("selected");
});
