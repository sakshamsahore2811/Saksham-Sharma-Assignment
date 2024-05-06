function toggleDropdown() {
    var dropdownContent = document.getElementById("dropdownContent");
    dropdownContent.style.display = dropdownContent.style.display === "block" ? "none" : "block";
}

function selectValue(value) {
    document.getElementById("selectedValue").innerText = value;
    toggleDropdown(); // Close the dropdown after selection
}



const slider = document.getElementById("myRange");
const output = document.getElementById("sliderValue");
const thirdCard = document.querySelector(".cards .card:nth-child(3)");
const fourthCard = document.querySelector(".cards .card:nth-child(4)");
const btn4  = document.querySelector(".btn4");
const btn5  = document.querySelector(".btn5");

output.innerHTML = slider.value;

slider.oninput = function() {
    output.innerHTML = this.value;
    thirdCard.style.backgroundColor="black";
    thirdCard.style.color = "white";
    btn4.style.backgroundColor = "#bd1ebd";
    if (this.value < 150) {
        thirdCard.style.backgroundColor = "black";
        thirdCard.style.color = "white";
        fourthCard.style.backgroundColor = "white"; // Reset background color of the fourth card
        fourthCard.style.color = "black";
        btn4.style.backgroundColor = "#bd1ebd";
        btn4.style.color = "white";
        btn5.style.color = "black";
        btn5.style.backgroundColor = "#e1e1d8";
    } else {
        thirdCard.style.backgroundColor = "white"; // Reset background color of the third card
        fourthCard.style.color = "white";
        fourthCard.style.backgroundColor = "black";
        btn5.style.backgroundColor = "#bd1ebd";
        thirdCard.style.color = "black";
        btn4.style.backgroundColor = "#e1e1d8";
        btn5.style.color = "white";
        btn4.style.color = "black";
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
