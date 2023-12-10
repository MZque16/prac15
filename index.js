let a = 0

function load() {
    a += 1
    if (a > 100) {
        a = 1
    }
    fetch(`https://jsonplaceholder.typicode.com/posts/${a}`).then(response => {
        return response.json()
    }).then(data => document.querySelector('.content').insertAdjacentHTML('beforeend', `<div class="post">
                                                                                            <h2>${data.id}. ${data.title}</h2>
                                                                                            <p>${data.body}</p>
                                                                                        </div>`))
}
setInterval(() => {load()},2000);
