function mostrarDetalle(elemento) {
  const detalle = elemento.querySelector('.detalle');
  const visible = detalle.style.display === 'block';
  detalle.style.display = visible ? 'none' : 'block';
}
