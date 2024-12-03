var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_PARROQUIAS_1 = new ol.format.GeoJSON();
var features_PARROQUIAS_1 = format_PARROQUIAS_1.readFeatures(json_PARROQUIAS_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PARROQUIAS_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PARROQUIAS_1.addFeatures(features_PARROQUIAS_1);
var lyr_PARROQUIAS_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PARROQUIAS_1, 
                style: style_PARROQUIAS_1,
                popuplayertitle: "PARROQUIAS",
                interactive: true,
                title: '<img src="styles/legend/PARROQUIAS_1.png" /> PARROQUIAS'
            });
var format_CENTROSEDUCATIVOS_2 = new ol.format.GeoJSON();
var features_CENTROSEDUCATIVOS_2 = format_CENTROSEDUCATIVOS_2.readFeatures(json_CENTROSEDUCATIVOS_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CENTROSEDUCATIVOS_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CENTROSEDUCATIVOS_2.addFeatures(features_CENTROSEDUCATIVOS_2);
var lyr_CENTROSEDUCATIVOS_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CENTROSEDUCATIVOS_2, 
                style: style_CENTROSEDUCATIVOS_2,
                popuplayertitle: "CENTROS EDUCATIVOS",
                interactive: true,
                title: '<img src="styles/legend/CENTROSEDUCATIVOS_2.png" /> CENTROS EDUCATIVOS'
            });
var format_BASESDEMISIONES_3 = new ol.format.GeoJSON();
var features_BASESDEMISIONES_3 = format_BASESDEMISIONES_3.readFeatures(json_BASESDEMISIONES_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BASESDEMISIONES_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BASESDEMISIONES_3.addFeatures(features_BASESDEMISIONES_3);
var lyr_BASESDEMISIONES_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BASESDEMISIONES_3, 
                style: style_BASESDEMISIONES_3,
                popuplayertitle: "BASES DE MISIONES",
                interactive: true,
                title: '<img src="styles/legend/BASESDEMISIONES_3.png" /> BASES DE MISIONES'
            });
var format_URBANISMOS_4 = new ol.format.GeoJSON();
var features_URBANISMOS_4 = format_URBANISMOS_4.readFeatures(json_URBANISMOS_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_URBANISMOS_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_URBANISMOS_4.addFeatures(features_URBANISMOS_4);
var lyr_URBANISMOS_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_URBANISMOS_4, 
                style: style_URBANISMOS_4,
                popuplayertitle: "URBANISMOS",
                interactive: true,
                title: '<img src="styles/legend/URBANISMOS_4.png" /> URBANISMOS'
            });
