function categories_ASADASVisita_3(feature, value, size, resolution, labelText,
                                   labelFont, labelFill, bufferColor, bufferWidth,
                                   placement) {

    var valueStr = '';

    if (value !== null && value !== undefined) {
        valueStr = value.toString().trim().toLowerCase();
    }

    // Style for "Si"
    if (valueStr === 'si') {

        return [ new ol.style.Style({
            image: new ol.style.Circle({
                radius: 14,
                stroke: new ol.style.Stroke({
                    color: '#ffffff',
                    width: 2
                }),
                fill: new ol.style.Fill({
                    color: '#e31a1c'
                })
            }),
            text: createTextStyle(
                feature,
                resolution,
                labelText,
                labelFont,
                labelFill,
                placement,
                bufferColor,
                bufferWidth
            )
        }) ];
    }

    // Default style (always returned if condition not met)
    return [ new ol.style.Style({
        image: new ol.style.Circle({
            radius: 10,
            stroke: new ol.style.Stroke({
                color: '#ffffff',
                width: 1
            }),
            fill: new ol.style.Fill({
                color: '#1f78b4'
            })
        })
    }) ];
}
