
                const datos = [
                {
                    posicion: {
                    lat: 21.16059,
                    lng: -101.70062,
                    },
                    titulo: "UBICACION PRODUCTOS 1",
                    direccion:
                    "Av Cerro Gordo, Lomas del Campestre, 37150 León, Gto.",
                    telefono: "4777885600",
                },
                {
                    posicion: {
                    lat: 21.11340,
                    lng: -101.65690,
                    },
                    titulo: "UBICACION PRODUCTOS 2",
                    direccion: "Olimpo, Zona Recreativa y Cultural, 37500 León, Gto.",
                    telefono: "4777537334",
                },
                {
                    posicion: {
                    lat: 21.16059,
                    lng: -101.69654,
                    },
                    titulo: "UBICACION PRODUCTOS 3",
                    direccion: "Blvd. Juan Alonso de Torres Pte. 2002, Valle del Campestre, 37150 León, Gto.",
                    telefono: "4777734916",
                },
                {
                    posicion: {
                    lat: 21.09334,
                    lng: -101.62613,
                    },
                    titulo: "UBICACION PRODUCTOS 4",
                    direccion: "Blvd. Aeropuerto No. 104, Cerrito de Jerez, 37530 León, Gto.",
                    telefono: "4771676531",
                }
                ];

                const retornarString = (nombre, direccion, telefono) => {
                let informacion = `<div class='div-title'><h1 style=color:purple>${nombre}</h1>`;
                informacion += `<p style=color:purple><strong>Dirección:</strong> ${direccion}</p>`;
                informacion += `<p style=color:purple><strong>Teléfono:</strong>${telefono}</p></div>`;

                return informacion;
                };

                    var informacion1 =  "<h1 style=color:blue >MI UBICACION</h1>"
                    informacion1 += "<p style=color:blue ><strong>Dirección:</strong> AQUI ESTA MI UBICACION PRECISA</p>"
                    informacion1 += "<p style=color:blue ><strong>Teléfono:</strong>477 1234567 </p>"

map1 = () => {
                if(navigator.geolocation){

                navigator.geolocation.getCurrentPosition( position => {

                    let posicion = {
                    
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    }

                    let propiedadesMarcador = {
                        position: posicion,
                        icon: {
                    url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"
                    },
                        map,
                        title: "Marcardor PRINCIPAL"
                    }

                    const marcador = new google.maps.Marker(propiedadesMarcador);

                    map.setCenter(posicion)

                    const infowindow = new google.maps.InfoWindow({
                        content : informacion1
                    })

                    marcador.addListener("click", ()=>{
                        infowindow.open(map1,marcador);
                    })
                    

                })
                }         

                    var propiedades = {
                    zoom: 12,
                };

                const mapa = document.getElementById("map1");
                const map = new google.maps.Map(mapa, propiedades);

                let=i=0;
                while(i<datos.length){

                let d=datos[i];
                let index;

                    let propiedadesMarcador = {
                    position: d.posicion,
                    map,
                    title: `Marcardor ${index}`,
                    };

                    let marcador = new google.maps.Marker(propiedadesMarcador);

                    map.setCenter(d.posicion);

                    let infowindow = new google.maps.InfoWindow({
                    content: retornarString(d.titulo, d.direccion, d.telefono),
                    });

                    marcador.addListener("click", () => {
                    infowindow.open(map1, marcador);
                    });

                    i++;

                }  
                 
}