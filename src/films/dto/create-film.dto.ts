import { IsArray, IsNumber, IsPositive, IsString, Min } from "class-validator"

export class CreateFilmDto {

    @IsString()
    title: string
    
    @IsNumber()
    @IsPositive()
    @Min(1)
    episode_id: number
    
    @IsString()
    opening_crawl: string

    @IsString()
    director: string

    @IsString()
    producer: string
    
    @IsString()
    release_date: string

    @IsArray()
    @IsString({
        each:true
    })
    characters: string []

    @IsArray()
    @IsString({
        each:true
    })
    planets: string []

    @IsArray()
    @IsString({
        each:true
    })
    startships: string []

    @IsArray()
    @IsString({
        each:true
    })
    vehicles: string []

    @IsArray()
    @IsString({
        each:true
    })
    species: string []

    @IsString()
    created: string
    
    @IsString()
    edited: string
    
    @IsString()
    url: string
}
