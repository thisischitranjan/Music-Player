
const music = new Audio("audio/17.mp3");

//music.play();
const songs = [
  {
    id: 1,
    songName: `Teri chunariya<br>
        <div class="subtitle">Alka yagnik | Kumar sanu </div>`,
    poster: "img/1.jpg",
  },
  {
    id: 2,
    songName: `52 Gaj Ka Daman<br>
        <div class="subtitle">Renuka Panwar</div>`,
    poster: "img/2.jpg",
  },
  {
    id: 3,
    songName: `Bohot Pyaar Karte Hai-( Female Version )<br>
        <div class="subtitle">Kavita Paudwal </div>`,
    poster: "img/3.jpg",
  },
  {
    id: 4,
    songName: `Soja Zara<br>
        <div class="subtitle">Madhushree | Manoj M</div>`,
    poster: "img/4.jpg",
  },
  {
    id: 5,
    songName: `Sajan sajan teri dulhan<br>
        <div class="subtitle">Alka yagnik</div>`,
    poster: "img/5.jpg",
  },
  {
    id: 6,
    songName: `Vaaste<br>
    <div class="subtitle">Dhvani Bhanushali</div>`,
     poster: "img/6.jpg",
  },
  {
    id: 7,
    songName: `Teri Aankhon Mein<br>
        <div class="subtitle">Darshan Raval</div>`,
    poster: "img/7.jpg",
  },
  {
    id: 8,
    songName: `Dard Karaara<br>
        <div class="subtitle">Sargam | Kumar sanu</div>`,
    poster: "img/8.jpg",
  },
  {
    id: 9,
    songName: `Dilbar <br>
        <div class="subtitle">Satyameva Jayate</div>`,
    poster: "img/9.jpg",
  },
  {
    
    id: 10,
    songName: `Meri jindagi<br>
        <div class="subtitle">Alan Walker</div>`,
    poster: "img/10.jpg",
  },
  {
    id: 11,
    songName: `Lagdi Lahore di<br>
        <div class="subtitle">Street Dancer 3D</div>`,
    poster: "img/11.jpg",
  },
  {
    id: 12,
    songName: `Hue Bechain <br>
        <div class="subtitle">Palak Muchhal | Yasser Desai</div>`,
    poster: "img/12.jpg",
  },
  {
    id: 13,
    songName: `Humein Tumse Hua Hai Pyar<br>
        <div class="subtitle">Udit Narayan | Alka Yagnik </div>`,
    poster: "img/13.jpg",
  },
  {
    id: 14,
    songName: `Raataan Lambia<br>
        <div class="subtitle">Jubin Nutiyal</div>`,
    poster: "img/14.jpg",
   
  },
  {
    id: 15,
    songName: `Lut gaye<br>
        <div class="subtitle">Alan Walker</div>`,
    poster: "img/15.jpg",
  },
  {
    id: 16,
    songName: `Duniya<br>
        <div class="subtitle">Luka chuppi</div>`,
    poster: "img/16.jpg",
  },
  {
    id: 17,
    songName: `Hare Krishna Hare<br>
        <div class="subtitle">Palak Muchhal</div>`,
    poster: "img/17.jpg",
  },
  {
    id: 18,
    songName: `Mehndi Hai Rachne Waali<br>
        <div class="subtitle">Anwessha | Shubham Sundaram </div>`,
    poster: "img/18.jpg",
  },
  {
    id: 19,
    songName: `Nain (Ek Haseena Thi Ek Deewana Tha)<br>
        <div class="subtitle">Palak Muchhal</div>`,
    poster: "img/19.jpg",
  },
  {
    id: 20,
    songName: `Tere Saath Hoon Main<br>
        <div class="subtitle">Raksha Bandhan</div>`,
    poster: "img/20.jpg",
  },
];

const artists = [
  {
    id: 1,
    art_Name: "arjit",
   
  },
  {
    id: 2,
    art_Name: "dhvani",
   
  },
  {
    id: 3,
    art_Name: "neha",
   
  },
  {
    id: 4,
    art_Name: "jubin",
   
  },
  {
    id: 5,
    art_Name: "guru",
   
  },
  {
    id: 6,
    art_Name: "akhil",
   
  },
  {
    id: 7,
    art_Name: "honey",
   
  },
  {
    id: 8,
    art_Name: "Diljit",
   
  },
  {
    id: 8,
    art_Name: "alan",
   
  },
  
];

// things to chang --------------------------------------------------

//title change 

