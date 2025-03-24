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
    .then((data) => displayVideos(data.category))
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
    <button onClick="loadCategoryVideos(${item.category_id})" class="btn">
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

function getDate(date) {
    const day = parseInt(date/86400)
    let remainingDay = date%86400
    const hours = parseInt(remainingDay/3600);
    remainingSeconds=parseInt(date%3600);
    const minutes = parseInt(remainingSeconds/60);
    parseInt(remainingSeconds%=60);
    return `${day}:${hours}:${minutes}:${remainingSeconds}`
}

const displayVideos = (videos) => {
  const videoContainer = document.getElementById("videos");
  videoContainer.innerHTML=""
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

        
        <p></p>
    </div>
    </div>
        `;
    videoContainer.append(videoCard);
  });
};

loadCategories();
loadVideos();
