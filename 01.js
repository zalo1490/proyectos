fetch("https://bypass-cors-beta.vercel.app/?url=https://api.preciodelaluz.org/v1/prices/all?zone=PCB")
.then(res => res.json())
.then(response => {
    console.log(response)
})

const fetchElectrodomesticosPrices = async () => {
    try {
       const response = await get('https://bypass-cors-beta.vercel.app/?url=https://api.preciodelaluz.org/v1/prices/all?zone=PCB');
       const data = response.data;
       const precios = data.prices;
   
       const nevera = precios.filter(p => p.electrodomestic === 'Nevera')[0].pricePerHour;
       const vitroceramica = precios.filter(p => p.electrodomestic === 'Vitrocerámica')[0].pricePerHour;
       const lavavajillas = precios.filter(p => p.electrodomestic === 'Lavavajillas')[0].pricePerHour;
       const lavadora = precios.filter(p => p.electrodomestic === 'Lavadora')[0].pricePerHour;
       const televisor = precios.filter(p => p.electrodomestic === 'Televisor')[0].pricePerHour;
       const ordenador = precios.filter(p => p.electrodomestic === 'Ordenador')[0].pricePerHour;
   
       console.log(`Precios por hora:
         Nevera: ${nevera}
         Vitrocerámica: ${vitroceramica}
         Lavavajillas: ${lavavajillas}
         Lavadora: ${lavadora}
         Televisor: ${televisor}
         Ordenador: ${ordenador}`);
    } catch (error) {
       console.error('Error al obtener los precios:', error);
    }
   };
   
   fetchElectrodomesticosPrices();
   

