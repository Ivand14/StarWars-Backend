import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

import { Document } from "mongoose";

@Schema()
export class People extends Document{
    
    @Prop()
    name: string

    @Prop()
    height: number

    @Prop()
    mass: number

    @Prop()
    hair_color: string

    @Prop()
    skin_color: string

    @Prop()
    eye_color: string

    @Prop()
    birth_year: string
    
    @Prop()
    gender:string

    @Prop()
    homeworld: string

    @Prop([String])
    films: string[]

    @Prop([String])
    species: string[]

    @Prop([String])
    veichles: string[]

    @Prop([String])
    starships: string[]
    
    @Prop()
    creared: string

    @Prop()
    edited:string

    @Prop()
    url: string

}



export const peopleSchema = SchemaFactory.createForClass(People)