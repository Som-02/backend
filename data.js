    // ===== PLAYLISTS =====
const playlists = [
  {
    name: "Arijit Singh",
    img: "https://i.scdn.co/image/ab676161000051745ba2d75eb08a2d672f9b69b7",
    link: "arijitsingh.html"
  },
  {
    name: "Rockstar",
    img: "https://cdn.shopify.com/s/files/1/0730/1451/files/Rockstar__soundtrack_480x480.jpg?v=1702295084",
    link: "rockstar.html"
  },
  {
    name: "Diljit",
    img: "https://imgmedia.lbb.in/media/2024/09/66e17baa630d00121087b7fc_1726053290550.jpg",
    link: "diljit.html"
  },
  {
    name: "Veer Zara",
    img: "https://i.scdn.co/image/ab67616d0000b27396fa496a2cfc301430589024",
    link: "veerzara.html"
  },
  {
    name: "Anuv",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDEb-mI20p3jVlWkUtS2ugSeAu-M3BmAWlJu-3KoMLky7SK2YdfVKLuUN-__Ly-Qw5xBE&usqp=CAU",
    link: "anuv.html"
  },
  {
    name: "YJHD",
    img: "https://riyabhorkar.com/wp-content/uploads/2024/12/ecfc79086b8032844b087b6caedf36d6.jpg",
    link: "yjhd.html"
  }
];

// ===== ARTISTS =====
const artists = [
  {
    name: "Sonu Nigam",
    img: "https://upload.wikimedia.org/wikipedia/commons/3/34/Tri_Nation_Mega_Concert_Sonu_Nigam_%288388639915%29.jpg",
    link: "sonunigam.html"
  },
  {
    name: "Shreya Ghoshal",
    img: "https://images.news18.com/ibnlive/uploads/2024/03/shreya-ghoshal-birthday-2024-03-46d00c2b11d7bea31ac9517d993f61f1.jpg",
    link: "shreyaghoshal.html"
  },
  {
    name: "Arijit Singh",
    img: "https://i.scdn.co/image/ab676161000051745ba2d75eb08a2d672f9b69b7",
    link: "arijitsingh.html"
  },
  {
    name: "Ed Sheeran",
    img: "https://www.apple.com/newsroom/images/product/music/standard/Apple-Music-Live-Ed-Sheeran-with-guitar_big.jpg.large.jpg",
    link: "edsheeran.html"
  },
  {
    name: "Shaan",
    img: "https://i.scdn.co/image/ab676161000051742573d940f1062a6646891e50",
    link: "shaan.html"
  },
  {
    name: "Zayn",
    img: "https://i.pinimg.com/originals/39/73/b7/3973b7db1a1e622fa933c959d62f06c9.jpg",
    link: "zayn.html"
  }
];

// ===== ALBUMS =====
const albums = [
  {
    name: "Rockstar",
    img: "https://cdn.shopify.com/s/files/1/0730/1451/files/Rockstar__soundtrack_480x480.jpg?v=1702295084",
    link: "rockstar.html"
  },
  {
    name: "Jab We Met",
    img: "https://stat4.bollywoodhungama.in/wp-content/uploads/2016/03/50386817.jpg",
    link: "jabwemet.html"
  },
  {
    name: "YJHD",
    img: "https://riyabhorkar.com/wp-content/uploads/2024/12/ecfc79086b8032844b087b6caedf36d6.jpg",
    link: "yjhd.html"
  },
  {
    name: "Jawan",
    img: "https://m.media-amazon.com/images/I/71tQNSjxAQL._AC_UF1000,1000_QL80_.jpg",
    link: "jawan.html"
  },
  {
    name: "Shershaah",
    img: "https://i.scdn.co/image/ab67616d0000b273ab827cdec4b3fc1b02bfdb1e",
    link: "shershaah.html"
  },
  {
    name: "Ghajini",
    img: "https://m.media-amazon.com/images/M/MV5BMjk3ZmQyYjAtZTgwZS00YjliLTljZmEtMDU1Nzk1Y2NhYmRlXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    link: "ghajini.html"
  }
];

// ===== Function to load content =====
function loadSection(data, containerId) {
  const container = document.getElementById(containerId);
  data.forEach(item => {
    const div = document.createElement("div");
    div.classList.add("image-container");
    div.innerHTML = `
      <a href="${item.link}">
        <img src="${item.img}" alt="${item.name}">
        <div class="play-icon">&#9658;</div>
      </a>
    `;
    container.appendChild(div);
  });
}

// Load all
loadSection(playlists, "playlist-container");
loadSection(artists, "artist-container");
loadSection(albums, "album-container");

function searchItems() {
  const query = document.getElementById("searchInput").value.toLowerCase().trim();
  const allImages = document.querySelectorAll(".image-container");

  allImages.forEach(div => {
    const name = div.querySelector("img").alt.toLowerCase();
    if (name.includes(query) || query === "") {
      div.style.display = "inline-block"; // or "flex" depending on your layout
      div.style.opacity = "1";
      div.style.transform = "scale(1)";
    } else {
      div.style.display = "none"; // hide non-matching cards completely
    }
  });
}


// Optional: live search while typing
document.getElementById("searchInput").addEventListener("keyup", searchItems);