var latitude= 40.93959227072959
var longitude= -74.12629464050427

//init mapbox
mapboxgl.accessToken = 'pk.eyJ1IjoidGllbnhpb24iLCJhIjoiY2xlZW1ocXBvMDJ4czN2bWN3N2JmdmVoMSJ9.sktSP6QOaZX1Ai-a52JmVQ'
var map = new mapboxgl.Map({
	container: 'map',
	style: 'mapbox://styles/mapbox/streets-v11',
	center: [latitude,longitude],
	zoom: 22,
})

map.addControl(
	new MapboxGeocoder({
		accessToken: mapboxgl.accessToken,
		mapboxgl: mapboxgl
	})
);

var img1= document.querySelector("#bethesda")
var marker1 = new mapboxgl.Marker({
        element: img1
})
.setLngLat([ -73.97087767962277, 40.77433194895486])
.addTo(map); 

var img2= document.querySelector("#empire")
var marker2 = new mapboxgl.Marker({
        element: img2
})
.setLngLat([ -73.98566440188122, 40.748497375072525])
.addTo(map); 

var img3= document.querySelector("#freedomtower")
var marker3 = new mapboxgl.Marker({
        element: img3
})
.setLngLat([ -74.01316930188212, 40.71306123769563])
.addTo(map); 

var img4= document.querySelector("#liberty")
var marker4 = new mapboxgl.Marker({
        element: img4
})
.setLngLat([ -74.04446821537368,  40.689290055281226])
.addTo(map); 

var img5= document.querySelector("#naturalhistorymuseum")
var marker5 = new mapboxgl.Marker({
        element: img5
})
.setLngLat([-73.97399893071677, 40.7813646990159])
.addTo(map); 


map.addControl(
   new MapboxDirections({
       accessToken: mapboxgl.accessToken
   }),
   'top-left'
);