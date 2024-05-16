let container = document.querySelector('.container');

function displayBlogPosts() {
   const blogList = JSON.parse(localStorage.getItem('blogList'));
    blogList.forEach(element=> {
    const child = document.createElement('div');
    const title = document.createElement('h2')
    const userName = document.createElement('h3')
    const content = document.createElement('p')
    title.innerHTML = element.title
    title.innerHTML = element.userName
    title.innerHTML = element.content
    child.appendChild(title)
    child.appendChild(userName)
    child.appendChild(content)
    blogPost.appendChild(child)
   });
}
displayBlogPosts();