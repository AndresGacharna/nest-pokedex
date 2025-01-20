
export const EnvConfiguration=() =>({ //MAPEAR VARIABLES DE ENTORNO A UN OBJETO QUE ES ESTE
    enviroment: process.env.NODE_ENV || 'dev',
    mongodb: process.env.MONGODB,
    port: process.env.PORT || 3002,
    defaultLimit: +process.env.DEFAULT_LIMIT || 7 // Acá en caso de no haber valor en el archivo ".env" lo que hace "joi.validation.ts" es reemplazar el valor
                                                 // en caso de no haber y si no hubiera nada en "joi.validation.ts" ahí si aplica el "7" de este documento.


                                                 // El signo + cambia las variables a número... En este caso lo hacemos porque las VARIABLES DE ENTORNO
                                                 // se guardan siempre como strings y toca transformar el tipo de dato para que se entienda
})