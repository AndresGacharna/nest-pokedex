import * as Joi from 'joi';

export const JoiValidationSchema = Joi.object({
    MONGODB: Joi.required(), // Si no viene el mongo db salta error
    PORT: Joi.number().default(3005),
    DEFAULT_LIMIT: Joi.number().default(6), // El JoiValidationSchema (La clase actual): Verifica que si el "DEFAULT_LIMIT" no viene, 
                                            // establece el que digamos en este caso 6 y Cuando llega a env.config.ts ya se tiene el 
                                            // Process.env con el valor de 6 (Revisar env.config.ts)
})