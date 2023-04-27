const btnE1 = document.getElementById("btn")
const animeContainer = document.querySelector(".anime-container")
const animeName = document.querySelector(".anime-name")
const imgE1 = document.querySelector(".anime-img")

btnE1.addEventListener("click", async function(){
    try {
        btnE1.disabled = true;
        btnE1.innerText = "loading..."
        animeName.innerText = "updating..."
        imgE1.src = "loading.svg"

        const response = await fetch("https://api.catboys.com/img")
        const data = await response.json()

        btnE1.disabled = false;
        btnE1.innerText = "Get Anime"

        animeContainer.style.display = "block";
        imgE1.src = data.url 
        animeName.innerText = data.artist
        animeName.classList.remove("newclass");
       
      
       
    } catch (error) {
        btnE1.disabled = false;
        btnE1.innerText = "Get Anime"
        imgE1.src = "image1.png"
       
        
        animeName.innerText = "Error occur....."
     
        animeName.classList.add("newclass");
        
    }
})