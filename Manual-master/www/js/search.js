  new $.nd2Search({
  placeholder : "Buscar...",   // Placeholder in the search field
  defaultIcon : "globe-alt",  // optional: icon | null
  source : [{ label : 'Constitución de Mesa', value : 'constitucion.html', icon : 'custom-icon'}, 
            { label : 'Apertura y Proceso de Votacion', value : 'apertura.html', icon : 'custom-icon'},
            { label : 'Cierre de la Votacion', value : 'cierre.html', icon : 'custom-icon'},
            { label : 'Escrutinio y Llenado de Actas', value : 'escrutinio.html', icon : 'custom-icon'},
            { label : 'Muestras de Actas', value : 'muestras.html', icon : 'custom-icon'},
            { label : 'Inicio', value : 'index.html', icon : 'custom-icon'}],   // autocomplete : option-source
  fn : function(result) { // this function will be executed when a valid result item is selected
    console.log('--- Your custom handling ---');
    console.log('you picked: ');
    console.log(result);
    $(location).attr('href',result);
  }
});