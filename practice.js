const password = document.getElementById("password")
const letters = ["a",'b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','!','_','-','$','#',"A",'B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
const shuffle = letters.sort(() => 0.5 - Math.random());
const noComma = shuffle.join("")
const final = noComma.slice(0,12)
console.log(final)
function genPass(){
    password.textContent = `${final}`
}
function refreshBtn(){
    window.location.reload()
}