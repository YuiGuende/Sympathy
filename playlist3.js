let progress = document.getElementById('progress');
let song = document.getElementById('song');
let ctrlIcon = document.getElementById('ctrlIcon');
let forward = document.getElementById('forward');

song.onloadedmetadata = function () {
  progress.max = song.duration;
  progress.value = song.currentTime;
}

function playpause() {
  if (ctrlIcon.classList.contains("fa-circle-play")) {
  song.play();
  ctrlIcon.classList.remove("fa-circle-play");
  ctrlIcon.classList.add("fa-circle-pause");
  }
  else {
  song.pause();
  ctrlIcon.classList.add("fa-circle-play");
  ctrlIcon.classList.remove("fa-circle-pause");
  }
}
if (song.play()) {
  setInterval(() => {
    progress.value = song.currentTime;
  }, 500);
}

progress.onchange = function () {
  song.play();
  song.currentTime = progress.value;
  ctrlIcon.classList.add("fa-circle-pause");
  ctrlIcon.classList.remove("fa-circle-play");
}



var count = 0;
var rancount = [0,1,2,3,4,5];
var songs = [ 'music/happy/Muon_Roi_Ma_Sao_Con_436_Son_Tung_Mtp.mp3','music/happy/Qua_Lau_527_Vinh_Khuat.mp3',
  'music/happy/Thich_Qua_Rui_Na_258_Tlinh.mp3','music/happy/Yeu_Anh_Di_Me_Anh_Ban_Banh_Mi_442_Phuc_Du.mp3','music/happy/Yeu_Nam_349_Emily.mp3'
    ,'music/happy/Huong_Duong_340_Changg.mp3'];
var namesong=['Muộn Rồi Mà Sao Còn','Quá Lâu','Thích Quá Rùi Nà','Yêu Anh Đi Mẹ Anh Bán Bánh Mì','Yêu Nắm','Hướng Dương']
var author=['Sơn Tùng MTP','Vinh Khuất','TLinh','Phúc Du','Emily','Changg'];

function playNextSong() {  
  do {
    var max = 6;
    document.getElementById("song").src = songs[rancount[count]];
    document.getElementById('Namesong').innerText= namesong[rancount[count]];
    document.getElementById('author').innerText=author[rancount[count]];
    if (ctrlIcon.classList.contains("fa-circle-play")) {
      ctrlIcon.classList.remove("fa-circle-play");
      ctrlIcon.classList.add("fa-circle-pause");
      }
    count++;
    document.getElementById("song").play();
    if (count == max) {
      count = 0;
    }
  } while (max == 100);
}


