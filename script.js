let musics = [{
    title: "Best Of You", artist: "Foo Fighters", src: "css/musicas/Best of You.mp3", img: "css/imagens/foo-fighters.jpg"
},

{
    title: "Dani California", artist: "Red Hot Chili Peppers", src: "css/musicas/Dani California.mp3", img: "css/imagens/download-rhcp2.jpg"
},
{
    title: "Can't Stop", artist: "Red Hot Chili Peppers", src: "css/musicas/Can't Stop.mp3", img: "css/imagens/download-rhcp.jpg"
},
{
    title: "Enter Sandman", artist: "Metallica", src: "css/musicas/Enter Sandman.mp3", img: "css/imagens/metallica.jpg"
},
{
    title: "Last Nite", artist: "The Strokes", src: "css/musicas/Last Nite.mp3", img: "css/imagens/the-strokes.jpg"
}
]


let music = document.querySelector("audio")
let indexMusic = 0
let durationMusic = document.querySelector('.end')
let image = document.querySelector(".front-img")
let nameMusic = document.querySelector(".description h2")
let nameArtist = document.querySelector(".description i")
let pop = document.querySelector(".pop")



changeMusic(indexMusic)




// Events
document.querySelector(".button-play").addEventListener("click", playMusic)

document.querySelector(".button-pause").addEventListener("click", pauseMusic)




music.addEventListener("timeupdate", updateLine)

document.querySelector(".button-back").addEventListener("click", () => {
    indexMusic--;
    if (indexMusic < 0) {
        indexMusic = 4;
    }
    changeMusic(indexMusic)
} )

document.querySelector(".button-next").addEventListener("click" , () => {
    
    indexMusic++;
    if (indexMusic > 4){
        indexMusic = 0;
    }
    
    changeMusic(indexMusic)
} )


// Functions
function changeMusic(index){
    music.setAttribute("src", musics[index].src)
    music.addEventListener("loadeddata", () => {
        nameMusic.textContent = musics[index].title
        nameArtist.textContent = musics[index].artist
        image.src = musics[index].img
        durationMusic.textContent = secondsToMinutes(Math.floor(music.duration))
        
        
        playMusic()
            document.querySelector(".button-pause").style.display = "none"
            document.querySelector(".button-play").style.display = "block" 
        pauseMusic()
        
        
    })
}

function playMusic(){
    music.play()
    document.querySelector(".button-pause").style.display = "block"
    document.querySelector(".button-play").style.display = "none"
    
}


function pauseMusic(){
    music.pause()
    document.querySelector(".button-pause").style.display = "none"
    document.querySelector(".button-play").style.display = "block"   
}


function updateLine(){
    let line = document.querySelector('progress');
    line.style.width = Math.floor((music.currentTime / music.duration) * 100) + '%'
    let elapsedTime = document.querySelector(".start")
    elapsedTime.textContent = secondsToMinutes(Math.floor(music.currentTime))

}

function secondsToMinutes(seconds){
    let fieldMinutes = Math.floor(seconds / 60)
    let fieldSeconds = seconds % 60
    if (fieldSeconds < 10){
        fieldSeconds = "0" + fieldSeconds
    }
    return fieldMinutes + ":" + fieldSeconds

}











