let listRepos = document.querySelector(".repositories_list")


async function fetchRepos(){
    let response = await fetch("https:/api.github.com/users/Mattferreira1/repos")
    let data = await response.json()
    console.log(data);
   renderList(data) 
}


function renderList(data){
    data.map(repo=>{
        let novaDiv = document.createElement("li");
        novaDiv.classList.add("list_item")
        // console.log(repo.homepage)
        // if(repo.homepage != null){
        //     let iframe = document.createElement("iframe")
        //     iframe.setAttribute("src", repo.homepage)
        //     novaDiv.appendChild(iframe)
        // }
        novaDiv.innerHTML= `
        <h1>${repo.name}</h1>`
        listRepos.appendChild(novaDiv)
    })
}


fetchRepos()