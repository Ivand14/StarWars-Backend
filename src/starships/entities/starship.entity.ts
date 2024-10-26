import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

import { Document } from "mongoose";

@Schema()
export class Starship extends Document {
    @Prop() name: string;
    @Prop({alias:'model'}) shipModel: string;
    @Prop() manufacturer: string;
    @Prop() cost_in_credits: string;
    @Prop() length: string;
    @Prop() max_atmosphering_speed: string;
    @Prop() crew: string;
    @Prop() passengers: string;
    @Prop() cargo_capacity: number;
    @Prop() consumables: string;
    @Prop() MGLT: number;
    @Prop() starship_class: string;
    @Prop([String]) pilots: string[];
    @Prop([String]) films: string[];
    @Prop() created: string;
    @Prop() edited: string;
    @Prop() url: string;
}

export const StarshipSchema = SchemaFactory.createForClass(Starship);
