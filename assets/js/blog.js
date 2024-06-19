const userName = document.getElementById('usernamebox');
const title = document.getElementById('titlebox');
const content = document.getElementById('contentbox');
const submitButton = document.getElementById('submit');


function saveBlog() {
    const blogList = JSON.parse(localStorage.getItem('blogList'));
    const post = {
        userName: userName.value.trim(),
        title: title.value.trim(),
        content: content.value.trim(),
    };

if(blogList === null){
    localStorage.setItem('blogList', JSON.stringify([post]));
    blogList.push(post);
}else{
    
    localStorage.setItem('blogList', JSON.stringify(blogList));
    };
};


document.addEventListener('DOMContentLoaded', function(){
document.getElementById('form-blog').addEventListener('submit', function(event){
        event.preventDefault();
        if (validateForm()){
            saveBlog();
            window.location.href = 'blog.html';
        }
    });
});

function validateForm(){
    const userName = document.getElementById('usernamebox');
    const title = document.getElementById('titlebox');
    const content = document.getElementById('contentbox');
    if(userName === ''){
        alert('Please enter your username! ');
    }
    if(title === ''){
        alert('Please enter a title! ');
    }
    if(content === ''){
        alert('Please enter some cotent! ');
        return false;
    }
    return true;
}