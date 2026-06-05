var wms_layers = [];


        var lyr_ESRI_0 = new ol.layer.Tile({
            'title': 'ESRI',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_building_house_1 = new ol.format.GeoJSON();
var features_building_house_1 = format_building_house_1.readFeatures(json_building_house_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building_house_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building_house_1.addFeatures(features_building_house_1);
var lyr_building_house_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_building_house_1, 
                style: style_building_house_1,
                popuplayertitle: 'building_house',
                interactive: true,
                title: '<img src="styles/legend/building_house_1.png" /> building_house'
            });
var format_roads_2 = new ol.format.GeoJSON();
var features_roads_2 = format_roads_2.readFeatures(json_roads_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_roads_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_roads_2.addFeatures(features_roads_2);
var lyr_roads_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_roads_2, 
                style: style_roads_2,
                popuplayertitle: 'roads',
                interactive: true,
    title: 'roads<br />\
    <img src="styles/legend/roads_2_0.png" /> cycleway<br />\
    <img src="styles/legend/roads_2_1.png" /> footway<br />\
    <img src="styles/legend/roads_2_2.png" /> living_street<br />\
    <img src="styles/legend/roads_2_3.png" /> path<br />\
    <img src="styles/legend/roads_2_4.png" /> pedestrian<br />\
    <img src="styles/legend/roads_2_5.png" /> primary<br />\
    <img src="styles/legend/roads_2_6.png" /> primary_link<br />\
    <img src="styles/legend/roads_2_7.png" /> residential<br />\
    <img src="styles/legend/roads_2_8.png" /> secondary<br />\
    <img src="styles/legend/roads_2_9.png" /> secondary_link<br />\
    <img src="styles/legend/roads_2_10.png" /> service<br />\
    <img src="styles/legend/roads_2_11.png" /> steps<br />\
    <img src="styles/legend/roads_2_12.png" /> tertiary<br />\
    <img src="styles/legend/roads_2_13.png" /> tertiary_link<br />\
    <img src="styles/legend/roads_2_14.png" /> track<br />\
    <img src="styles/legend/roads_2_15.png" /> track_grade1<br />\
    <img src="styles/legend/roads_2_16.png" /> track_grade2<br />\
    <img src="styles/legend/roads_2_17.png" /> track_grade3<br />\
    <img src="styles/legend/roads_2_18.png" /> track_grade4<br />\
    <img src="styles/legend/roads_2_19.png" /> track_grade5<br />\
    <img src="styles/legend/roads_2_20.png" /> trunk<br />\
    <img src="styles/legend/roads_2_21.png" /> unclassified<br />\
    <img src="styles/legend/roads_2_22.png" /> unknown<br />\
    <img src="styles/legend/roads_2_23.png" /> <br />' });
var format_lab1_3 = new ol.format.GeoJSON();
var features_lab1_3 = format_lab1_3.readFeatures(json_lab1_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lab1_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lab1_3.addFeatures(features_lab1_3);
var lyr_lab1_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_lab1_3, 
                style: style_lab1_3,
                popuplayertitle: 'lab1',
                interactive: true,
                title: '<img src="styles/legend/lab1_3.png" /> lab1'
            });

lyr_ESRI_0.setVisible(true);lyr_building_house_1.setVisible(true);lyr_roads_2.setVisible(true);lyr_lab1_3.setVisible(true);
var layersList = [lyr_ESRI_0,lyr_building_house_1,lyr_roads_2,lyr_lab1_3];
lyr_building_house_1.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'roof:levels': 'roof:levels', 'building:levels': 'building:levels', 'addr:street': 'addr:street', 'addr:postcode': 'addr:postcode', 'addr:housenumber': 'addr:housenumber', 'address': 'address', });
lyr_roads_2.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'ref': 'ref', 'oneway': 'oneway', 'maxspeed': 'maxspeed', 'layer': 'layer', 'bridge': 'bridge', 'tunnel': 'tunnel', });
lyr_lab1_3.set('fieldAliases', {'fid': 'fid', 'id': 'id', });
lyr_building_house_1.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'building': '', 'roof:levels': '', 'building:levels': '', 'addr:street': '', 'addr:postcode': '', 'addr:housenumber': '', 'address': '', });
lyr_roads_2.set('fieldImages', {'fid': 'TextEdit', 'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'name': 'TextEdit', 'ref': 'TextEdit', 'oneway': 'TextEdit', 'maxspeed': 'Range', 'layer': 'Range', 'bridge': 'TextEdit', 'tunnel': 'TextEdit', });
lyr_lab1_3.set('fieldImages', {'fid': '', 'id': '', });
lyr_building_house_1.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'roof:levels': 'no label', 'building:levels': 'no label', 'addr:street': 'no label', 'addr:postcode': 'no label', 'addr:housenumber': 'no label', 'address': 'no label', });
lyr_roads_2.set('fieldLabels', {'fid': 'no label', 'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'no label', 'ref': 'no label', 'oneway': 'no label', 'maxspeed': 'no label', 'layer': 'no label', 'bridge': 'no label', 'tunnel': 'no label', });
lyr_lab1_3.set('fieldLabels', {'fid': 'no label', 'id': 'no label', });
lyr_lab1_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});