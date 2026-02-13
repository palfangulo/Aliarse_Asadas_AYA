function categories_ASADASVisita_3(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {

    var valueStr = value ? value.toString().trim().toLowerCase() : '';

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
                feature, resolution, labelText,
                labelFont, labelFill,
                placement, bufferColor,
                bufferWidth
            )
        })];

    }

    // 🔹 ALWAYS return a default style
    return [ new ol.style.Style({
        image: new ol.style.Circle({
            radius: 10,
            fill: new ol.style.Fill({
                color: '#1f78b4'
            })
        })
    })];
}
