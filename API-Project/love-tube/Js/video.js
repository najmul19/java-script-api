const loadCategories = () => {
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res) => res.json())
    .then((data) => displayCategories(data.categories))
    .catch((err) => console.log(err));
};

const loadVideos = () => {
  fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then((res) => res.json())
    .then((data) => displayVideos(data.videos))
    .catch((err) => console.log(err));
};
const loadCategoryVideos = (id)=>{
    // alert(id);
    fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${id}`)
    .then((res) => res.json())
    .then((data) => {
        removeActiveClass();
        const activeBtn = document.getElementById(`btn-${id}`)
        // console.log(activeBtn);
        activeBtn.classList.add('active')
        displayVideos(data.category)

    })
    .catch((err) => console.log(err));
}

const displayCategories = (categories) => {
  const categoryContainer = document.getElementById("categories");
  // console.log(categories)
  categories.forEach((item) => {
    console.log(item);
    
    // const button = document.createElement("button");
    // button.classList = "btn";
    // button.innerText = item.category;
    // categoryContainer.append(button);
    const buttonContainer = document.createElement("div");
    buttonContainer.innerHTML=
    `
    <button id="btn-${item.category_id}" onClick="loadCategoryVideos(${item.category_id})" class="btn category-btn">
    ${item.category}
    </button>
    `
    categoryContainer.append(buttonContainer);
  });
};

const cardDemo = {
  category_id: "1001",
  video_id: "aaab",
  thumbnail: "https://i.ibb.co/QPNzYVy/moonlight.jpg",
  title: "Midnight Serenade",
  authors: [
    {
      profile_picture: "https://i.ibb.co/fDbPv7h/Noha.jpg",
      profile_name: "Noah Walker",
      verified: false,
    },
  ],
  others: {
    views: "543K",
    posted_date: "",
  },
  description:
    "'Midnight Serenade' by Noah Walker is a soulful journey into the depths of the night, capturing the mystique and allure of a moonlit evening. With 543K views, this song brings together tender melodies and evocative lyrics, making it a favorite among listeners seeking a contemplative yet uplifting experience. Immerse yourself in this musical masterpiece and feel the calm embrace of the night.",
};
const loadDetails= async(videoId)=>{
  console.log(videoId)
  const uri = `https://openapi.programming-hero.com/api/phero-tube/video/${videoId}`
  const res = await fetch(uri);
  const data = await res.json();
  console.log(data)
  displayDetails(data.video)
}
const displayDetails=(video)=>{
  console.log(video)
  const detailsContainer = document.getElementById('modal-content');
  detailsContainer.innerHTML= `
  <img src="${video.thumbnail}" />
  <p>${video.description}</p>
  `
  // waiy-1
  // document.getElementById('showModalData').click();
  // way-2
  document.getElementById('my_modal_5').showModal();
}
function getDate(date) {
    const day = parseInt(date/86400)
    let remainingDay = date%86400
    const hours = parseInt(remainingDay/3600);
    remainingSeconds=parseInt(date%3600);
    const minutes = parseInt(remainingSeconds/60);
    parseInt(remainingSeconds%=60);
    return `${day}:${hours}:${minutes}:${remainingSeconds}`
}

const removeActiveClass = ()=>{
 const buttons = document.getElementsByClassName('category-btn');
 console.log(buttons);
 for (let btn of buttons){
    btn.classList.remove('active');
    
 }
}
const displayVideos = (videos) => {
  const videoContainer = document.getElementById("videos");
  videoContainer.innerHTML=""
  if(videos.length==0){
    videoContainer.classList.remove('grid');
    videoContainer.innerHTML=`
    <div class="min-h-[300px] flex flex-col gap-5 justify-center items-center">
    <img src="images/Icon.png" />
    <h2 class="text-center text-xl font-bold">No Content Here In THis Category
    </h2>
    </div>
    `;
    return;
  } else{
    videoContainer.classList.add('grid');
  }
  videos.forEach((video) => {
    console.log(video);
    const videoCard = document.createElement("card");
    videoCard.classList = "card card-compact";
    videoCard.innerHTML = `
    <figure class ="h-[200px] relative">
    <img
      src=${video.thumbnail}
      class="h-full w-full object-cover"
      alt="Shoes" />
      ${video.others.posted_date.length == 0? "":`<span class="absolute right-2 bottom-2 bg-black text-white text-xs rounded p-1">${ getDate(video.others.posted_date) }</span>
        `}
        </figure>
    <div class="px-0 py-2 flex gap-2">
    <div>
        <img class="w-10 h-10 rounded-full object-cover" src="${
          video.authors[0].profile_picture
        }" />
    </div>
    <div>
        <h2 class="font-bold">${video.title}<h2/>
        <div class="flex items-center gap-2">
            <p class="text-gray-400">${video.authors[0].profile_name}</p>
            ${
              video.authors[0].verified
                ? ` <img class="w-5" src="https://img.icons8.com/?size=96&id=D9RtvkuOe31p&format=png" />`
                : ""
            }
            </div>

        
        <p><button onClick="loadDetails('${video.video_id}')" class="btn btn-sm btn-error">details</button></p>
    </div>
    </div>
        `;
    videoContainer.append(videoCard);
  });
};

loadCategories();
loadVideos();
