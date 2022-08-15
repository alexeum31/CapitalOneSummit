const searchFrom= document.querySelector('.search')
const subtitles=document.querySelector(".subtitles");
const input = document.querySelector('.input');

searchFrom.addEventListener('submit', retrieve);

//button and function creation
function retrieve(e){

  e.preventDefault();
  let videoURL = input.value;
  let videoID = videoURL.split("v=")[1]
  console.log ("videoID", videoID)
  callAPI(videoID)
}

//activate API call
function callAPI(videoID) {
  let apiURL= `https://subtitles-for-youtube.p.rapidapi.com/subtitles/${videoID}`;

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'f2b0ea9532msh4a7c440a376bc0cp1ef3e0jsne053e437c41f',
      'X-RapidAPI-Host': 'subtitles-for-youtube.p.rapidapi.com'
    }
  };
   
  fetch(apiURL, options)
  .then(response => response.json())
    .then(response => 
    {response.forEach(
      (subtext) => {
        let D = document.createElement("p");
        let a = document.createElement("p");
        a.textContent = subtext.text;
        D.className = "subtitles";
        D.appendChild(a);
        subtitles.appendChild(D);
        
      })})}



  

