const cats = [
  {
    name: "Cat",
    bio: "Cat is an English word.",
    thumb: "images/kitten1-thumb.jpeg",
    img: "images/kitten1.jpeg"
  },
  {
    name: "Mao",
    bio: "Mao is is a Cantonese word.",
    thumb: "images/kitten2-thumb.jpeg",
    img: "images/kitten2.jpeg"
  },
  {
    name: "Gato",
    bio: "Gato is a Spanish word",
    thumb: "images/kitten3-thumb.jpeg",
    img: "images/kitten3.jpeg"
  },
  {
    name: "Billi",
    bio: "Billi is a Hindi word.",
    thumb: "images/kitten4-thumb.jpeg",
    img: "images/kitten4.jpeg"
  },
  {
    name: "Chat",
    bio: "Chat is a French word.",
    thumb: "images/kitten5-thumb.jpeg",
    img: "images/kitten5.jpeg"
  },
  {
    name: "Kot",
    bio: "Kot is a Polish word.",
    thumb: "images/kitten6-thumb.jpeg",
    img: "images/kitten6.jpeg"
  },
  {
    name: "Kit",
    bio: "Kit is a Ukrainian word.",
    thumb: "images/kitten7-thumb.jpeg",
    img: "images/kitten7.jpeg"
  },
  {
    name: "Kot",
    bio: "Kot is a Russian word.",
    thumb: "images/kitten8-thumb.jpeg",
    img: "images/kitten8.jpeg"
  }
]

const catsRow = document.getElementById("catsRow")
//loop over the array of data
for (const cat of cats) {
  const card = `
  <div class="col col-6 col-md-3">
    <div class="card">
      <img src="${cat.thumb}" class="card-img-top" alt="placeholder kitten" data-bs-toggle="modal" data-bs-target="#exampleModal" data-fullimg="${cat.img}">
      <div class="card-body">
        <h5 class="card-title">${cat.name}</h5>
        <p class="card-text">${cat.bio}</p>
        <a href="#" class="btn btn-light like" data-catname="${cat.name}" data-catbio="${cat.bio}" data-catthumb="${cat.thumb}" data-catfullimg="${cat.img}">Like</a>
      </div>
    </div>
</div><!--col ends-->`
catsRow.insertAdjacentHTML("beforeend", card)
}

//adding event listener to the row usining event delegation
catsRow.addEventListener("click", openModal)
//e stands for event
function openModal (e){
  //delegates the eventto thetarget element if it contains class card-img-top
  if(e.target.classList.contains("card-img-top")) {
    //dataset to target data full image of cat from img dataset (its liked with the array), important for capstone
    const fullSizeImage = e.target.dataset.fullimg
    document.querySelector(".modal-body").innerHTML = `<img src="${fullSizeImage}" alt="placeholder kitten">`
  }
}

/*--------------------------------
            Week 11
---------------------------------*/
  //get the saved cats from local storage
  let savedCats = localStorage.getItem("mycats")
  // if the saved cats are null then !savedcats will be true
  if(!savedCats){
    // set savedCats to empty array
    savedCats = []
  }else{
    //is savedCats is not null then set savedCats to parsed value of savedCats
    savedCats = JSON.parse(savedCats)
  }


const likeButtons = document.querySelectorAll(".like")
if (likeButtons.length > 0) {
  for (const likeButton of likeButtons) {
    likeButton.addEventListener("click", likeCat)
    // loop over the savedCats array to check if any cat name matches with this button cat name
    for(const savedCat of savedCats){
      if(savedCat.name == likeButton.dataset.catname){
        likeButton.classList.remove("btn-light")
        likeButton.classList.add("btn-danger")
        likeButton.textContent = "liked"
      }
    }
  }
}

function likeCat(e) {
  e.preventDefault()
  // method will work for nasa (data held in anchor tag)
  const catName = this.dataset.catname
  const catBio = this.dataset.catbio
  const catThumb = this.dataset.catthumb
  const catImg = this.dataset.catfullimg
  const catInfo = {name: catName, bio: catBio, thumb: catThumb, img: catImg}
  console.log(catInfo)

  //check is cat name exists in local storage in the array from localstorage
  const catExist = findCat(catName)
  // if the cat name existed we will get a number from findCat function
  if(catExist !== null) {
    // display an alert to user if non null is added
    alert("this cat is already liked")
  }else{
    // the findCat method did not return a number
    // push the cat object to savedCats array
    savedCats.push(catInfo)
    // stringify the savedCats array and add it to localStorage mycats
    localStorage.setItem("mycats", JSON.stringify(savedCats))

    // update button style
    this.classList.remove("btn-light")
    this.classList.add("btn-danger")
    this.textContent = "liked"

  }
}

function findCat(catName){
  for (savedCat of savedCats){
    if(savedCat.name == catName){
      return savedCats.indexOf(savedCat)
    }
  }
  return null
}