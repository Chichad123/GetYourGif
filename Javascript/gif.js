let gifarea = document.querySelector(".gifarea");
let input = document.querySelector(".searchbar input");
let submitbtn = document.querySelector(".searchbar button");
var favarr = [];
let i = 0;
function ButtonFuctionality(copybtn, favbtn) {
  copybtn.addEventListener("click", () => {
    copybtn.innerText = "Copied!";
    setTimeout(() => {
      copybtn.innerHTML = '<i class="fa-solid fa-link"></i> Copy Link';
    }, 1000);
    let text = copybtn.parentElement.children[0].getAttribute("src");
    navigator.clipboard.writeText(text);
    console.log(text);
  });
  favbtn.addEventListener("click", () => {
    if (
      favarr.indexOf(favbtn.parentElement.children[0].getAttribute("src")) ===
      -1
    ) {
      favarr.push(favbtn.parentElement.children[0].getAttribute("src"));
      window.localStorage.setItem(
        i,
        favbtn.parentElement.children[0].getAttribute("src")
      );
      i++;
    } else {
      favbtn.innerText = "Already Added!";
      setTimeout(() => {
        favbtn.innerText = `Add To Favourites`;
      }, 1000);
    }
    console.log(favarr);
  });
}

function creategif(link) {
  let gifdiv = document.createElement("div");
  gifdiv.classList.add("gif");
  let image = document.createElement("img");
  image.src = link;
  console.log(link);
  gifdiv.append(image);
  let copybtn = document.createElement("button");
  let favbtn = document.createElement("button");
  copybtn.classList.add("copylink");
  favbtn.classList.add("favourites");
  copybtn.innerHTML = ` <i class="fa-solid fa-link"></i>Copy Link`;
  favbtn.innerText = "Add To Favourites";
  gifdiv.append(copybtn);
  gifdiv.append(favbtn);

  ButtonFuctionality(copybtn, favbtn);
  return gifdiv;
}

let searchevent = async function () {
  let key = "xHJwves5OVHpzsd43Ln0zWzKTMRmNy4s";
  let gifLimit = 25;
  let query = input.value;
  //   console.log(query);

  let url = `https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${query}&limit=${gifLimit}&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;
  let res = await fetch(url);
  try {
    const data = await res.json();
    gifarea.innerHTML = "";
    const dataarr = data.data;
    if (dataarr.length === 0) {
      document.querySelector(".errormsg").style.display = "block";
    }

    dataarr.forEach((element) => {
      gifarea.append(creategif(element.images.original.url));
    });

    console.log(data);
  } catch (error) {
    document.querySelector(".errormsg").style.display = "block";
  }
};

submitbtn.addEventListener("click", searchevent);
input.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    searchevent();
  }
});

// let favarea = document.getElementById("favi");
// console.log("Hii");
// console.log(favarea);
// favarr.forEach((link) => {
//   const content = `<div class="gif">
//           <img
//             src=${link}
//             alt="NOT_FOUND"
//           />
//           <button class="copylink">
//             <i class="fa-solid fa-link"></i>Copy Link
//           </button>
//         </div>`;
//   favarea.innerHTML += content;
// });
// export default favarr;

// let i = 0;
// favarr.forEach((link) => {
//   window.localStorage.setItem(i, link);
// });
// console.log(window.localStorage);
