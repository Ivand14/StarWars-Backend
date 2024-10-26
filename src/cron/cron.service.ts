import { Injectable, InternalServerErrorException, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import axios from 'axios';
import * as cron from 'node-cron';
import { envsValue } from '../config/envs';
import { Film } from 'src/films/entities/film.entity';
import { People } from 'src/people/entities/person.entity';
import { Starship } from 'src/starships/entities/starship.entity';
import { Planet } from 'src/planets/entities/planet.entity';
import { CreateStarshipDto } from 'src/starships/dto/create-starship.dto';
import { CreatePersonDto } from 'src/people/dto/create-person.dto';
import { CreatePlanetDto } from 'src/planets/dto/create-planet.dto';
import { CreateFilmDto } from 'src/films/dto/create-film.dto';

@Injectable()
export class CronService {
    private readonly logger = new Logger(CronService.name);

    constructor(
        @InjectModel(Film.name) private readonly filmModel: Model<Film>,
        @InjectModel(People.name) private readonly peopleModel: Model<People>,
        @InjectModel(Starship.name) private readonly starshipModel: Model<Starship>,
        @InjectModel(Planet.name) private readonly planetModel: Model<Planet>
    ) {
        this.scheduleCronJobs();
    }

    scheduleCronJobs() {
        cron.schedule('*/30 * * * * *', async () => {
        this.logger.log('Iniciando sincronización...');
        try {
            await this.syncFilms();
            await this.syncPeople();
            await this.syncStarships();
            await this.syncPlanets();
            this.logger.log('Sincronización completada.');
        } catch (error) {
            this.logger.error('Error durante la sincronización:', error);
        }
        });
    }

    async syncFilms() {
        const response = await axios.get(`${envsValue.API_URL}/films`);
        const films: CreateFilmDto[] = response.data.results;

        for (const filmData of films) {
        const existFilms = await this.filmModel.find({ title: filmData.title });

        if (existFilms.length > 0) {
            this.logger.log(`Film ${filmData.title}  already exists. continuing with the next.`);
            continue
        }

        await this.filmModel.create(filmData);
        }

        if (!films) throw new InternalServerErrorException("error when collecting data");
        return 'Films saved';
    }

    async syncPeople() {
        const response = await axios.get(`${envsValue.API_URL}/people`);
        const people: CreatePersonDto[] = response.data.results;

        for (const peopleData of people) {
        const existPeople = await this.peopleModel.find({ name: peopleData.name });

        if (existPeople.length > 0) {
            this.logger.log(`People ${peopleData.name}  already exists. continuing with the next.`);
            continue;
        }

        await this.peopleModel.create(peopleData);
        }

        if (!people) throw new InternalServerErrorException("error when collecting data");
        return 'People data saved successfully';
    }

    async syncStarships() {
        const response = await axios.get(`${envsValue.API_URL}/starships`);
        const starshipsData: CreateStarshipDto[] = response.data.results;

        for (const starships of starshipsData) {
        const existShip = await this.starshipModel.find({ name: starships.name });

        if (existShip.length > 0) {
            this.logger.log(`starships ${starships.name} already exists. Continuando con la siguiente.`);
            continue
        }

        await this.starshipModel.create(starships);
        }

        if (!starshipsData) throw new InternalServerErrorException("error when collecting data");
        return 'Starships saved successfully';
    }

    async syncPlanets() {
        const response = await axios.get(`${envsValue.API_URL}/planets`);
        const planets: CreatePlanetDto[] = response.data.results;

        for (const planet of planets) {
        const existPlanets = await this.planetModel.find({ name: planet.name });

        if (existPlanets.length > 0) {
            this.logger.log(`Planet ${planet.name} already exists. continuing with the next.`);
            continue
        }

        await this.planetModel.create(planet);
        }

        if (!planets) throw new InternalServerErrorException("error when collecting data");
        return 'Planets saved successfully';
    }
}
