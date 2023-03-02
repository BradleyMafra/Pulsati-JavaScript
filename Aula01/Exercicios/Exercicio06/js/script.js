const trocaCor = () => {
  let pegaSelect = document.getElementById("select").value;
  let div = document.getElementById("campoASerModificado");

  switch (pegaSelect) {
    case "Vermelho":
      div.style.backgroundColor = "red";
      break;
    case "Azul":
      div.style.backgroundColor = "blue";
      break;
    case "Verde":
      div.style.backgroundColor = "green";
      break;
    default:
        div.style.backgroundColor = "black";
      break;
  }
};
