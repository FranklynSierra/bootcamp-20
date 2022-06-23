


const error=err=>{
    if(typeof err===String){
        return 2*err
    }
    throw new Error('el valor debe ser un numero')
   


}

// const elDoble=miFuncion('hola')
const numero="8";
try{
    console.log('el programa se ejecuta si esto funciona')
    const doble=error(numero)
    console.log(doble)
}catch(e){
    console.error(`el valor del error es ${e}`)
    console.error('error')

}finally{
    console.log('esto se ejecuta si se produce un error')
}

const logger=require('./looger')


logger.info('estoy saliendo en pantalla')

 



























