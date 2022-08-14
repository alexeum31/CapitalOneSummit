let container = document.querySelector(".container")

const apiData {
    url: "https://www.googleapis.com/youtube/v3/captions";
    apiK : "/AIzaSyDIaEps24owhojXsQXOptOfMQC_YJmhPs4";
}

const {url, apiK} = apiData;
const apiURL= '${URL}${apiK}';

//activate API call
fetch (apiURL)
