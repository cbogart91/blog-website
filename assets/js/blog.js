const user = document.getElementById('usernamebox');
const title = document.getElementById('titlebox');
const content = document.getElementById('contentbox');
const submitButton = document.getElementById('submit');

function saveBlog() {
    const blogList = {
        user: user.value,
        title: title.value,
        content: content.value,
    };

localStorage.setItem('blogList', JSON.stringify(blogList));

if(blogList === null) {
    localStorage.setItem('saveBlogList', JSON.stringify([post]));
} else {
   
    localStorage.setItem('blogList', JSON.stringify(blogList));
}};

document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('form-blog').addEventListener
    ('submit', function(event){
        event.preventDefault();
        if (validateForm()){
            saveBlog();
            window.location.href = 'blog.html';
        }
    });
});

function validateForm(){
    const user = document.getElementById('usernamebox');
    const title = document.getElementById('titlebox');
    const content = document.getElementById('contentbox');
    if(user === ''){
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