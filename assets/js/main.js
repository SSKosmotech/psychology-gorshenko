$(function(){
    
    // // клік по фото карти, який активує саму карту
    //     $("#load_map_link").on('click', function (event) {
    //         event.preventDefault();
    //         event.stopPropagation();
    //         $("#map", '');
    //         initMap();
    //     });
    
    
        // функція побудови карти
        // function initMap(){
            
            let map = L.map('map').setView([49.83203927380617, 24.04153234846184], 14);

            // L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png', {
            // attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(map);

            // L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png', {
            // maxZoom: 19,
            // attribution: '© OpenStreetMap'
            // }).addTo(map);

            
            // Google Streets:
            L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
                // maxZoom: 13,
                subdomains:['mt0','mt1','mt2','mt3']
            }).addTo(map);
                
            // Google Hybrid:
            //     L.tileLayer('http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}',{
            //     maxZoom: 20,
            //     subdomains:['mt0','mt1','mt2','mt3']
            // }).addTo(map);

            // Google Satellite:
            // L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',{
            // maxZoom: 20,
            // subdomains:['mt0','mt1','mt2','mt3']
            // }).addTo(map);

            //Google Terrain
            // L.tileLayer('http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}',{
            // maxZoom: 20,
            // subdomains:['mt0','mt1','mt2','mt3']
            // }).addTo(map);




  
            // L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',
            // { maxZoom: 20, subdomains:['mt0','mt1','mt2','mt3'] }).addTo(map);


            // L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
            // maxZoom: 19,
            // attribution: '© OpenStreetMap'
            // }).addTo(map);

            // L.tileLayer('https://example.com/mygoogle/vt/lyrs=m&z={z}&x={x}&y={y}', {
            //     minZoom: 5,
            //     maxZoom: 19,
            //     attribution: 'ThanksToGoogleMap' })
            //     .addTo(map);

        
    
           
    
    
            // створюю кастомний маркер 
            // let pinIcon = L.icon({
            //     iconUrl: 'assets/plugins/leaflet/images/pin.png',
            //     iconSize: [106, 106],
            //     iconAnchor: [106, 106],
            //     popupAnchor: [-53, -90],
    
            // });
    
    
            // будую dom для виводу кастомного маркеру (і popup) на карту
            // L.marker([49.83203927380617, 24.04153234846184], {icon: pinIcon}).addTo(map)
            // .bindPopup(`
            // <div class="popup">
            //     <span>Serhii Simonov can be there</span>
            //     <img class="popup_img" src="assets/images/kosmo_planet.png">
            // </div>
            // `);
            // .openPopup();
        // };




})
