
const container = document.querySelector('.container');
let limit=25;
let pageCount=1;
let postCount=1;

const getPost=async()=>{
    const response=await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${pageCount}`);
    const data=await response.json();

    data.map((cur,index)=>{
        const htmlData=`    <div class="post">
        <p class="post-id">${postCount++}</p>
        <h2 class="title">${cur.title}</h2>
        <p class="body">${cur.body}</p>
    </div>`

    container.insertAdjacentHTML('beforeend',htmlData);
    })
}

getPost();

const moreData=()=>{
    setTimeout(()=>{
        pageCount++;
        getPost();
    },100)
}
window.addEventListener("scroll" , ()=>{
    const{scrollHeight,clientHeight,scrollTop}=document.documentElement;
    if(scrollTop+clientHeight>=scrollHeight){
       moreData();
    }
})