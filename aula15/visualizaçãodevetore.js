let valores = [8, 1, 7, 4, 2, 9]

// Forma usando o for
/*for(let pos =0; pos< valores.length; pos++){
    console.log(`A posião ${pos} tem o valor ${valores[pos]}`)
}*/


//forma usando for 'in' for feito para array e objetos
for(let pos in valores){
    console.log(`A posião ${pos} tem o valor ${valores[pos]}`)
}