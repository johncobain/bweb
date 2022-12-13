async function loadPosts(){
    try{
        let req = await fetch('https://jsonplaceholder.typicode.com/posts');
        let json = await req.json();

        montarBlog(json);


        // fetch('https://jsonplaceholder.typicode.com/posts')
        //     .then(res => res.json())
        //     .then(json => {
        //         montarBlog(json);
        //     });
    }catch(err){
        console.log(`EROOR: ${err}`);
    }
}




function montarBlog(lista){
    for(let i in lista){
        let html = document.createElement('div');
        html.classList.add('post');

        html.innerHTML = `
        <h3>${lista[i].title}</h3>
        <p>${lista[i].body}</p>
        `
        document.getElementById('posts').appendChild(html)
    }
};
