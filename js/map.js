var mapa = document.getElementById('myMap');
var map = L.map(mapa).setView([12.094524658371103, -86.23796705874756], 7);


L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Derechos Reservados, MEFCCA 2023',
    maxZoom: 18,
}).addTo(map)


var depart = L.geoJson(depart, {
    onEachFeature: function(feature, layer){
        layer.bindPopup(feature.properties.name)
    }
}).addTo(map);


