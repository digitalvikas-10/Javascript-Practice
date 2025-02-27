// Build a random passowrd generator using javascript.
let para = document.querySelector(".para");
let btn = document.getElementById("btn");
function passGenerator() {
  let length = 8;
  let charSet =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890@";
  let password = "";

  for (let i = 0; i < length; i++) {
    let random = Math.floor(Math.random() * charSet.length);
    password = password + charSet[random];
  }
  return password;
}

console.log(passGenerator());

btn.addEventListener("click", () => {
  let newPass = passGenerator();
  para.innerText = newPass;
});
