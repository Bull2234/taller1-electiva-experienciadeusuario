const btnRetirar = document.getElementById('btn-retirar');
const billetes = document.getElementById('billetes');

const retirarDinero = () => {

    let cincoMil = 0;
    let diezMil = 0;
    let veinteMil = 0;
    let cincuentaMil = 0;
    let cienMil = 0;

    
    let valor = parseInt(document.getElementById('monto').value);
    
    let monto = valor;
    if(valor >= 50000 && valor <= 1200000){
        if(valor % 5000 === 0){
            while(monto !== 0){
                if(monto - 100000 >= 0){
                    cienMil ++;
                    monto = monto - 100000
                }else if(monto - 50000 >= 0){
                    cincuentaMil++;
                    monto =monto - 50000;
                }else if(monto - 20000 >= 0){
                    veinteMil++;
                    monto =monto - 20000;
                }else if(monto - 10000 >= 0){
                    diezMil++;
                    monto =monto - 10000;
                }else if(monto - 5000 >= 0){
                    cincoMil++;
                    monto =monto - 5000;
                }
            }   
            alert('Su retiro en billetes es....\n '+cienMil+' de cienMil \n'+cincuentaMil+' de cincuentaMil \n'+veinteMil+' de veinteMil \n'+diezMil+' de diezMil \n'+cincoMil+' de cincoMil')
        }else{
            alert('El monto debe ser multiplo de 5.000')
        }
    }else{
        alert('El monto debe estar entre 50.000 y 1.200.000')
    }

}

btnRetirar.addEventListener('click',retirarDinero)


