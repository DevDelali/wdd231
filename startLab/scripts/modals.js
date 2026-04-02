const openButton1 = document.querySelector("#openButton1");
const openButton2 = document.querySelector("#openButton2");
const openButton3 = document.querySelector("#openButton3");
const dialogBox = document.querySelector("#dialogBox");
const dialogBoxText = document.querySelector("#dialogBoxText");
const closeButton = document.querySelector("#closeButton");

// Show the dialog- button open the dialog modally
openButton1.addEventListener("click", () => {
    dialogBoxText.textContent = "An Apple has 95 calories.";
    dialogBox.showModal();
});

openButton2.addEventListener("click", () => {
    dialogBoxText.textContent = "An Orange has 62 calories.";
    dialogBox.showModal();
});

openButton3.addEventListener("click", () => {
    dialogBoxText.textContent = "A Banana has 105 calories.";
    dialogBox.showModal();
});


// Close the dialog- button closes the dialog
closeButton.addEventListener("click", () => {
    dialogBox.close();
});