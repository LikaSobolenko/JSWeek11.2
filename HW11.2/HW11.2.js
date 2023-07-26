const button = document.getElementById("button");
let result = "";
button.addEventListener("click", (event) => {
    event.preventDefault();
    let post = {
        name: document.getElementById("name").value,
        text: document.getElementById("text").value,
    };

    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify(post),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
    })
        .then((response) => response.json())
        .then((post) => {
            result += `
                                <div class='post'>
                                    <h1>${post.name}</h1>
                                    <div>${post.text}</div>
                                </div>
                                `;
            document.getElementById("result").innerHTML = result;
        })
        .catch((err) => console.log(err));

    clearAll();
});

function clearAll() {
    document.getElementById("name").value = "";
    document.getElementById("text").value = "";
}
