   // GeoJSON input features
    // The image and url properties of the features will be used in
    // the tooltips
    var features = [{
        "geometry": { "type": "Point", "coordinates": [-77.03, 38.90]},
        "properties": {
            "image": "http://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/DCmontage4.jpg/250px-DCmontage4.jpg",
            "url": "http://en.wikipedia.org/wiki/Washington,_D.C.",
            "city": "Washington, D.C."
        }
    }, {
        "geometry": { "type": "Point", "coordinates": [-87.63, 41.88]},
        "properties": {
            "image": "http://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Chicago_montage.jpg/300px-Chicago_montage.jpg",
            "url": "http://en.wikipedia.org/wiki/Chicago",
            "city": "Chicago"
        }
    }, {
        "geometry": { "type": "Point", "coordinates": [-74.00, 40.71]},
        "properties": {
            "image": "http://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/NYC_Montage_2011.jpg/275px-NYC_Montage_2011.jpg",
            "url": "http://en.wikipedia.org/wiki/New_York_City",
            "city": "New York City"
        }
    }];

    // Create map
    var map = mapbox.map('map');
    map.addLayer(mapbox.layer().id('ethanmax.map-drf7bifz'));

    // Create and add marker layer
	
    var markerLayer = mapbox.markers.layer().features(features);
    var interaction = mapbox.markers.interaction(markerLayer);
    map.addLayer(markerLayer);

    // Set a custom formatter for tooltips
    // Provide a function that returns html to be used in tooltip
    interaction.formatter(function(feature) {
        var o = '<a target="_blank" href="' + feature.properties.url + '">' +
            '<img src="' + feature.properties.image + '">' +
            '<h2>' + feature.properties.city + '</h2>' +
            '</a>';

        return o;
    });
	
