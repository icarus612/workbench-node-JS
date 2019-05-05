let paltformAnimation = (time, target, color1, color2, howMany) => {
  let scrollBG = [];
  let animateBG = (t, x, c1, c2) => {
    scrollBG[scrollBG.length] =
      anime({
        targets: x,
        backgroundColor: [c2, c1],
        easing: "linear",
        autoplay: false,
        duration: t,
        delay: t * scrollBG.length
      })
  }
  let first = (i) => {i % 2 == 0 ? color1 : color2}
  let second = (i) => {i % 2 == 0 ? color2 : color1}
  for (let i = 0; i < howMany; i++){
    scrollBG.length == 0 ? animateBG(time, target, color1, color1) : animateBG(time, target, first(i), second(i));
  }
  console.log(scrollBG)
  return scrollBG
}

let animation = []
animation[0] = paltformAnimation(1000, ".bg-solid-darkblue", "#F1F8FF", "#004589", 4)
animation[1] = paltformAnimation(1000, ".step", "#F1F8FF", "#004589", 4)
let fullHeight = Math.floor(document.getElementById("fullHeight").clientHeight/4);

window.onscroll = () => {
  let solutions = document.getElementById("solutions");
  for (let j = 0; j < animation.length; j++){
    let x = Math.floor(animation[j][animation[j].length-1].currentTime/1000)
    for (i = 0; i < animation[j].length; i++){
       animation[j][i].seek((window.scrollY / (solutions.clientHeight * 6)) * animation[j][i].duration);
     }
     animation[j][x].seek((window.scrollY / (solutions.clientHeight * 6)) * animation[j][ animation[j].length-1 ].duration);
     console.log(animation[j][x].currentTime)
  }
}





  //////                 //////
 // CURRENT WORKING VERSION //
//////                 //////

// (for now until we get the one up top worked out) //

let scrollBG = [];
const time = 1000; // this var effects nothing but dont touch it the time must stay constant for time delay

let animateBG = (el, c1, c2) => {
    return(
        anime({
            targets: el,
            backgroundColor: [c1, c2],
            easing: "linear",
            autoplay: false,
            duration: time,
            delay: time * scrollBG.length
        })
    )
}
scrollBG[scrollBG.length] = animateBG(".bg-solid-darkblue", "#004589", "#F1F8FF")
scrollBG[scrollBG.length] = animateBG(".bg-solid-darkblue", "#F1F8FF", "#004589")
scrollBG[scrollBG.length] = animateBG(".bg-solid-darkblue", "#004589", "#F1F8FF")
scrollBG[scrollBG.length] = animateBG(".bg-solid-darkblue", "#F1F8FF", "#004589")


let startColor = document.getElementById("solutions");
let fullHeight = Math.floor(document.getElementById("fullHeight").clientHeight/4);
startColor.style.backgroundColor = "#004589";
window.onscroll = () => {
    let x = Math.floor(scrollBG[scrollBG.length-1].currentTime/time)
    let y = Math.floor(scrollBG[scrollBG.length-1].currentTime)

    for (i = 0; i < scrollBG.length; i++){
        scrollBG[i].seek((window.scrollY / (time * 6)) * scrollBG[i].duration);
    }
    scrollBG[x].seek((window.scrollY / (time * 6)) * scrollBG[scrollBG.length-1].duration);

    y < 20 ? startColor.style.backgroundColor = "#004589" : console.log(y)

};
