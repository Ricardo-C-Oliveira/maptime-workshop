//these are base maps, each maps can be used in the layers parameter below
var light = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
});


//this is how we start our map, we inform where to center it and at hat zoom lvl (greater the zoom level closer it is)
//The 'map'refers to the div that will hold the map
var map = L.map('map', {
    center: [38.831502, -104.804521],
    zoom: 13,
    layers: [light]
});

$.getJSON("https://spreadsheets.google.com/feeds/list/1GrSO3ihNE50QCqJtUyyE1NK7xEcKWV0F7RMnR5f_ePU/o9y5h0e/public/values?alt=json", function(data) {
    var entry = data.feed.entry;

    for (i=0; i < entry.length; i++){
        L.marker([entry[i].gsx$latitude.$t, entry[i].gsx$longitude.$t]).bindPopup("<b>"+entry[i].gsx$businessname.$t+"</b><br><br>"+entry[i].gsx$typeofvenue.$t+"<br>"+entry[i].gsx$address.$t+"<br>"+entry[i].gsx$phonenumber.$t).addTo(map);
        console.log(entry[i])
    }

});



