const songs = [
  "Alan Walker vs Coldplay - Hymn For The Weekend.mp3",
  "Arman Cekin & Faydee - Better Days ft. Karra.mp3",
    "bazanji-bow-down-feat-just-juice.mp3",
  "EPIC ROCK''Real Good Feeling'' by Oh The Larceny.mp3",
  "Firse Machayenge - Emiway Bantai.mp3",
  "FOALS - The Runner.mp3"
]

const createSongList = () => {
  const list = document.createElement('ol')

  for(let i = 0; i< songs.length; i++){
    const item = document.createElement('li')

    item.appendChild(document.createTextNode(songs[i]))

    list.appendChild(item)
  }
  return list
}

document.getElementById('songList').appendChild(createSongList())



songList.onclick= (e) => {
  const clickedItem = e.target
  const source = document.getElementById('source')
  source.src = clickedItem.innerText
//document.getElementById('currentlyPlayingSong').innerText = "Currently Playing: "
document.getElementById('currentSong').innerText = clickedItem.innerText

  player.load()
  player.play()
}

const playAudio = () =>{
if(player.readyState){
  player.play()
}

}

const pauseAudio = () => {
  player.pause()
}


const slider = document.getElementById('volumeSlider')
slider.oninput = (e) =>{
  const volume = e.target.value
  player.volume = volume
}

const updateProgress = () => {
  if(player.currentTime>0){
  const progressBar = document.getElementById('progress')

  progressBar.value= ( player.currentTime / player.duration ) * 100
}
}
