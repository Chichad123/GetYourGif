let loginbtn = document.querySelector(".login1");
let loginpage = document.querySelector(".login2");
let signupbtn = document.querySelector(".signup");
let signuppage = document.querySelector(".signup2");
loginbtn.addEventListener("click", () => {
  loginpage.classList.add("login");
  document.querySelector("main").style.filter = "blur(7px)";
  loginpage.style.display = "block";
  console.log("clicked");
});
document.querySelector("#loginclose").addEventListener("click", () => {
  loginpage.classList.remove("login");
  //   signuppage.classList.remove("signuppage");

  document.querySelector("main").style.filter = "blur(0px)";
  console.log("clicked");
});
signupbtn.addEventListener("click", () => {
  signuppage.classList.add("signuppage");
  document.querySelector("main").style.filter = "blur(7px)";
  signuppage.style.display = "block";
});
document.querySelector("#signupclose").addEventListener("click", () => {
  loginpage.classList.remove("login");
  signuppage.classList.remove("signuppage");

  document.querySelector("main").style.filter = "blur(0px)";
  console.log("clicked");
});