//follow
let singer_name = document.getElementById("singer_name");
singer_name.innerHTML="Music_Studio"

let artist_img = document.getElementsByClassName("artist_img");
artist_img[0].innerHTML=`<img src="main_img/main.jfif" alt="" srcset=""> `
console.log(artist_img)
//-------------------------------------------------------------------------

let part_1 = Math.floor(0.5 * songs.length);
let part_2 = songs.length - part_1;
// console.log(part_1)

let menue_song = document.getElementsByClassName("menue_song")[0];
// console.log(menue_song)
for (let i = 0; i < part_1; i++) {
  let serial_no = songs[i].id;
  if (serial_no < 10) {
    serial_no = "0" + serial_no;
  }
  let songItem = document.createElement("li");
  songItem.classList.add("songItem");
  songItem.innerHTML = `<span>${serial_no}</span>
<img src="${songs[i].poster}" alt="" />
<h6 class="titlelist">
 ${songs[i].songName}
</h6>
<i class="playListPlay fa fa-solid fa-circle-play" id="${songs[i].id}"></i>`;

  menue_song.appendChild(songItem);

  //  console.log(songItem.innerHTML)
}


// part 2 == popular songs
let pop_song = document.getElementsByClassName("pop_song");

for (let j = part_1; j < songs.length; j++) {
  let serial_no = songs[j].id;
  if (serial_no < 10) {
    serial_no = "0" + serial_no;
  }
  let songItem = document.createElement("li");
  songItem.classList.add("songItem");
  songItem.innerHTML = `<div class="img_play">
<img src="${songs[j].poster}" alt="" />
<i class="playListPlay fa fa-solid fa-circle-play" id="${songs[j].id}"></i>
</div>
<h6>
${songs[j].songName}
</h6>`;

  pop_song[0].appendChild(songItem);

  //  console.log(songItem.innerHTML)
}


// popular artists

let art_list = document.getElementsByClassName("art_list");
for (let p = 0; p < artists.length; p++) {
  let li = document.createElement("li");
  li.classList.add("singer")
  li.innerHTML = ` <a href="${artists[p].art_Name}.html"><img src="singers_img/${artists[p].art_Name}.jpg" alt=""></a>`

   art_list[0].appendChild(li);
  //  console.log(li);
}


// let singer = document.getElementsByClassName("singer");
// Array.from(singer).forEach((element ,i) => {
//   singer[i].addEventListener("click", e=>{
//      e.preventDefault()
//     localStorage.setItem("singername", artists[i].art_Name);
//     console.log(e)   
//     location.href="actor.html"
     
       
//   })
  
// });


//search results
let search_results = document.getElementsByClassName("search_results");
for (let k = 0; k < songs.length; k++) {
  // let serial_no = songs[k].id;
  // if (serial_no < 10) {
  //   serial_no = "0" + serial_no;
  // }
  let card = document.createElement("a");
  card.classList.add("card");
  card.setAttribute("href","#"+ songs[k].id)
  // console.log(card)
  // card[k].href= "#"+ songs[k].id
  card.innerHTML = `<img src="${songs[k].poster}" alt="" />
  <h6 class="sr_title">
  ${songs[k].songName}
  </h6>`;
  search_results[0].appendChild(card);

  //  console.log(search_results[0].innerHTML)
}

let search_music = document.getElementById("search_music")
search_music.addEventListener("keyup",()=>{
  let input_value = search_music.value.toUpperCase();
  let array = search_results[0].getElementsByTagName('a')

  for (let index = 0; index < array.length; index++) {
    let as = array[index].getElementsByClassName('sr_title')[0]
    let text_value = as.textContent || as.innerHTML

    if (text_value.toUpperCase().indexOf(input_value)> -1) {
      array[index].style.display = "grid"
    } else {
      array[index].style.display = "none"
    }
  if( input_value==0){
    search_results[0].style.display = "none"
  }else{
    search_results[0].style.display = ""
  }

  }
  // console.log(input_value)
})



// playlist menue and on click play
var index = 1;
let prev = index; // previous song clicked
let songItem = document.getElementsByClassName("songItem");
let titlelist = document.getElementsByClassName("titlelist");
let title = document.getElementById("title");
let download_music = document.getElementById("download_music");
let poster_master_play = document.getElementById("poster_master_play");
let playListPlay = document.getElementsByClassName("playListPlay");
// console.log(title)

