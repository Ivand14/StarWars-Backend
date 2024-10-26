import { IsArray, IsNumber, IsPositive, IsString } from "class-validator";

export class CreateStarshipDto {
    @IsString()
    name: string;
    
    @IsString()
    model: string;

    @IsString()
    manufacturer: string;

    @IsNumber()
    @IsPositive()
    cost_in_credits: number;
    
    @IsNumber()
    @IsPositive()
    length: number;

    @IsString()
    passengers: string;

    @IsNumber()
    @IsPositive()
    cargo_capacity: number;

    @IsString()
    consumables: string;

    @IsNumber()
    @IsPositive()
    MGLT: number;

    @IsString()
    starship_class: string;

    @IsArray({each:true})
    pilots: string[];

    @IsArray({each:true})
    films: string[];

    @IsString()
    created: string;  

    @IsString()
    edited: string;

    @IsString()
    url: string;
}
