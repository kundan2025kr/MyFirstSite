const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "firefox-icon.png") {
    myImage.setAttribute("src", "youtube.png");
  } else {
    myImage.setAttribute("src", "firefox-icon.png");
  }
});

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Firefox is cool, ${storedName}`;
}
function setUserName() {
    
    const myName = prompt("Please enter your name.");
    if(!myName){
        setUserName();
    }
    else{
        localStorage.setItem("name", myName);
        myHeading.textContent = `Firefox is cool, ${myName}`;
    }
}

myButton.addEventListener("click",()=>{
    setUserName()
});