slider.oninput = () => {
    console.log("Volume set to", ~~(slider.value))
  
    document.getElementById("song").volume = ~~(slider.value) * 0.01
  }

  function heart() {
    const element0 = document.getElementById("hearticon");  // Get the DIV element
    if (element0.classList.contains("fa-regular")) {
      element0.classList.remove("fa-regular");
      element0.classList.add("fa-solid");
    } else {
      element0.classList.remove("fa-solid");
      element0.classList.add("fa-regular");
    }
  }
  
  function heart1() {
    const element1 = document.getElementById("hearticon1");  // Get the DIV element
    if (element1.classList.contains("fa-regular")) {
      element1.classList.remove("fa-regular");
      element1.classList.add("fa-solid");
    } else {
      element1.classList.remove("fa-solid");
      element1.classList.add("fa-regular");
    }
  }
  
  function heart2() {
    const element2 = document.getElementById("hearticon2");  // Get the DIV element
    if (element2.classList.contains("fa-regular")) {
      element2.classList.remove("fa-regular");
      element2.classList.add("fa-solid");
    } else {
      element2.classList.remove("fa-solid");
      element2.classList.add("fa-regular");
    }
  }
  
  function heart3() {
    const element3 = document.getElementById("hearticon3");  // Get the DIV element
    if (element3.classList.contains("fa-regular")) {
      element3.classList.remove("fa-regular");
      element3.classList.add("fa-solid");
    } else {
      element3.classList.remove("fa-solid");
      element3.classList.add("fa-regular");
    }
  }
  
  function heart4() {
    const element4 = document.getElementById("hearticon4");  // Get the DIV element
    if (element4.classList.contains("fa-regular")) {
      element4.classList.remove("fa-regular");
      element4.classList.add("fa-solid");
    } else {
      element4.classList.remove("fa-solid");
      element4.classList.add("fa-regular");
    }
  }
  
  function heart5() {
    const element5 = document.getElementById("hearticon5");  // Get the DIV element
    if (element5.classList.contains("fa-regular")) {
      element5.classList.remove("fa-regular");
      element5.classList.add("fa-solid");
    } else {
      element5.classList.remove("fa-solid");
      element5.classList.add("fa-regular");
    }
  }
  
  function heart6() {
    const element6 = document.getElementById("hearticon6");  // Get the DIV element
    if (element6.classList.contains("fa-regular")) {
      element6.classList.remove("fa-regular");
      element6.classList.add("fa-solid");
    } else {
      element6.classList.remove("fa-solid");
      element6.classList.add("fa-regular");
    }
  }


  function song3_1() {
    var song = document.getElementById('song');
    var sourceMp3 = document.getElementById('song');
    sourceMp3.src = 'music/happy/Huong_Duong_340_Changg.mp3';
    document.getElementById('Namesong').innerText='Hướng Dương';
    document.getElementById('author').innerText='Changg';
    if (ctrlIcon.classList.contains("fa-circle-play")) {
      ctrlIcon.classList.remove("fa-circle-play");
      ctrlIcon.classList.add("fa-circle-pause");
      }
    song.load();
    song.play();
  }
  function song3_2() {
    var song = document.getElementById('song');
    var sourceMp3 = document.getElementById('song');
    sourceMp3.src = 'music/happy/Muon_Roi_Ma_Sao_Con_436_Son_Tung_Mtp.mp3';
    document.getElementById('Namesong').innerText='Muộn Rồi Mà Sao Còn';
    document.getElementById('author').innerText='Sơn Tùng MTP';
    if (ctrlIcon.classList.contains("fa-circle-play")) {
      ctrlIcon.classList.remove("fa-circle-play");
      ctrlIcon.classList.add("fa-circle-pause");
      }
    song.load();
    song.play();
  }
  function song3_3() {
    var song = document.getElementById('song');
    var sourceMp3 = document.getElementById('song');
    sourceMp3.src = 'music/happy/Qua_Lau_527_Vinh_Khuat.mp3';
    document.getElementById('Namesong').innerText='Quá Lâu';
    document.getElementById('author').innerText='Vinh Khuất';
    if (ctrlIcon.classList.contains("fa-circle-play")) {
      ctrlIcon.classList.remove("fa-circle-play");
      ctrlIcon.classList.add("fa-circle-pause");
      }
    song.load();
    song.play();
  }
  function song3_4() {
    var song = document.getElementById('song');
    var sourceMp3 = document.getElementById('song');
    sourceMp3.src = 'music/happy/Thich_Qua_Rui_Na_258_Tlinh.mp3';
    document.getElementById('Namesong').innerText='Thích Quá Rùi Nà';
    document.getElementById('author').innerText='TLinh';
    if (ctrlIcon.classList.contains("fa-circle-play")) {
      ctrlIcon.classList.remove("fa-circle-play");
      ctrlIcon.classList.add("fa-circle-pause");
      }
    song.load();
    song.play();
  }
  function song3_5() {
    var song = document.getElementById('song');
    var sourceMp3 = document.getElementById('song');
    sourceMp3.src = 'music/happy/Yeu_Anh_Di_Me_Anh_Ban_Banh_Mi_442_Phuc_Du.mp3';
    document.getElementById('Namesong').innerText='Yêu Anh Đi Mẹ Anh Bán Bánh Mì';
    document.getElementById('author').innerText='Phúc Du';
    if (ctrlIcon.classList.contains("fa-circle-play")) {
      ctrlIcon.classList.remove("fa-circle-play");
      ctrlIcon.classList.add("fa-circle-pause");
      }
    song.load();
    song.play();
  }
  function song3_6() {
    var song = document.getElementById('song');
    var sourceMp3 = document.getElementById('song');
    sourceMp3.src = 'music/happy/Yeu_Nam_349_Emily.mp3';
    document.getElementById('Namesong').innerText='Yêu Nắm';
    document.getElementById('author').innerText='Emily';
    if (ctrlIcon.classList.contains("fa-circle-play")) {
      ctrlIcon.classList.remove("fa-circle-play");
      ctrlIcon.classList.add("fa-circle-pause");
      }
    song.load();
    song.play();
  }

  function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
  
    }
    return array;
  }
  
  function shuffle2() {
    shuffle(rancount);
    playNextSong();
  }
  
  function playsong() {
    document.getElementById("song").src = 'music/happy/Huong_Duong_340_Changg.mp3';
    document.getElementById('Namesong').innerText='Hướng Dương';
    document.getElementById('author').innerText='Changg';
    if (ctrlIcon.classList.contains("fa-circle-play")) {
      ctrlIcon.classList.remove("fa-circle-play");
      ctrlIcon.classList.add("fa-circle-pause");
      }
    document.getElementById("song").play();
    count=0;
  }
  
  function backward() {
    if (count == 0) {
      count = songs.length - 1;
      document.getElementById('Namesong').innerText= namesong[rancount[count]];
      document.getElementById("song").src = songs[rancount[count]];
      document.getElementById('author').innerText=author[rancount[count]];
      if (ctrlIcon.classList.contains("fa-circle-play")) {
        ctrlIcon.classList.remove("fa-circle-play");
        ctrlIcon.classList.add("fa-circle-pause");
        }
      document.getElementById("song").play();
    } else {
      count--;
      document.getElementById('Namesong').innerText= namesong[rancount[count]];
      document.getElementById("song").src = songs[rancount[count]];
      document.getElementById('author').innerText=author[rancount[count]];
      if (ctrlIcon.classList.contains("fa-circle-play")) {
        ctrlIcon.classList.remove("fa-circle-play");
        ctrlIcon.classList.add("fa-circle-pause");
        }
      document.getElementById("song").play();
    }
  }
  
  function openlmao() {
    window.location.replace('playlistsetting.html');
  }
  function openprofile() {
    window.location.replace('viewingprofile.html');
  }