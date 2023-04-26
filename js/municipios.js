const listaUsuarios = async () =>{
    const response = await fetch ("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    
    let tablebody= ``;
    users.forEach((user,index) => {
        tablebody += `<tr>
        <td>${user.id}</td>
        <td>${user.name}</td>
        <td>${user.username}</td>
        <td>${user.email}</td>
        
        </tr>`;
        
    });
    document.getElementById("tableUser2").innerHTML=tablebody;
};

window.addEventListener("load", function(){
    listaUsuarios();

});