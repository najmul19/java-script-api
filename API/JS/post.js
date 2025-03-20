function loadPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res=>res.json())
        .then(data=>displaPosts(data))
    
}
function displaPosts(data){
    // for( const post of data){
    //     console.log(post)
    // }

    const postContainer=  document.getElementById('post-container')
    for( const post of data){
        const div  = document.createElement('div');
        div.classList.add('post')
        console.log(post)
        div.innerHTML=`
        <h4>User-${post.userId}</h4>
        <h5>Post: ${post.title}</h5>
        <p>Post Description: ${post.body}</p>
        `
        postContainer.appendChild(div)
    }
}
loadPosts();