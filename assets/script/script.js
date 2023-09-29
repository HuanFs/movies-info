//campos de entrada
let movie_title = document.querySelector("#enter_title");
let btn_search = document.querySelectorAll(".buttons button")[1]
let btn_reset = document.querySelectorAll(".buttons button")[0]
//campos de saida
let title = document.querySelector("#title");
let year = document.querySelector("#year");
let actors = document.querySelector("#actors");
let direction = document.querySelector("#director");
let sinopse = document.querySelector("#sinopse");
//eventos de procurar e limpar seleção
btn_search.addEventListener("click", SearchMovie);
btn_reset.addEventListener("click", Clear);
//função que processa e exibe os eresultados
async function SearchMovie(){
    let title_of_movie = movie_title.value;
    let url = await fetch(`http://www.omdbapi.com/?apikey=cdba40d8&t=${title_of_movie}`);
    let response = await url.json();
    console.log(response);
    title.value=response.Title;
    setTimeout((x)=>{
        response.Title=='N/A'?year.value="Não encontrado":year.value=response.Year;
    },1000);
    setTimeout((x)=>{
        response.Actors=='N/A'?actors.value="Não encontrado":actors.value=response.Actors;
    },2000);
    setTimeout((x)=>{
        response.Director=='N/A'?direction.value="Não encontrado":direction.value=response.Director;
    },3000);
    setTimeout((x)=>{
        response.Plot=='N/A'?sinopse.innerTextL="Não encontrado":sinopse.innerText=response.Plot;
    },4000);
}
//função que limpa os campos
function Clear(){
    let inputs = document.querySelectorAll("input");
    inputs.forEach((data)=>{
        data.value="";
    })
    sinopse.innerText="";
}
