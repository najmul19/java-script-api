// console.log('connected')

const loadCategories = () => {
  fetch("https://openapi.programming-hero.com/api/peddy/categories")
    .then((res) => res.json())
    .then((data) => displayCategories(data.categories))
    .catch((err) => console.log(err));
};
const loadVideos = () => {
  fetch("https://openapi.programming-hero.com/api/peddy/pets")
    .then((res) => res.json())
    .then((data) => displayVideos(data.pets))
    .catch((err) => console.log(err));
};

const loadDetails = async (id) => {
  const uri = `https://openapi.programming-hero.com/api/peddy/pet/${id}`;
  const res = await fetch(uri);
  const data = await res.json();
  //  console.log("load details: ",id)
  displayDetails(data);
};
const displayDetails = (video) => {
  console.log(video.petData.petId);
  const detailsContainer = document.getElementById("modal-content");
  detailsContainer.innerHTML = `
    <img class=" pb-2 rounded-xl h-full w-full object-cover" src="${video.petData.image}"/>
    <hr/>
    <p class="text-gray-600 pt-2">${video.petData.pet_details}</P>
  `;
  document.getElementById("showModalData").click();
};

const displayVideos = (video) => {
  const videoContainer = document.getElementById("videos");
  videoContainer.innerHTML = "";
  console.log("hey :   ", video);
  video.forEach((ele) => {
    console.log(ele.petId);
    const videCard = document.createElement("card");
    videCard.innerHTML = `
         <figure class="h-[200px]">
            <img  class="h-full w-full object-cover rounded-md"
            src=${ele.image}
            alt="pet card photoes" />
        </figure>
        <div class="">
            <h2 class="card-title text-black font-bold">${ele.pet_name}</h2>
            <div class=" flex items-center gap-1  text-gray-600">
                <img class="h-[15px] w-[15px] " src="https://img.icons8.com/?size=100&id=12560&format=png" />
                <p class="">Breed: ${ele.breed}</p>
            </div>
            <div class="flex items-center gap-1  text-gray-600">
                <img class="h-[15px] w-[15px]" src="https://img.icons8.com/?size=100&id=12560&format=png" />
                <p>Birth: ${ele.date_of_birth}</p>
            </div>
            <div class="flex items-center gap-1  text-gray-600 ">
                <img class="h-[15px] w-[15px]" src="https://img.icons8.com/?size=100&id=12560&format=png" />
                <p>Gender: ${ele.gender}</p>
            </div>
            <div class="flex items-center gap-1  text-gray-600">
                <img class="h-[15px] w-[15px]" src="https://img.icons8.com/?size=100&id=12560&format=png" />
                <p>Price: ${ele.price}$</p>
            </div>
            <hr>
        <div class="card-actions justify-between flex py-2">
            
          
                <button class="btn btn-sm text-teal-800 font-bold "><img class="h-[30px] w-[30px]" src="https://img.icons8.com/?size=48&id=82788&format=png"/></button>
                <button class="btn btn-sm text-teal-800 font-bold  ">adopt</button>
                <button onClick="loadDetails('${ele.petId}')" class="btn btn-sm text-teal-800 font-bold  ">details</button>
          
        </div>
        </div>
        `;
    videoContainer.append(videCard);
  });
};
const displayCategories = (categories) => {
  const categoryContainer = document.getElementById("categories");
  categoryContainer.innerHTML = "";

  categories.forEach((element) => {
    // console.log(element);
    // const button = document.createElement("btn");
    // button.classList = "btn";
    // button.innerText = element.category;
    // categoryContainer.append(button)

    const buttonContainer = document.createElement("div");
    const ok = element.category;
    const l = ok.toLowerCase();

    console.log("display cat: ", element);
    buttonContainer.innerHTML = `
    <button  id="btn-${element.id}" onClick="loadCategoryVideos('${l}')" class="btn category-btn">
    ${element.category}
    </button>
    `;
    categoryContainer.append(buttonContainer);
  });
};

const loadCategoryVideos = (videoId) => {
  //   alert(videoId);

  console.log(videoId);
  fetch(`https://openapi.programming-hero.com/api/peddy/category/${videoId}`)
    .then((res) => res.json())
    .then((data) => {
      displayVideos(data.data);
    })
    .catch((err) => console.log(err));
};

loadCategories();
loadVideos();
