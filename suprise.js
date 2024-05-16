function greetPerson()
{
    var name = document.getElementById("username").value;
    var greet = "Hello, " +name+"!"

 document.getElementById("greet2").textContent = greet

 
}

const clickMe = document.getElementById("click");
const page1 = document.querySelector(".page1");
const page2 = document.querySelector(".page2");
const submit = document.querySelector("submit")

//================================

const next1 = document.querySelector("next")
const prev1 = document.querySelector("prev")

const next2 = document.querySelector("next2")
const prev2 = document.querySelector("prev2")

const page3 = document.querySelector(".page3")
const page4 = document.querySelector(".page4")
const page5 = document.querySelector(".page5")
//==============================



function togglePage2() {
    page1.style.display = 'none';
    page2.style.display = 'flex';
  }
  
  submit.addEventListener('click', togglePage2);
  //=========================================

  function goPage2() { //PREV
    page1.style.display = 'none';
    page2.style.display = 'flex';
    page3.style.display = 'none';
    page4.style.display = 'none';
    page5.style.display = 'none';
    horay.style.display = 'none';
  }
  prev1.addEventListener('click', goPage2);
  prev2.addEventListener('click', goPage3)
  clickMe.addEventListener('click', goPage3)

  function goPage3() {
    page1.style.display = 'none';
    page2.style.display = 'none';
    page3.style.display = 'flex';
    page4.style.display = 'none';
    page5.style.display = 'none';
    horay.style.display = 'none';
  }

  function goPage4(){
    page1.style.display = 'none';
    page2.style.display = 'none';
    page3.style.display = 'none';
    page4.style.display = 'flex';
    page5.style.display = 'none';
    horay.style.display = 'none';
  }

  next1.addEventListener('click', goPage4);

  function goPage5(){
    page1.style.display = 'none';
    page2.style.display = 'none';
    page3.style.display = 'none';
    page4.style.display = 'none';
    page5.style.display = 'flex';
    horay.style.display = 'none';
  }
  
  next2.addEventListener('click', goPage5);

  const open = document.querySelector("open2")
const horay = document.querySelector(".horay")

  function openGift(){
  page1.style.display = 'none';
  page2.style.display = 'none';
  page3.style.display = 'none';
  page4.style.display = 'none';
  page5.style.display = 'none';
  horay.style.display = 'flex';
}
document.getElementById("greet2").textContent = greet

open.addEventListener('click', openGift)
