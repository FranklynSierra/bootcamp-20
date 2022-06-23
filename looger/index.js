


// const error=err=>{
//     if(typeof err===String){
//         return 2*err
//     }
//     throw new Error('el valor debe ser un numero')
   


// }

// // const elDoble=miFuncion('hola')
// const numero="8";
// try{
//     console.log('el programa se ejecuta si esto funciona')
//     const doble=error(numero)
//     console.log(doble)
// }catch(e){
//     console.error(`el valor del error es ${e}`)
//     console.error('error')

// }finally{
//     console.log('esto se ejecuta si se produce un error')
// }






const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: { service: 'user-service' },
  transports: [
    //
    // - Write all logs with importance level of `error` or less to `error.log`
    // - Write all logs with importance level of `info` or less to `combined.log`
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
  ],
});

module.exports=logger;



