function control(index, prev) {
  music.src = `audio/${index}.mp3`;
  music.play();
  wave.classList.add("active1");
  masterPlay.classList.add("bi-pause-circle");
  masterPlay.classList.remove("bi-play-circle");
  // download
  download_music.href = `audio/${index}.mp3`;
  download_music.setAttribute("download", songs[index - 1].songName);

  // title and poster --- masterplay
  title.innerHTML = songs[index - 1].songName;
  poster_master_play.src = songs[index - 1].poster;

  // to make active  and deactive prev song
  if (prev >= 1) {
    songItem[prev - 1].style.background = `rgb(105, 105, 105, .0)`;
    songItem[index - 1].style.background = `rgb(105, 105, 105, .1)`;
    // titlelist[prev - 1].style.background = `transparent`;
    // titlelist[index - 1].style.background = `transparent`;
    //
    playListPlay[prev - 1].classList.remove("fa-circle-pause");
    playListPlay[prev - 1].classList.add("fa-circle-play");

    playListPlay[index - 1].classList.add("fa-circle-pause");
    playListPlay[index - 1].classList.remove("fa-circle-play");
  } else {
    songItem[index - 1].style.background = `rgb(105, 105, 105, .1)`;
    titlelist[index - 1].style.background = `transparent`;
    playListPlay[index - 1].classList.add("fa-circle-pause");
    playListPlay[index - 1].classList.remove("fa-circle-play");
  }
}

Array.from(playListPlay).forEach((e) => {
  e.addEventListener("click", (event) => {
    prev = index;
    index = event.target.id;
    // console.log(index)
    control(index, prev);
  });
});

// masterplay music play pause
let masterPlay = document.getElementById("masterPlay");
let wave = document.getElementById("wave");
masterPlay.addEventListener("click", () => {
  // console.log('clicked')
  if (music.paused || music.currentTime <= 0) {
    music.play();
    wave.classList.add("active1");
    masterPlay.classList.add("bi-pause-circle");
    masterPlay.classList.remove("bi-play-circle");

    playListPlay[index - 1].classList.add("fa-pause-circle");
    playListPlay[index - 1].classList.remove("fa-circle-play");
    playListPlay[index]
  } else {
    music.pause();
    wave.classList.remove("active1");
    masterPlay.classList.remove("bi-pause-circle");
    masterPlay.classList.add("bi-play-circle");

    playListPlay[index - 1].classList.remove("fa-circle-pause");
    playListPlay[index - 1].classList.add("fa-circle-play");
  }
});

// time start and end
// valume bar and progress bar
let start = document.getElementById("start");
let end = document.getElementById("end");
let seek = document.getElementById("seek");
let bar2 = document.getElementById("bar2");
let dot = document.getElementsByClassName("dot")[0];

music.addEventListener("timeupdate", () => {
  let music_curr_t = music.currentTime;
  let music_dur = music.duration;

  let min_e = Math.floor(music_dur / 60);
  let sec_e = Math.floor(music_dur % 60);
  // console.log(typeof music.duration);
  if (min_e < 10) {
    min_e = "0" + min_e;
  }
  if (sec_e < 10) {
    sec_e = "0" + sec_e;
  }

  if(music.duration){
  end.innerText = `${min_e}:${sec_e}`;
  }

  let min_s = Math.floor(music_curr_t / 60);
  let sec_s = Math.floor(music_curr_t % 60);
  // console.log(sec)
  if (min_s < 10) {
    min_s = "0" + min_s;
  }
  if (sec_s < 10) {
    sec_s = "0" + sec_s;
  }

  start.innerText = `${min_s}:${sec_s}`;

  let progressBar = parseInt((music_curr_t / music_dur) * 100);
  seek.value = progressBar;
  let seekbar = seek.value;
  bar2.style.width = `${seekbar}%`;
  dot.style.left = `${seekbar}%`;
});

seek.addEventListener("change", () => {
  music.currentTime = (seek.value * music.duration) / 100;
});

// volume
let vol_icon = document.getElementById("vol_icon");
let vol = document.getElementById("vol");
let vol_bar = document.getElementsByClassName("vol_bar")[0];
let vol_dot = document.getElementById("vol_dot");

vol.addEventListener("change", () => {
  if (vol.value == 0) {
    vol_icon.classList.remove("bi-volume-up-fill");
    vol_icon.classList.remove("bi-volume-down-fill");
    vol_icon.classList.add("bi-volume-off-fill");
  }
  if (vol.value > 0) {
    vol_icon.classList.remove("bi-volume-up-fill");
    vol_icon.classList.add("bi-volume-down-fill");
    vol_icon.classList.remove("bi-volume-off-fill");
  }
  if (vol.value > 50) {
    vol_icon.classList.add("bi-volume-up-fill");
    vol_icon.classList.remove("bi-volume-down-fill");
    vol_icon.classList.remove("bi-volume-off-fill");
  }

  let volume = vol.value;
  vol_bar.style.width = `${volume}%`;
  vol_dot.style.left = `${volume}%`;
  music.volume = volume / 100;
});

