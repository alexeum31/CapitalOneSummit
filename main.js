let container = document.querySelector(".container")

const subtitles=document.querySelector(".subtitles");

const apiData= { 
    url: "https://subtitles-for-youtube.p.rapidapi.com",
    slash: "/subtitles",
    id: "/%7BvideoId%7",
    apiK : "f2b0ea9532msh4a7c440a376bc0cp1ef3e0jsne053e437c41f",
};

const {url, slash, id, apiK} = apiData;
//const apiURL= `${URL}${slash}${id}${apiK}`;
const apiURL= `https://subtitles-for-youtube.p.rapidapi.com/subtitles/5T3GY8PSiSI`;

//activate API call
//console.log(apiURL)


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f2b0ea9532msh4a7c440a376bc0cp1ef3e0jsne053e437c41f',
		'X-RapidAPI-Host': 'subtitles-for-youtube.p.rapidapi.com'
	}
};

fetch('https://subtitles-for-youtube.p.rapidapi.com/subtitles/5T3GY8PSiSI', options)
.then(response => response.json())
	// .then(response => console.log("this is repsonse", response)  
  .then(response => 
  {response.forEach(
    (subtext) => { console.log("this is subtext", subtext, "this is subtext data", subtext.text)
      let D = document.createElement("li");
      let a = document.createElement("p");
      // a.setAttribute("href", act_name.url);
      a.setAttribute("target", "_blank");
      // a.setAttribute("rel", "noopener noreferrer");
      // a.setAttribute("style", "padding-top: 5px;")
      a.textContent = subtext.text;
      D.className = "subtitles";
      D.appendChild(a);
      subtitles.appendChild(D);





          })})
	
       