var wms_layers = [];


        var lyr_EsriImagery_0 = new ol.layer.Tile({
            'title': 'Esri Imagery',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_AsadasAyA_2 = new ol.format.GeoJSON();
var features_AsadasAyA_2 = format_AsadasAyA_2.readFeatures(json_AsadasAyA_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AsadasAyA_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AsadasAyA_2.addFeatures(features_AsadasAyA_2);
var lyr_AsadasAyA_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AsadasAyA_2, 
                style: style_AsadasAyA_2,
                popuplayertitle: 'Asadas AyA',
                interactive: true,
                title: '<img src="styles/legend/AsadasAyA_2.png" /> Asadas AyA'
            });
var format_ASADASVisita_3 = new ol.format.GeoJSON();
var features_ASADASVisita_3 = format_ASADASVisita_3.readFeatures(json_ASADASVisita_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ASADASVisita_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ASADASVisita_3.addFeatures(features_ASADASVisita_3);
var lyr_ASADASVisita_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ASADASVisita_3, 
                style: style_ASADASVisita_3,
                popuplayertitle: 'ASADAS Visita',
                interactive: true,
    title: 'ASADAS Visita<br />\
    <img src="styles/legend/ASADASVisita_3_0.png" /> Visita<br />' });
var format_Costa_Rica_ADM1_simplifiedsimplified_4 = new ol.format.GeoJSON();
var features_Costa_Rica_ADM1_simplifiedsimplified_4 = format_Costa_Rica_ADM1_simplifiedsimplified_4.readFeatures(json_Costa_Rica_ADM1_simplifiedsimplified_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Costa_Rica_ADM1_simplifiedsimplified_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Costa_Rica_ADM1_simplifiedsimplified_4.addFeatures(features_Costa_Rica_ADM1_simplifiedsimplified_4);
var lyr_Costa_Rica_ADM1_simplifiedsimplified_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Costa_Rica_ADM1_simplifiedsimplified_4, 
                style: style_Costa_Rica_ADM1_simplifiedsimplified_4,
                popuplayertitle: 'Costa_Rica_ADM1_simplified.simplified',
                interactive: true,
                title: '<img src="styles/legend/Costa_Rica_ADM1_simplifiedsimplified_4.png" /> Costa_Rica_ADM1_simplified.simplified'
            });

