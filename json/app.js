

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => {
        let menu = document.getElementById('users');
        let opciones = '';
        for (let i = 0; i < json.length; i++) {
            opciones += `<option value="${json[i].id}">${json[i].username}</option>`;
        }
        menu.innerHTML = opciones;
    })

const btnmenu = document.getElementById("users");
btnmenu.addEventListener("change", () => {
    //console.log(btnmenu.value);
    fetch('https://jsonplaceholder.typicode.com/users/' + btnmenu.value)
        .then(response => response.json())
        .then(json => {
            //console.log(json);
            let infoUsers = document.getElementById('infousers')
            let datos = '';
            datos += `<form><br><label for="nombre">Nombre
            <br><input  type="text" value="${json.name}"id=txtNombre"></label>
            <br><label  for="username">Username
            <br><input  type="text" value="${json.username}"id=txtUsername"></label>
            <br><label for="correo">Correo
            <br><input  type="text" value="${json.email}"id=txtCorreo"></label>
            <br><label for="telefono">Telefono
            <br><input  type="text" value="${json.phone}"id=txtTelefono"></label>
            <br><label for="ciudad">Ciudad
            <br><input  type="text" value="${json.address.city}"id=txtTelefono"></label>
             </form>` 
            infoUsers.innerHTML = datos;

        })
});
const btnpost = document.getElementById("btnpost");
btnpost.addEventListener("click", () => {
    fetch('http://jsonplaceholder.typicode.com/posts?userId=' + btnmenu.value)
        .then(respone => respone.json())
        .then(json => {
            let divpost = document.getElementById("post")
            let datos = "";
            json.forEach(post => {
                datos +=
            `<div id="pub${post.id}">
                <h2>${post.title}</h2>
                <p>${post.body}</p>
                <button type="button" onclick="mostrarCom(${post.id})">Mostrar comentarios</button>
                <div id="pcom${post.id}"></div>
            </div>`

            });
            divpost.innerHTML = datos;
            //for(i=0, i<10, i++)
        })
});

function mostrarCom(id){
    fetch('http://jsonplaceholder.typicode.com/post/' + id+ '/comments')
        .then(respone => respone.json())
        .then(json => {
            let divcomentarios=document.getElementById('pcom'+ id);
            let coments='';
            json.forEach(comentario => {
                coments += `<h5>${comentario.name}</h5><p>${comentario.body}</p>`;
            });
            divcomentarios.innerHTML= `${coments} <button type="button" onclick="ocultarCom(${id})">Ocultar comentarios</button>`;  

        });
};
function ocultarCom(id){
     let divcomentarios=document.getElementById('pcom'+id);
     divcomentarios.innerHTML="";
}

