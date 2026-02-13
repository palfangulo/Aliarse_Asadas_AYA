var style_ASADASVisita_3 = function(feature, resolution){

    return [ new ol.style.Style({
        image: new ol.style.Circle({
            radius: 20,
            fill: new ol.style.Fill({
                color: 'yellow'
            }),
            stroke: new ol.style.Stroke({
                color: 'black',
                width: 4
            })
        })
    })];

};
