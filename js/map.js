var myMap;

// Дождёмся загрузки API и готовности DOM.
ymaps.ready(init);

function init () {

    myMap = new ymaps.Map('map', {
        center: [48.0102,37.8634], // Москва
        zoom: 16
    }, {
        searchControlProvider: 'yandex#search'
    });

    myGeoObject = new ymaps.GeoObject({
            geometry: {
                type: "Point",
                coordinates: [48.0101,37.8642]
            },
            properties: {
                iconContent: 'IT-GIGANTS',
                hintContent: 'We are here'
            }
            }, {
            preset: 'islands#yellowStretchyIcon'
        })
     myMap.geoObjects.add(myGeoObject);
}