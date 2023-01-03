let breakingNewsimg = document.querySelector('#breakingNewsimg')

/* API, also known as Application Programming Interace.
This is a mechanism that enables two softwares 
to communicate with each other.*/

const apiKey = "a104850740bf4d808903102d1c02e980"

const fetchData = async (category,pageSize)=>{
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=
    ${category}&pageSize=${pageSize}&apiKey=${apiKey}`
    const data = await fetch(url)
    const response = await data.json()
    console.log(response);
    return response.articles

}

// adding breaking news

const add_treesNewscontent = (data)=> {
    breakingNewsimg.innerHTML = `<img src=${data[0].urlToImage}>`
}
fetchData('general',5).then(add_breaking)