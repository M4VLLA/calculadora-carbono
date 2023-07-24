function calcularHuella() {
    const tipoCalculo = document.getElementById('tipoCalculo').value;
    const valor = parseFloat(document.getElementById('valor').value);
  
    if (isNaN(valor) || valor <= 0) {
      alert('Ingresa un valor válido.');
      return;
    }
  
    let huellaCarbono = 0;
    let unidad = '';
  
    if (tipoCalculo === 'energia') {
      const factorEmisionCO2 = 0.5; // Supongamos que el factor de emisión es de 0.5 kg de CO2 por kWh consumido
      huellaCarbono = valor * factorEmisionCO2;
      unidad = 'kg de CO2';
    } else if (tipoCalculo === 'distancia') {
      const factorEmisionCO2Auto = 0.2; // Supongamos que el factor de emisión es de 0.2 kg de CO2 por km recorrido en automóvil
      huellaCarbono = valor * factorEmisionCO2Auto;
      unidad = 'kg de CO2';
    }
  
    mostrarResultado(huellaCarbono, unidad);
  }
  
  function mostrarResultado(huellaCarbono, unidad) {
    const resultadoElement = document.getElementById('resultado');
    resultadoElement.innerHTML = `
      <p>Resultado del cálculo:</p>
      <p>Tu huella de carbono es de <strong>${huellaCarbono.toFixed(2)} ${unidad}</strong>.</p>
      <p>Esto equivale a plantar aproximadamente <strong>${(huellaCarbono / 0.9).toFixed(2)} árboles</strong> al año para compensar tu huella de carbono.</p>
    `;
  }
  