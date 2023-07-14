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
        <a href="#" class="btn btn-light">Like</a>
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