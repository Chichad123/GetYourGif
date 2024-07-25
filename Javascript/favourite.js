let favarea = document.getElementById("favi");
// console.log(favarea);

// for (let i = 0; i < window.localStorage.length; i++) {
//   const content = `<div class="gif">
//           <img
//             src=${window.localStorage.getItem(i)}
//             alt="NOT_FOUND"
//             id=${i}
//           />
//           <button class="copylink">
//             <i class="fa-solid fa-link"></i>Copy Link
//           </button>
//           <button class="remove">
//             Remove from Favourites
//           </button>
//         </div>`;
//   favarea.innerHTML += content;
// }

let keys = Object.keys(localStorage);
let i = keys.length;

while (i--) {
  // values.push(localStorage.getItem(keys[i]));
  const content = `<div class="gif">
          <img
            src=${localStorage.getItem(keys[i])}
            alt="NOT_FOUND"
            id=${keys[i]}
          />
          <button class="copylink">
            <i class="fa-solid fa-link"></i>Copy Link
          </button>
          <button class="remove">
            Remove from Favourites
          </button>
        </div>`;
  favarea.innerHTML += content;
}
let copybtns = document.querySelectorAll(".copylink");
copybtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.innerText = "Copied!";
    setTimeout(() => {
      btn.innerHTML = '<i class="fa-solid fa-link"></i> Copy Link';
    }, 1000);
    let text = btn.parentElement.children[0].getAttribute("src");
    navigator.clipboard.writeText(text);
    console.log(text);
  });
});
let removebtns = document.querySelectorAll(".remove");
removebtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    localStorage.removeItem(btn.parentElement.children[0].getAttribute("id"));
    window.location.reload();
  });
});
