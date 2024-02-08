let words = ["scissors", "paper", "rock", "organic", "horrid", "ducks", "hannibal", "chuck", "handmaiden", "rocky", "decide", "cyborg", "javascript", "snakes", "knight", "night", "lunatic", "future", "germany", "burmese", "terror", "woman", "either", "lighthouse", "square", "honor", "color", "ramen", "adore", "amazing"];

let rand;

function phoneHard() {
  var str = "";
  for (let i = 0; i < 15; i++) {
    rand = Math.floor(Math.random() * 31);
    if (i == 14) {
      str += words[rand];
    }
    else {
      str += words[rand] + " ";
    }
  }
  return str;
}

function phoneMid() {
  var str = "";
  for (let i = 0; i < 10; i++) {
    rand = Math.floor(Math.random() * 31);
    if (i == 9) {
      str += words[rand];
    }
    else {
      str += words[rand] + " ";
    }
  }
  return str;
}
function phoneEase() {
  var str = "";
  for (let i = 0; i < 5; i++) {
    rand = Math.floor(Math.random() * 31);
    if (i == 4) {
      str += words[rand];
    }
    else {
      str += words[rand] + " ";
    }
  }
  return str;
}
function compHard() {
  var str = "";
  for (let i = 0; i < 20; i++) {
    rand = Math.floor(Math.random() * 31);
    if (i == 19) {
      str += words[rand];
    }
    else {
      str += words[rand] + " ";
    }
  }
  return str;
}
function compMid() {
  var str = "";
  for (let i = 0; i < 15; i++) {
    rand = Math.floor(Math.random() * 31);
    if (i == 14) {
      str += words[rand];
    }
    else {
      str += words[rand] + " ";
    }
  }
  return str;
}
function compEase() {
  var str = "";
  for (let i = 0; i < 10; i++) {
    rand = Math.floor(Math.random() * 31);
    if (i == 9) {
      str += words[rand];
    }
    else {
      str += words[rand] + " ";
    }
  }
  return str;
}





let phony = false;
let comp = false;

let ease = false;
let mid = false;
let diff = false;

function phone() {
  phony = true;
  document.getElementById("phone").style.backgroundColor = "green";
  document.getElementById("computer").style.display = "none";
}
function computer() {
  comp = true;
  document.getElementById("computer").style.backgroundColor = "green";
  document.getElementById("phone").style.display = "none";
}

function easy() {
  ease = true;
  document.getElementById("easy").style.backgroundColor = "green";
  document.getElementById("medium").style.display = "none";
  document.getElementById("hard").style.display = "none";
}
function medium() {
  mid = true;
  document.getElementById("medium").style.backgroundColor = "green";
  document.getElementById("easy").style.display = "none";
  document.getElementById("hard").style.display = "none";
}
function hard() {
  diff = true;
  document.getElementById("hard").style.backgroundColor = "green";
  document.getElementById("medium").style.display = "none";
  document.getElementById("easy").style.display = "none";
}

function restart() {
  location.reload();
}

function goFunc() {

     document.addEventListener('keypress', function(event) {
       if (event.key === "Enter") {
         answer();
       } 
     });


  
  document.getElementById("enter").style.display = "block";
  
  if (phony && ease) {
    document.getElementById("prompter").textContent = phoneEase();
  }
  else if (phony && mid) {
    document.getElementById("prompter").textContent = phoneMid();
  }
  else if (phony && diff) {
    document.getElementById("prompter").textContent = phoneHard();
  }
  else if (comp && ease) {
    document.getElementById("prompter").textContent = compEase();
  }
  else if (comp && mid) {
    document.getElementById("prompter").textContent = compMid();
  }
  else if (comp && diff) {
    document.getElementById("prompter").textContent = compHard();
  }
}


let enter = false;

function answer() {
  enter = true;
  var compareVal = document.getElementById("typebox").value;
  var replicate = document.getElementById("prompter").textContent;
  var realRep = replicate + " ";
  var realerRep = " " + replicate;
  var equalizer = compareVal.localeCompare(replicate);
  var equalizerReal = compareVal.localeCompare(realRep);
  var equalizerRealest = compareVal.localeCompare(realerRep);

  
  if (equalizer == 0 || equalizerReal == 0 || equalizerRealest == 0) {
    Swal.fire({
      title: "Nice!",
      text: "You win!",
      icon: "success"
    });

  }
  else {
    Swal.fire({
      title: "Oh No!",
      text: "The text does not match. Try again.",
      icon: "error"
    });

  }

}

function timer(time) {
  let countdown = time;
  var downloadTimer = setInterval(function() {
    if (countdown <= 0 && !enter) {
      clearInterval(downloadTimer);
      alert("You ran out of time! Womp womp");
      location.reload();
    }
    document.getElementById("stop").value = time - countdown;
    countdown -= 1;
  }, 10);

}

function timerCall() {
  timer(3000);
}
