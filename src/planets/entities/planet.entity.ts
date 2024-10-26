import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

import { Document } from "mongoose";

@Schema()
export class Planet extends Document {
    @Prop()
    name: string

    @Prop()
    rotation_period: number

    @Prop()
    orbital_period: number

    @Prop()
    diameter: number

    @Prop()
    climate: string

    @Prop()
    gravity: string

    @Prop()
    terrain: string
    
    @Prop()
    surface_water:string

    @Prop()
    population: string

    @Prop([String])
    residents: string[]

    @Prop([String])
    films: string[]

    
    @Prop()
    creared: string

    @Prop()
    edited:string

    @Prop()
    url: string
}

export const schemaPlanet =SchemaFactory.createForClass(Planet)