document.getElementById("btnCriar").addEventListener("click", function ()
{
    const titulo = document.getElementById("titulo").value;
    const conteudo = document.getElementById("conteudo").value;

    fetch("http://jsonplaceholder.typicode.com/posts",{
        method: "POST",
        headers: {
            "Content-type": "aplication/json"
        },
        body: JSON.stringify({
            title: titulo,
            body: conteudo,
            userId: 1
        })

    })
    .then(res => res.json())
    .then(novoPost => {
        const jsonApiFormat = {
            data: {
                type: "POSTS",
                id: novoPost.id,
                attributes: {
                    title: novoPost.title,
                    body: novoPost.body
                }
            }
        };
        document.getElementById("saida").textContent =
        JSON.stringify(jsonApiFormat, null, 4)
    });
});