lyr_EsriImagery_0.setVisible(true);lyr_OpenStreetMap_1.setVisible(true);lyr_AsadasAyA_2.setVisible(true);lyr_ASADASVisita_3.setVisible(true);lyr_Costa_Rica_ADM1_simplifiedsimplified_4.setVisible(true);
var layersList = [lyr_EsriImagery_0,lyr_OpenStreetMap_1,lyr_AsadasAyA_2,lyr_ASADASVisita_3,lyr_Costa_Rica_ADM1_simplifiedsimplified_4];
lyr_AsadasAyA_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', '______DATOS_DE_LA_COMUNIDAD___': '______DATOS_DE_LA_COMUNIDAD___', 'Nombre_Comunidad': 'Nombre_Comunidad', '______COORDENADAS___': '______COORDENADAS___', 'Norte': 'Norte', 'Este': 'Este', 'Tiene_Hidrantes': 'Tiene_Hidrantes', 'Sistema_Individual': 'Sistema_Individual', 'Sistema_Mixto': 'Sistema_Mixto', 'Sistema_Sanitarios': 'Sistema_Sanitarios', 'Sistema_Pluvial': 'Sistema_Pluvial', 'Acueducto': 'Acueducto', 'Datos_Ente_Operador': 'Datos_Ente_Operador', 'Región': 'Región', 'Ente_Operador': 'Ente_Operador', 'Provincia': 'Provincia', 'Cantón': 'Cantón', 'Distrito': 'Distrito', '______DATOS_DEL_CONTACTO___': '______DATOS_DEL_CONTACTO___', 'Teléfono_Oficina': 'Teléfono_Oficina', 'Fax': 'Fax', 'Correo': 'Correo', 'Dirección_Oficina': 'Dirección_Oficina', '______OTRAS_CARACTERISTICAS___': '______OTRAS_CARACTERISTICAS___', 'Local_Atención_Usuario': 'Local_Atención_Usuario', 'Tipo_Administración': 'Tipo_Administración', 'Tipo_Ubicación': 'Tipo_Ubicación', 'Categoría': 'Categoría', 'HasthTAG': 'HasthTAG', 'PKCOMUNIDAD': 'PKCOMUNIDAD', 'PKENTEOPERADOR': 'PKENTEOPERADOR', 'Longitud': 'Longitud', 'Latitud': 'Latitud', '______COORDENADAS_WGS84__': '______COORDENADAS_WGS84__', '_______CARACTERISTICAS_______': '_______CARACTERISTICAS_______', });
lyr_ASADASVisita_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', '______DATOS_DE_LA_COMUNIDAD___': '______DATOS_DE_LA_COMUNIDAD___', 'Nombre_Comunidad': 'Nombre_Comunidad', '______COORDENADAS___': '______COORDENADAS___', 'Norte': 'Norte', 'Este': 'Este', 'Tiene_Hidrantes': 'Tiene_Hidrantes', 'Sistema_Individual': 'Sistema_Individual', 'Sistema_Mixto': 'Sistema_Mixto', 'Sistema_Sanitarios': 'Sistema_Sanitarios', 'Sistema_Pluvial': 'Sistema_Pluvial', 'Acueducto': 'Acueducto', 'Datos_Ente_Operador': 'Datos_Ente_Operador', 'Región': 'Región', 'Ente_Operador': 'Ente_Operador', 'Provincia': 'Provincia', 'Cantón': 'Cantón', 'Distrito': 'Distrito', '______DATOS_DEL_CONTACTO___': '______DATOS_DEL_CONTACTO___', 'Teléfono_Oficina': 'Teléfono_Oficina', 'Fax': 'Fax', 'Correo': 'Correo', 'Dirección_Oficina': 'Dirección_Oficina', '______OTRAS_CARACTERISTICAS___': '______OTRAS_CARACTERISTICAS___', 'Local_Atención_Usuario': 'Local_Atención_Usuario', 'Tipo_Administración': 'Tipo_Administración', 'Tipo_Ubicación': 'Tipo_Ubicación', 'Categoría': 'Categoría', 'HasthTAG': 'HasthTAG', 'PKCOMUNIDAD': 'PKCOMUNIDAD', 'PKENTEOPERADOR': 'PKENTEOPERADOR', 'Longitud': 'Longitud', 'Latitud': 'Latitud', '______COORDENADAS_WGS84__': '______COORDENADAS_WGS84__', '_______CARACTERISTICAS_______': '_______CARACTERISTICAS_______', 'Visitar_Aliarse': 'Visitar_Aliarse', });
lyr_Costa_Rica_ADM1_simplifiedsimplified_4.set('fieldAliases', {'shapeName': 'shapeName', 'shapeISO': 'shapeISO', 'shapeID': 'shapeID', 'shapeGroup': 'shapeGroup', 'shapeType': 'shapeType', });
lyr_AsadasAyA_2.set('fieldImages', {'OBJECTID': 'Range', '______DATOS_DE_LA_COMUNIDAD___': 'TextEdit', 'Nombre_Comunidad': 'TextEdit', '______COORDENADAS___': 'TextEdit', 'Norte': 'TextEdit', 'Este': 'TextEdit', 'Tiene_Hidrantes': 'TextEdit', 'Sistema_Individual': 'TextEdit', 'Sistema_Mixto': 'TextEdit', 'Sistema_Sanitarios': 'TextEdit', 'Sistema_Pluvial': 'TextEdit', 'Acueducto': 'TextEdit', 'Datos_Ente_Operador': 'TextEdit', 'Región': 'TextEdit', 'Ente_Operador': 'TextEdit', 'Provincia': 'TextEdit', 'Cantón': 'TextEdit', 'Distrito': 'TextEdit', '______DATOS_DEL_CONTACTO___': 'TextEdit', 'Teléfono_Oficina': 'TextEdit', 'Fax': 'TextEdit', 'Correo': 'TextEdit', 'Dirección_Oficina': 'TextEdit', '______OTRAS_CARACTERISTICAS___': 'TextEdit', 'Local_Atención_Usuario': 'TextEdit', 'Tipo_Administración': 'TextEdit', 'Tipo_Ubicación': 'TextEdit', 'Categoría': 'TextEdit', 'HasthTAG': 'TextEdit', 'PKCOMUNIDAD': 'Range', 'PKENTEOPERADOR': 'Range', 'Longitud': 'TextEdit', 'Latitud': 'TextEdit', '______COORDENADAS_WGS84__': 'TextEdit', '_______CARACTERISTICAS_______': 'TextEdit', });
lyr_ASADASVisita_3.set('fieldImages', {'OBJECTID': 'Range', '______DATOS_DE_LA_COMUNIDAD___': 'TextEdit', 'Nombre_Comunidad': 'TextEdit', '______COORDENADAS___': 'TextEdit', 'Norte': 'TextEdit', 'Este': 'TextEdit', 'Tiene_Hidrantes': 'TextEdit', 'Sistema_Individual': 'TextEdit', 'Sistema_Mixto': 'TextEdit', 'Sistema_Sanitarios': 'TextEdit', 'Sistema_Pluvial': 'TextEdit', 'Acueducto': 'TextEdit', 'Datos_Ente_Operador': 'TextEdit', 'Región': 'TextEdit', 'Ente_Operador': 'TextEdit', 'Provincia': 'TextEdit', 'Cantón': 'TextEdit', 'Distrito': 'TextEdit', '______DATOS_DEL_CONTACTO___': 'TextEdit', 'Teléfono_Oficina': 'TextEdit', 'Fax': 'TextEdit', 'Correo': 'TextEdit', 'Dirección_Oficina': 'TextEdit', '______OTRAS_CARACTERISTICAS___': 'TextEdit', 'Local_Atención_Usuario': 'TextEdit', 'Tipo_Administración': 'TextEdit', 'Tipo_Ubicación': 'TextEdit', 'Categoría': 'TextEdit', 'HasthTAG': 'TextEdit', 'PKCOMUNIDAD': 'Range', 'PKENTEOPERADOR': 'Range', 'Longitud': 'TextEdit', 'Latitud': 'TextEdit', '______COORDENADAS_WGS84__': 'TextEdit', '_______CARACTERISTICAS_______': 'TextEdit', 'Visitar_Aliarse': 'TextEdit', });
lyr_Costa_Rica_ADM1_simplifiedsimplified_4.set('fieldImages', {'shapeName': 'TextEdit', 'shapeISO': 'TextEdit', 'shapeID': 'TextEdit', 'shapeGroup': 'TextEdit', 'shapeType': 'TextEdit', });
lyr_AsadasAyA_2.set('fieldLabels', {'OBJECTID': 'no label', '______DATOS_DE_LA_COMUNIDAD___': 'no label', 'Nombre_Comunidad': 'no label', '______COORDENADAS___': 'no label', 'Norte': 'no label', 'Este': 'no label', 'Tiene_Hidrantes': 'no label', 'Sistema_Individual': 'no label', 'Sistema_Mixto': 'no label', 'Sistema_Sanitarios': 'no label', 'Sistema_Pluvial': 'no label', 'Acueducto': 'no label', 'Datos_Ente_Operador': 'no label', 'Región': 'no label', 'Ente_Operador': 'no label', 'Provincia': 'no label', 'Cantón': 'no label', 'Distrito': 'no label', '______DATOS_DEL_CONTACTO___': 'no label', 'Teléfono_Oficina': 'no label', 'Fax': 'no label', 'Correo': 'no label', 'Dirección_Oficina': 'no label', '______OTRAS_CARACTERISTICAS___': 'no label', 'Local_Atención_Usuario': 'no label', 'Tipo_Administración': 'no label', 'Tipo_Ubicación': 'no label', 'Categoría': 'no label', 'HasthTAG': 'no label', 'PKCOMUNIDAD': 'no label', 'PKENTEOPERADOR': 'no label', 'Longitud': 'no label', 'Latitud': 'no label', '______COORDENADAS_WGS84__': 'no label', '_______CARACTERISTICAS_______': 'no label', });
lyr_ASADASVisita_3.set('fieldLabels', {'OBJECTID': 'header label - visible with data', '______DATOS_DE_LA_COMUNIDAD___': 'no label', 'Nombre_Comunidad': 'no label', '______COORDENADAS___': 'no label', 'Norte': 'no label', 'Este': 'no label', 'Tiene_Hidrantes': 'no label', 'Sistema_Individual': 'no label', 'Sistema_Mixto': 'no label', 'Sistema_Sanitarios': 'no label', 'Sistema_Pluvial': 'no label', 'Acueducto': 'no label', 'Datos_Ente_Operador': 'no label', 'Región': 'no label', 'Ente_Operador': 'no label', 'Provincia': 'no label', 'Cantón': 'no label', 'Distrito': 'no label', '______DATOS_DEL_CONTACTO___': 'no label', 'Teléfono_Oficina': 'no label', 'Fax': 'no label', 'Correo': 'no label', 'Dirección_Oficina': 'no label', '______OTRAS_CARACTERISTICAS___': 'no label', 'Local_Atención_Usuario': 'no label', 'Tipo_Administración': 'no label', 'Tipo_Ubicación': 'no label', 'Categoría': 'no label', 'HasthTAG': 'no label', 'PKCOMUNIDAD': 'no label', 'PKENTEOPERADOR': 'no label', 'Longitud': 'no label', 'Latitud': 'no label', '______COORDENADAS_WGS84__': 'no label', '_______CARACTERISTICAS_______': 'no label', 'Visitar_Aliarse': 'no label', });
lyr_Costa_Rica_ADM1_simplifiedsimplified_4.set('fieldLabels', {'shapeName': 'no label', 'shapeISO': 'no label', 'shapeID': 'no label', 'shapeGroup': 'no label', 'shapeType': 'no label', });
lyr_Costa_Rica_ADM1_simplifiedsimplified_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});