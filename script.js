window.addEventListener("resize", () => {
  const checkbox = document.getElementById("menu_hamb");

  // Si el ancho es mayor a 768px, desmarcamos el menú
  if (window.innerWidth > 768 && checkbox.checked) {
    checkbox.checked = false;
  }
});
