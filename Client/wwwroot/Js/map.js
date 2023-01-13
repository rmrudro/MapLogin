


//function hello() {
//    console.log("Hello World");
//}

function show_map(value) {
   
    if (value == '0') {
        document.getElementById("mapcontainer").innerHTML = "";
        var map = new ol.Map({
            target: 'mapcontainer',
            layers: [
                new ol.layer.Tile({
                    source: new ol.source.OSM()
                })
            ],
            view: new ol.View({
                center: ol.proj.fromLonLat([135.019, 34.609]),
                zoom: 10,
                maxZoom: 16,
                minZoom: 10
            })
        });
    }
    else if (value == '1') {
        document.getElementById("mapcontainer").innerHTML = "";
        var map = new ol.Map({
            target: 'mapcontainer',
            layers: [
                new ol.layer.Tile({
                    source: new ol.source.OSM()
                })
            ],
            view: new ol.View({
                center: ol.proj.fromLonLat([135.538, 34.65]),
                zoom: 12,
                maxZoom: 16,
                minZoom: 10
            })
        });
    }

    else if (value == '2') {
        document.getElementById("mapcontainer").innerHTML = "";
        var map = new ol.Map({
            target: 'mapcontainer',
            layers: [
                new ol.layer.Tile({
                    source: new ol.source.OSM()
                })
            ],
            view: new ol.View({
                center: ol.proj.fromLonLat([135.4, 34.497]),
                zoom: 12,
                maxZoom: 16,
                minZoom: 10
            })
        });
    }

    else if (value == '3') {
        document.getElementById("mapcontainer").innerHTML = "";
        var map = new ol.Map({
            target: 'mapcontainer',
            layers: [
                new ol.layer.Tile({
                    source: new ol.source.OSM()
                })
            ],
            view: new ol.View({
                center: ol.proj.fromLonLat([135.213, 34.663]),
                zoom: 12,
                maxZoom: 16,
                minZoom: 10
            })
        });
    }

    else if (value == '4') {
        document.getElementById("mapcontainer").innerHTML = "";
        var map = new ol.Map({
            target: 'mapcontainer',
            layers: [
                new ol.layer.Tile({
                    source: new ol.source.OSM()
                })
            ],
            view: new ol.View({
                center: ol.proj.fromLonLat([135.136, 34.78]),
                zoom: 12,
                maxZoom: 16,
                minZoom: 10
            })
        });
    }

    var markerFeature = new ol.Feature({
        geometry: new ol.geom.Point(ol.proj.fromLonLat([135.019, 34.609]))
    });
    //  ol.style.Style: An object that manages visual information, such as marker icons and display characters.
    var markerStyle = new ol.style.Style({
        image: new ol.style.Icon({
            anchor: [0.5, 46],
            anchorXUnits: 'fraction',
            anchorYUnits: 'pixels',
            src: 'https://openlayers.org/en/latest/examples/data/icon.png'
        })
    });
    //ol.layer.Vector: マーカーを保持するレイヤー
    var markerLayer = new ol.layer.Vector({
        source: new ol.source.Vector({
            features: [markerFeature]
        }),
        style: markerStyle
    });
    map.addLayer(markerLayer);


    /**
    * Elements that make up the popup.
    */
    var container = document.getElementById('popup');
    var content = document.getElementById('popup-content');
    var closer = document.getElementById('popup-closer');

    map.on('click', function (evt) {
        console.log(evt.coordinate);
        var lonlat = ol.proj.transform(evt.coordinate, 'EPSG:3857', 'EPSG:4326');
        console.log(lonlat);
        content.innerHTML = '<div style="background-color:black;color:white;padding:20px;"><p>経度 , 緯度:</p><code>' + lonlat +
            '</code></div>';
        console.log(lonlat[0]);
        document.getElementById('lon-info').value = lonlat[0];
        document.getElementById('lat-info').value = lonlat[1];  
        /*overlay.setPosition(coordinate);*/
       


        //var markerFeature = new ol.Feature({
        //    geometry: new ol.geom.Point(ol.proj.fromLonLat([lonlat[1], lonlat[0]));
        //});

    });
    

}



function precise_map(lon, lat) {
    document.getElementById("mapcontainer").innerHTML = "";
    var map = new ol.Map({
        target: 'mapcontainer',
        layers: [
            new ol.layer.Tile({
                source: new ol.source.OSM()
            })
        ],
        view: new ol.View({
            center: ol.proj.fromLonLat([lon, lat]),
            zoom: 12,
            maxZoom: 16,
            minZoom: 10
        })
    });
    var markerFeature = new ol.Feature({
        geometry: new ol.geom.Point(ol.proj.fromLonLat([lon, lat]))
    });
    var markerStyle = new ol.style.Style({
        image: new ol.style.Icon({
            anchor: [0.5, 46],
            anchorXUnits: 'fraction',
            anchorYUnits: 'pixels',
            src: 'https://openlayers.org/en/latest/examples/data/icon.png'
        })
    });
    //ol.layer.Vector: マーカーを保持するレイヤー
    var markerLayer = new ol.layer.Vector({
        source: new ol.source.Vector({
            features: [markerFeature]
        }),
        style: markerStyle
    });
    map.addLayer(markerLayer);

    var container = document.getElementById('popup');
    var content = document.getElementById('popup-content');
    var closer = document.getElementById('popup-closer');

    map.on('click', function (evt) {
        console.log(evt.coordinate);
        var lonlat = ol.proj.transform(evt.coordinate, 'EPSG:3857', 'EPSG:4326');
        console.log(lonlat);
        content.innerHTML = '<div style="background-color:black;color:white;padding:20px;"><p>経度 , 緯度:</p><code>' + lonlat +
            '</code></div>';
         
        document.getElementById('lon-info').text = lonlat[0];
        document.getElementById('lat-info').text = lonlat[1];  
       /* overlay.setPosition(coordinate);*/
    });

}


function test() {

    console.log("The King in the North");

}




/*window.addEventListener('DOMContentLoaded', init_map());*/

   



//ダウンロード時に初期化する
