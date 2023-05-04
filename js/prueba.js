var app={};
var miCallback= datos =>{
    console.log(datos);
    app.prueba2=datos;
    var html = ""
    html += "<h2>Protagonista</h2>"
    app.prueba2.map(prueba =>{
        html +="<img src='" + prueba.img+"' ></img>";
        for(let propiedad of Object.keys(prueba)){
            html+="<li>"+propiedad+": "+prueba[propiedad]+"</li>";
        }
        html+="<hr/>"
    })


    document.getElementById("resultado2").innerHTML=html;
}
