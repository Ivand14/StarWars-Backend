import { IsArray, IsNumber, IsPositive, IsString } from "class-validator"

export class CreatePersonDto {

    @IsString()
    name: string

    @IsNumber()
    @IsPositive()
    height: number

    @IsNumber()
    @IsPositive()
    mass: number

    @IsString()
    hair_color: string

    @IsString()
    skin_color: string

    @IsString()
    eye_color: string

    @IsString()
    birth_year: string
    
    @IsString()
    gender:string

    @IsString()
    homeworld: string

    
    @IsArray({
        each:true
    })
    films: string[]

    @IsArray({
        each:true
    })
    species: string[]

    @IsArray({
        each:true
    })
    veichles: string[]

    @IsArray({
        each:true
    })
    starships: string[]
    
    @IsString()
    creared: string

    @IsString()
    edited:string

    @IsString()
    url: string
    
}
