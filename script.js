const imageSources = [
  "assets/trail.jpeg",
  "assets/lakesunset.jpeg",
  "assets/cabin.jpeg",
  "assets/doe.jpeg",
  "assets/starrynight.jpeg",
];

function addThumbnail(imageSource) {
  // 1.1 Create the element
  let image = document.createElement("img");
  // 1.2 Customize the element
  image.src = imageSource;
  image.className = "thumbnail";
  // 1.3 Append the element
  let container = document.getElementById("thumbnail-container");
  container.appendChild(image);
  // 1.4 Add the onclick
  image.onclick = function () {
    let thumbnail = document.getElementById("fullsize-image");
    thumbnail.src = image.src;
  };
}

function addAllThumbnails() {
  // 2.1 Loop through imageSources
  for (i = 0; i < imageSources.length; i++) {
    addThumbnail(imageSources[i]);
  }
  // 2.2 Call addThumbnail each iteration
}

// 2.3 Call addAllThumbnails
addAllThumbnails(imageSources);
// LevelUp Display the first image on page load
let thumbnail = document.getElementById("fullsize-image");
thumbnail.src = imageSources[0];
