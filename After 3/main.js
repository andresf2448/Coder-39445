const calculos = (tema) => {
  if(tema === "masa"){
    return () => {
      //calculo de la masa
    }
  }

  if(tema === "grasa"){
    return () => {
      //calculo de la grasa
    }
  }
}

const grasa = calculos("grasa");
console.log(grasa());