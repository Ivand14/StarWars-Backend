import 'dotenv/config'

import * as Joi from 'joi'

interface Envs{
    PORT : number,
    API_URL: string
}


const schema = Joi.object({
    PORT : Joi.number().required(),
    API_URL: Joi.string().required()
}).unknown(true)


const {error,value} = schema.validate(process.env)

if(error)
    throw new Error(`Config validation error ${error.message}`)

const envs : Envs = value

export const envsValue = {
    PORT : envs.PORT,
    API_URL : envs.API_URL
}