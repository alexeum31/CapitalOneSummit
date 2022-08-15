const searchFrom= document.querySelector('.search')
const subtitles=document.querySelector(".subtitles");
const input = document.querySelector('.input');

searchFrom.addEventListener('submit', retrieve);

//button creation
function retrieve(e){

  e.preventDefault();
  let videoURL = input.value;
  let videoID = videoURL.split("v=")[1]
  console.log ("videoID", videoID)
  callAPI(videoID)
}
//api URL creation

// const apiData= { 
    // url: "https://subtitles-for-youtube.p.rapidapi.com",
//     slash: "/",
//     id: videoID
// };

// const {url, slash, id} = apiData;
// const apiURL= `${URL}${slash}${id}`;

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



  

//rong will send vid on similar api that uses a sesarch bar. 
//see how the js is able to aquire the text that is within the search bar. 
//then, use js to split the url. get the last part. 
//set it to a variable, have that variable connect to the constant. 
//in my fetch it will take in parts of the url and the id. 
//function called on a search, difference is take the string to get the last part and set that as the constant.

//right now, fetch isnt a function. its just being ran as soon as the file loaded which is everytime i refresh
//i want it to be called after the input value. wrap fetch in the function and call the function
//write a function and put the fetch stuff in there