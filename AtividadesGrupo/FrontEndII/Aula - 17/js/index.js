let random = document.getElementById("random");

random.addEventListener('click', function (e){
e.preventDefault();

fetch("https://randomuser.me/api/")
    .then(response => {
        return response.json();
    })
    .then(data => {        
            renderizarDadosUsuario(data);          
    })
    .catch(
        function(erro){
        
        }
    );
})

function atualizaPagina() {
window.location.reload();
}

function renderizarDadosUsuario(usuarioRandoms) {

    for (const usuario of usuarioRandoms.results) {        
        
        console.log(usuario);
         
        let ImgUser =document.getElementById("ImgUser");
        ImgUser.src = usuario.picture.large;

        let emailUsuario = document.getElementById("emailUsuario"); 
        emailUsuario.textContent=`${usuario.email}`;       

        let nomeUsuario = document.getElementById("nomeUsuario");
        nomeUsuario.textContent = `${usuario.name.first} ${usuario.name.last}`;
        
         
    }
}
