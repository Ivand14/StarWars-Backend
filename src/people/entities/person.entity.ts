import { Prop, Schema } from "@nestjs/mongoose";

@Schema()
export class Person {
    
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


}
