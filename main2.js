

var map = L.map('map').setView([0,0], 2); //inital zoom = 2


L.tileLayer('tiles/{z}/{x}/{y}.png',{
    minZoom : 0,
    maxZoom : 4, // the tilemap has support till zoom 4 only.
    noWrap : true,
}).addTo(map);

// the values below are hardcoded
var polygon = L.polygon([
    [65.094833, -139.965319],
    [64.496194, -4.297572],
    [0.7835, -5.000514],
    [0.720924,-140.107921]
],{color: 'blue'}).addTo(map);

var polygon2 = L.polygon([
    [50.983262, 33.024328],
    [51.294196, 131.911982],
    [-7.780021, 131.822991],
    [-7.696646,33.574814]
]).addTo(map);


var polygon3 = L.polygon([
    [-31.793566, -89.561647],
    [-31.799061, 85.682888],
    [-70.253341, 85.770366],
    [-70.309774,-89.59562]
]).addTo(map);


var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
}

function region1(e){
    popup 
    .setLatLng(e.latlng)
    .setContent("Snow land")
    .openOn(map);
}

function region2(e){
    popup 
    .setLatLng(e.latlng)
    .setContent("Desert")
    .openOn(map);
}

function region3(e){
    popup 
    .setLatLng(e.latlng)
    .setContent("INDIA")
    .openOn(map);
}

//use the below to get coordinates of points
//map.on('click', onMapClick); 

polygon.on('click', region1);

polygon2.on('click', region2);

polygon3.on('click', region3);

polygon.on('mouseover',() => {
    polygon.setStyle({fillColor: 'white', color : 'white'});
});

polygon.on('mouseout',() => {
    polygon.setStyle({fillColor: 'blue',color : 'blue'});
})

polygon2.on('mouseover',() => {
    polygon2.setStyle({fillColor: 'orange', color : 'orange'});
});

polygon2.on('mouseout',() => {
    polygon2.setStyle({fillColor: 'blue',color : 'blue'});
})

polygon3.on('mouseover',() => {
    polygon3.setStyle({fillColor: 'green', color : 'green'});
});

polygon3.on('mouseout',() => {
    polygon3.setStyle({fillColor: 'blue',color : 'blue'});
})