// next  and back music on click
let back = document.getElementById("back");
let next = document.getElementById("next");

back.addEventListener("click", () => {
  prev = index; // previous song clicked
  index--;
  if (index < 1) {
    index = songItem.length;
  }
  control(index, prev);
});

next.addEventListener("click", () => {
  prev = index; // previous song clicked
  index++;
  if (index > songItem.length) {
    index = 1;
  }
  control(index, prev);
  // console.log(index)
});

// scroll left right
let pop_song_left = document.getElementById("pop_song_left");
let pop_song_right = document.getElementById("pop_song_right");
// let pop_song =document.getElementsByClassName("pop_song");

pop_song_right.addEventListener("click", () => {
  // console.log("clicked")
  pop_song[0].scrollLeft += 330;
});

pop_song_left.addEventListener("click", () => {
  pop_song[0].scrollLeft -= 330;
});

let pop_art_left = document.getElementById("pop_art_left");
let pop_art_right = document.getElementById("pop_art_right");
let item = document.getElementsByClassName("item");

pop_art_right.addEventListener("click", () => {
  // console.log("clicked")
  item[0].scrollLeft += 315;
});

pop_art_left.addEventListener("click", () => {
  item[0].scrollLeft -= 315;
});

//shuffle
let shuffle = document.getElementsByClassName("shuffle")[0];
shuffle.addEventListener("click", () => {
  let a = shuffle.innerHTML;
  // console.log(a)
  switch (a) {
    case "next":
      shuffle.classList.add("bi-arrow-repeat");
      shuffle.classList.remove("bi-music-note-beamed");
      shuffle.classList.remove("bi-shuffle");
      shuffle.innerHTML = "repeat";
      break;

    case "repeat":
      shuffle.classList.remove("bi-arrow-repeat");
      shuffle.classList.remove("bi-music-note-beamed");
      shuffle.classList.add("bi-shuffle");
      shuffle.innerHTML = "random";
      break;

    case "random":
      shuffle.classList.remove("bi-arrow-repeat");
      shuffle.classList.add("bi-music-note-beamed");
      shuffle.classList.remove("bi-shuffle");
      shuffle.innerHTML = "next";
      break;
  }
});

const next_music = () => {
  prev = index; // previous song clicked
  index++;
  if (index > songItem.length) {
    index = 1;
  }
  // console.log(index)
  control(index, prev);
};

const repeat_music = () => {
  prev = index; // previous song clicked
  index;
  // console.log(index)
  control(index, prev);
};

const random_music = () => {
  prev = index; // previous song clicked
  if (index > songItem.length) {
    index = 1;
  } else {
    index = Math.floor(Math.random() * songs.length + 1);
  }
  // console.log(index)
  control(index, prev);
};

music.addEventListener("ended", () => {
  let b = shuffle.innerHTML;
  switch (b) {
    case "next":
      next_music();
      break;

    case "repeat":
      repeat_music();
      break;

    case "random":
      random_music();
      break;
  }
});

// search_result
let  ci =0 // card index
let cpi=ci; // card_prev_ind
function highlight(ci, cpi) {
  // to make active  and deactive prev song
  if (cpi >= 1) {
    songItem[cpi - 1].style.background = `rgb(105, 105, 105, .0)`;
    songItem[ci - 1].style.background = `rgb(105, 105, 105, .1)`;

  } else {
    songItem[ci - 1].style.background = `rgb(105, 105, 105, .1)`;
  }

}
let card_clicked = document.getElementsByClassName('card')
Array.from(card_clicked).forEach((element,i) => {
  element.addEventListener('click',(e)=>{
    cpi=ci;
    ci=i+1;
    highlight(ci,cpi)
   
    setTimeout(() => {
      songItem[ci - 1].style.background = `rgb(105, 105, 105, .0)`;
    }, 1000);

  })
  
});


//play
let play = document.getElementById("play");
play.addEventListener("click",(e)=>{
  random_music();
})

//follow
let follow = document.getElementById("follow");
follow.addEventListener("click",(e)=>{
  window.open("https://www.tseries.com/music","_blank");

})




