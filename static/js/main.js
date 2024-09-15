const buttonGeneration = document.getElementById("buttonGeneration")
const buttonGenerationIcon = document.getElementById("buttonGenerationIcon")

const numberFront = document.getElementById("numberFront")
const numberBack = document.getElementById("numberBack")

const cardFront = document.getElementById("cardFront")
const cardBack = document.getElementById("cardBack")

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}



click = 0
buttonGeneration.onclick = function () {
  click = click + 1
  if (click == 1) {
    buttonGeneration.disabled = true;
    cardFront.style["transform"] = "perspective(600px) rotateY(-180deg)"
    cardBack.style["transform"] = "perspective(600px) rotateY(0deg)"
    buttonGenerationIcon.style["animation-name"] = "rotate-1"

    randomNumberBack = getRandomInt(1, 6)
    numberBack.innerHTML = `${randomNumberBack}`

    goTimer(1)

  } if (click == 2) {
    numberFront.classList.remove("start")
    buttonGeneration.disabled = true;

    cardBack.style["transform"] = "perspective(600px) rotateY(180deg)"
    cardFront.style["transform"] = "perspective(600px) rotateY(0deg)"
    buttonGenerationIcon.style["animation-name"] = "rotate-1"

    randomNumberFront = getRandomInt(1, 6)
    numberFront.innerHTML = `${randomNumberFront}`

    goTimer(1)

  }


}

function goTimer(time) {
  let timer = setInterval(() => {
    if (time > 1) {
      console.log(time);
      --time
    } else {
      clearInterval(timer);
      buttonGeneration.disabled = false;
      buttonGenerationIcon.style.removeProperty("animation-name")
      if (click == 2) {
        click = 0
      }
    }
  }, 1000)
}