const errorAudio = new Audio("/audio/error.wav")
const apatheticQuack = new Audio("/audio/apatheticquack.mp3")

document.addEventListener('click', () => {
  errorAudio.play()
})

document.querySelector('img').addEventListener('click', () => {
  setTimeout(()=> {
    apatheticQuack.play()
  }, 500)
})