var format_CENTROSDESALUD_5 = new ol.format.GeoJSON();
var features_CENTROSDESALUD_5 = format_CENTROSDESALUD_5.readFeatures(json_CENTROSDESALUD_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CENTROSDESALUD_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CENTROSDESALUD_5.addFeatures(features_CENTROSDESALUD_5);
var lyr_CENTROSDESALUD_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CENTROSDESALUD_5, 
                style: style_CENTROSDESALUD_5,
                popuplayertitle: "CENTROS DE SALUD",
                interactive: true,
                title: '<img src="styles/legend/CENTROSDESALUD_5.png" /> CENTROS DE SALUD'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_PARROQUIAS_1.setVisible(true);lyr_CENTROSEDUCATIVOS_2.setVisible(false);lyr_BASESDEMISIONES_3.setVisible(false);lyr_URBANISMOS_4.setVisible(false);lyr_CENTROSDESALUD_5.setVisible(false);
var layersList = [lyr_GoogleSatellite_0,lyr_PARROQUIAS_1,lyr_CENTROSEDUCATIVOS_2,lyr_BASESDEMISIONES_3,lyr_URBANISMOS_4,lyr_CENTROSDESALUD_5];
lyr_PARROQUIAS_1.set('fieldAliases', {'PARROQUIAS': 'PARROQUIAS', });
lyr_CENTROSEDUCATIVOS_2.set('fieldAliases', {'CDV_NUM': 'CODIGO', 'X': 'X', 'Y': 'Y', 'PARROQUIA': 'PARROQUIA', 'NOMBRE': 'NOMBRE', 'DIRECCION': 'DIRECCION', 'MESAS': 'MESAS', 'ELECTORES': 'ELECTORES', 'CARACTERIZ': 'CARACTERIZACION', 'CENTROS NU': 'CENTROS NU', 'BMS': 'BMS', 'URBANISMOS': 'URBANISMOS', 'IMBATIBLE': 'IMBATIBLE', 'BUENO / MA': 'BUENO / MA', 'COINCIDE': 'COINCIDE', 'layer': 'layer', 'path': 'path', 'TipoLugar': 'TipoLugar', });
lyr_BASESDEMISIONES_3.set('fieldAliases', {'CDV_NUM': 'CODIGO', 'X': 'X', 'Y': 'Y', 'PARROQUIA': 'PARROQUIA', 'NOMBRE': 'NOMBRE', 'DIRECCION': 'DIRECCION', 'MESAS': 'MESAS', 'ELECTORES': 'ELECTORES', 'CARACTERIZ': 'CARACTERIZACION', 'CENTROS NU': 'CENTROS NU', 'BMS': 'BMS', 'URBANISMOS': 'URBANISMOS', 'IMBATIBLE': 'IMBATIBLE', 'BUENO / MA': 'BUENO / MA', 'COINCIDE': 'COINCIDE', 'layer': 'layer', 'path': 'path', 'TipoLugar': 'TipoLugar', });
lyr_URBANISMOS_4.set('fieldAliases', {'CDV_NUM': 'CODIGO', 'X': 'X', 'Y': 'Y', 'PARROQUIA': 'PARROQUIA', 'NOMBRE': 'NOMBRE', 'DIRECCION': 'DIRECCION', 'MESAS': 'MESAS', 'ELECTORES': 'ELECTORES', 'CARACTERIZ': 'CARACTERIZACION', 'CENTROS NU': 'CENTROS NU', 'BMS': 'BMS', 'URBANISMOS': 'URBANISMOS', 'IMBATIBLE': 'IMBATIBLE', 'BUENO / MA': 'BUENO / MA', 'COINCIDE': 'COINCIDE', 'layer': 'layer', 'path': 'path', 'TipoLugar': 'TipoLugar', });
lyr_CENTROSDESALUD_5.set('fieldAliases', {'CDV_NUM': 'CODIGO', 'X': 'X', 'Y': 'Y', 'PARROQUIA': 'PARROQUIA', 'NOMBRE': 'NOMBRE', 'DIRECCION': 'DIRECCION', 'MESAS': 'MESAS', 'ELECTORES': 'ELECTORES', 'CARACTERIZ': 'CARACTERIZACION', 'CENTROS NU': 'CENTROS NU', 'BMS': 'BMS', 'URBANISMOS': 'URBANISMOS', 'IMBATIBLE': 'IMBATIBLE', 'BUENO / MA': 'BUENO / MA', 'COINCIDE': 'COINCIDE', 'layer': 'layer', 'path': 'path', 'TipoLugar': 'TipoLugar', });
lyr_PARROQUIAS_1.set('fieldImages', {'PARROQUIAS': 'TextEdit', });
lyr_CENTROSEDUCATIVOS_2.set('fieldImages', {'CDV_NUM': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'PARROQUIA': 'TextEdit', 'NOMBRE': 'TextEdit', 'DIRECCION': 'TextEdit', 'MESAS': 'Range', 'ELECTORES': 'TextEdit', 'CARACTERIZ': 'Range', 'CENTROS NU': 'TextEdit', 'BMS': 'TextEdit', 'URBANISMOS': 'TextEdit', 'IMBATIBLE': 'TextEdit', 'BUENO / MA': 'TextEdit', 'COINCIDE': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'TipoLugar': 'TextEdit', });
lyr_BASESDEMISIONES_3.set('fieldImages', {'CDV_NUM': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'PARROQUIA': 'TextEdit', 'NOMBRE': 'TextEdit', 'DIRECCION': 'TextEdit', 'MESAS': 'Range', 'ELECTORES': 'TextEdit', 'CARACTERIZ': 'Range', 'CENTROS NU': 'TextEdit', 'BMS': 'TextEdit', 'URBANISMOS': 'TextEdit', 'IMBATIBLE': 'TextEdit', 'BUENO / MA': 'TextEdit', 'COINCIDE': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'TipoLugar': 'TextEdit', });
lyr_URBANISMOS_4.set('fieldImages', {'CDV_NUM': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'PARROQUIA': 'TextEdit', 'NOMBRE': 'TextEdit', 'DIRECCION': 'TextEdit', 'MESAS': 'Range', 'ELECTORES': 'TextEdit', 'CARACTERIZ': 'Range', 'CENTROS NU': 'TextEdit', 'BMS': 'TextEdit', 'URBANISMOS': 'TextEdit', 'IMBATIBLE': 'TextEdit', 'BUENO / MA': 'TextEdit', 'COINCIDE': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'TipoLugar': 'TextEdit', });
lyr_CENTROSDESALUD_5.set('fieldImages', {'CDV_NUM': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'PARROQUIA': 'TextEdit', 'NOMBRE': 'TextEdit', 'DIRECCION': 'TextEdit', 'MESAS': 'Range', 'ELECTORES': 'TextEdit', 'CARACTERIZ': 'Range', 'CENTROS NU': 'TextEdit', 'BMS': 'TextEdit', 'URBANISMOS': 'TextEdit', 'IMBATIBLE': 'TextEdit', 'BUENO / MA': 'TextEdit', 'COINCIDE': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'TipoLugar': 'TextEdit', });
lyr_PARROQUIAS_1.set('fieldLabels', {'PARROQUIAS': 'inline label - always visible', });
lyr_CENTROSEDUCATIVOS_2.set('fieldLabels', {'CDV_NUM': 'inline label - always visible', 'X': 'hidden field', 'Y': 'hidden field', 'PARROQUIA': 'inline label - always visible', 'NOMBRE': 'inline label - always visible', 'DIRECCION': 'inline label - always visible', 'MESAS': 'inline label - always visible', 'ELECTORES': 'inline label - always visible', 'CARACTERIZ': 'inline label - always visible', 'CENTROS NU': 'hidden field', 'BMS': 'hidden field', 'URBANISMOS': 'hidden field', 'IMBATIBLE': 'hidden field', 'BUENO / MA': 'hidden field', 'COINCIDE': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', 'TipoLugar': 'hidden field', });
lyr_BASESDEMISIONES_3.set('fieldLabels', {'CDV_NUM': 'inline label - always visible', 'X': 'hidden field', 'Y': 'hidden field', 'PARROQUIA': 'inline label - always visible', 'NOMBRE': 'inline label - always visible', 'DIRECCION': 'inline label - always visible', 'MESAS': 'inline label - always visible', 'ELECTORES': 'inline label - always visible', 'CARACTERIZ': 'inline label - always visible', 'CENTROS NU': 'hidden field', 'BMS': 'hidden field', 'URBANISMOS': 'hidden field', 'IMBATIBLE': 'hidden field', 'BUENO / MA': 'hidden field', 'COINCIDE': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', 'TipoLugar': 'hidden field', });
lyr_URBANISMOS_4.set('fieldLabels', {'CDV_NUM': 'inline label - always visible', 'X': 'hidden field', 'Y': 'hidden field', 'PARROQUIA': 'inline label - always visible', 'NOMBRE': 'inline label - always visible', 'DIRECCION': 'inline label - always visible', 'MESAS': 'inline label - always visible', 'ELECTORES': 'inline label - always visible', 'CARACTERIZ': 'inline label - always visible', 'CENTROS NU': 'hidden field', 'BMS': 'hidden field', 'URBANISMOS': 'hidden field', 'IMBATIBLE': 'hidden field', 'BUENO / MA': 'hidden field', 'COINCIDE': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', 'TipoLugar': 'hidden field', });
lyr_CENTROSDESALUD_5.set('fieldLabels', {'CDV_NUM': 'inline label - always visible', 'X': 'hidden field', 'Y': 'hidden field', 'PARROQUIA': 'inline label - always visible', 'NOMBRE': 'inline label - always visible', 'DIRECCION': 'inline label - always visible', 'MESAS': 'inline label - always visible', 'ELECTORES': 'inline label - always visible', 'CARACTERIZ': 'inline label - always visible', 'CENTROS NU': 'hidden field', 'BMS': 'hidden field', 'URBANISMOS': 'hidden field', 'IMBATIBLE': 'hidden field', 'BUENO / MA': 'hidden field', 'COINCIDE': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', 'TipoLugar': 'hidden field', });
lyr_CENTROSDESALUD_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});