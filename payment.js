const numbererr = document.getElementById("wrn")
const experr = document.getElementById("exw")
const cvcerr = document.getElementById("cvcw")
const cardholder = document.getElementById("cardholder")
const cardnumber = document.getElementById("cardnumber")
const year = document.getElementById("year")
const month = document.getElementById("month")
const cvc = document.getElementById("cvc")
const cardnumbsim = document.getElementById("cardnumbsim")
const cardholdersim = document.getElementById("cardholdersim")
const monthsim = document.getElementById("monthsim")
const yearsim = document.getElementById("yearsim")
const cvcsim = document.getElementById("cvcsim")
const container = document.querySelector(".container")
const thankyou = document.querySelector(".thankyou")


function confirming(){
if (cardnumber.value == '' || cardnumber.value.length < 16 || year.value==''||month.value == '' ||cvc.value.length < 3|| cardholder.value=='' )  {
    numbererr.style.display = 'initial'
    experr.style.display = 'initial'
    cvcerr.style.display = 'initial'


 setTimeout(() => {
    numbererr.style.display = 'none'
    experr.style.display = 'none'
    cvcerr.style.display = 'none'

 }, 3000);
}

else{
   container.style.display = 'none'
   thankyou.style.display = 'initial'
}
}
function cardfunction(){
cardnumbsim.innerText = cardnumber.value
cardholdersim.innerText = cardholder.value
monthsim.innerText = month.value
yearsim.innerText = year.value
cvcsim.innerText = cvc.value

}

