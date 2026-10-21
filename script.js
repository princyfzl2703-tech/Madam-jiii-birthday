const startBtn = document.getElementById("startBtn");

if(startBtn){
  startBtn.addEventListener("click", () => {
    document.body.classList.add("fade-out");

    setTimeout(() => {
      window.location.href = "quiz.html";
    }, 800);
  });

  // hearts + stars only on intro page
  function createEffect(type, emoji){
    const el = document.createElement("div");
    el.classList.add(type);
    el.innerHTML = emoji;

    el.style.left = Math.random() * 100 + "vw";
    el.style.fontSize = (Math.random() * 18 + 10) + "px";
    el.style.animationDuration = (Math.random() * 3 + 4) + "s";

    document.getElementById("effects").appendChild(el);

    setTimeout(() => el.remove(), 7000);
  }

  setInterval(() => createEffect("heart", "💖"), 300);
  setInterval(() => createEffect("star", "✨"), 500);
}


// QUIZ LOGIC (only runs on quiz page)
const questions = [
  { q: "What's the nickname that I gave you??", a: "rasmalai" },
  { q: "What's that one thing which I love to eat the most?", a: "ice cream" },
  { q: "Which was the first song I sang for you?", a: "mere samne wali khidki pe ek chand ka tukda rehta h" },
  { q: "Our fav memory?", a: "hehehehe" },
  { q: "What's the nickname that you gave me?", a: "kaju katli" }
];

let i = 0;

const qBox = document.getElementById("question");
const input = document.getElementById("answer");
const nextBtn = document.getElementById("nextBtn");

function showQ(){
  if(!qBox) return;
  qBox.innerText = questions[i].q;
  input.value = "";
}

if(nextBtn){
  showQ();

  nextBtn.addEventListener("click", () => {
    let ans = input.value.toLowerCase().trim();

    if(ans === questions[i].a){
      i++;

      if(i < questions.length){
        showQ();
      } else {
        document.body.innerHTML = `
          <div class="box">
            <h2>Access Granted 💖✨</h2>
            <p>Welcome to the birthday website 🎀</p>
          </div>
        `;
      }
    } else {
      alert("Wrong answer 😭 try again!");
    }
  });
}