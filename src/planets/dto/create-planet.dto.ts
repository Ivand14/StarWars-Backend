import { IsArray, IsNumber, IsPositive, IsString } from 'class-validator';

export class CreatePlanetDto {
    @IsString()
    name: string;

    @IsNumber()
    @IsPositive()
    rotation_period: number;

    @IsNumber()
    @IsPositive()
    orbital_period: number;

    @IsNumber()
    @IsPositive()
    diameter: number;

    @IsString()
    climate: string;

    @IsString()
    gravity: string;

    @IsString()
    terrain: string;

    @IsString()
    surface_water: string;

    @IsNumber()
    @IsPositive()
    population: number;

    @IsArray()
    @IsString({ each: true })
    residents: string[];

    @IsArray()
    @IsString({ each: true })
    films: string[];

    @IsString()
    created: string;

    @IsString()
    edited: string;

    @IsString()
    url: string;
}
