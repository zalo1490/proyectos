function obtenerPreciosDeElectricidad() {
    fetch('https://bypass-cors-beta.vercel.app/?url=https://api.preciodelaluz.org/v1/prices/all?zone=PCB')
        .then(response => response.json())
        .then(response => {
            console.log(response)
            const price = response.response.price; 
            document.getElementById('current-price').textContent = `${price} €/kWh`;
        })
        .catch(error => {
            console.error('Error al obtener los precios: ', error);
            document.getElementById('current-price').textContent = 'Error al obtener precios';
        });
}

// Actualiza  cada 5 minutos
obtenerPreciosDeElectricidad();
setInterval(obtenerPreciosDeElectricidad, 300000); // 300,000 ms = 5 minutos
