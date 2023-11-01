fetch("https://bypass-cors-beta.vercel.app/?url=https://api.preciodelaluz.org/v1/prices/all?zone=PCB")
  .then((res) => res.json())
  .then((data) => {
    const precios = data.data;

    const electrodomesticos = {
        nevera: 19.5,         // Supongamos que una nevera consume 100W por hora
        vitroceramica: 13, // Supongamos que una vitrocerámica consume 2000W por hora
        lavavajillas: 11,  // Supongamos que un lavavajillas consume 1500W por hora
        lavadora: 62,       // Supongamos que una lavadora consume 800W por hora
        televisor: 18,     // Supongamos que un televisor consume 200W por hora
        ordenador: 30  
      };

    const fetchElectrodomesticosPrices = async () => {
      try {
        const horaActual = new Date().getHours();
        const horaActualStr = horaActual.toString().padStart(2, '0') + '-' + (horaActual + 1).toString().padStart(2, '0');

        if (precios.hasOwnProperty(horaActualStr)) {
          const precioActual = precios[horaActualStr].price;
          console.log(`Precio de la luz en la hora actual: ${precioActual} €/MWh`);

          function getBestAndWorstHour(arr) {
            // Ordenar los registros de horas
            arr.sort(function(a, b) {
               return a - b;
            });
           
            // Calcular la mejor hora y la peor hora
            let bestHour = arr[0];
            let worstHour = arr[arr.length - 1];
           
            return {
               bestHour: bestHour,
               worstHour: worstHour
            };
           }
           
           let horas = [3, 2, 10, 11, 12, 4, 5, 16, 17, 18, 9];
           let result = getBestAndWorstHour(horas);
           console.log("Mejor hora: " + result.bestHour);
           console.log("Peor hora: " + result.worstHour); 

         // Define el consumo de vatios por hora de cada electrodoméstico
        const electrodomesticos = {
        nevera: 19.5,         // Supongamos que una nevera consume 100W por hora
        vitroceramica: 13, // Supongamos que una vitrocerámica consume 2000W por hora
        lavavajillas: 11,  // Supongamos que un lavavajillas consume 1500W por hora
         lavadora: 62,       // Supongamos que una lavadora consume 800W por hora
        televisor: 18,     // Supongamos que un televisor consume 200W por hora
        ordenador: 30       // Supongamos que un ordenador consume 300W por hora
        };

      
           
           const sumaConsumo = Object.values(electrodomesticos).reduce((total, consumo) => total + consumo, 0);
           
           console.log('Suma del consumo de todos los electrodomesticos:', sumaConsumo, 'W/H');
           let total = precioActual * sumaConsumo;
           console.log(('Suma del consumo total de los electrodomesticos') , total);


          // Calcular el costo de cada electrodoméstico
          for (const electrodomestico in electrodomesticos) {
            const consumoWatt = electrodomesticos[electrodomestico];
            const costoElectrodomestico = (consumoWatt / 1000) * precioActual; // Convierte Watt a kW y calcula el costo
            console.log(`Costo de ${electrodomestico} por hora: ${costoElectrodomestico} €`);
          }
        } else {
          console.error("No se encontraron datos para la hora actual.");
        }
      } catch (error) {
        console.error("Error al obtener los precios:", error);
      }
    };

    fetchElectrodomesticosPrices()

    console.log(electrodomesticos)

    /*let costoTotalElectrodomesticos = 0
    for (let electrodomestico in electrodomesticos) {
            costoTotalElectrodomesticos += electrodomesticos[electrodomestico];
       console.log(costoTotalElectrodomesticos)
     }*/
  });