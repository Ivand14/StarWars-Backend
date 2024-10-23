import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

import { Document } from "mongoose";

@Schema()
export class Film extends Document {

    @Prop()
    title: string
    
    @Prop({
        unique:true,
        index:true,
    })
    episode_id: number
    
    @Prop()
    opening_crawl: string

    @Prop()
    director: string

    @Prop()
    producer: string
    
    @Prop()
    release_date: string

    @Prop([String])
    characters: string []

    @Prop([String])
    planets: string []

    @Prop([String])
    startships: string []

    @Prop([String])
    vehicles: string []

    @Prop([String])
    species: string []

    @Prop()
    created: string
    
    @Prop()
    edited: string
    
    @Prop()
    url: string


}


export const filmSchema = SchemaFactory.createForClass(Film)