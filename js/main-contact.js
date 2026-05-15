/* ---- Map ---- */

ymaps.ready(init);
    function init(){
        var myMap = new ymaps.Map("map", {
            center: [55.753514, 37.621202],
            zoom: 11,
            controls: ['zoomControl','geolocationControl']
        });

        var myPlacemark = new ymaps.Placemark([55.687203,37.534748],{} , {
            iconImageSize : [32, 40]
        })

        myMap.balloon.open([55.687203,37.534748], 'Мы здесь', {
            closeButton: false
        })

        myMap.geoObjects.add(myPlacemark);
    }   