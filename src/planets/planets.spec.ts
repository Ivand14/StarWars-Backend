import * as request from  'supertest'

import { Test, TestingModule } from '@nestjs/testing';

import { INestApplication } from '@nestjs/common';
import { PlanetsController } from './planets.controller';
import { PlanetsService } from './planets.service';

describe('PlanetController', () => {
    let app : INestApplication
    let planetService = {
        findAll : () => [
            {
                "name": "Tatooine", 
                "rotation_period": "23", 
                "orbital_period": "304", 
                "diameter": "10465", 
                "climate": "arid", 
                "gravity": "1 standard", 
                "terrain": "desert", 
                "surface_water": "1", 
                "population": "200000", 
                "residents": [
                    "https://swapi.dev/api/people/1/", 
                    "https://swapi.dev/api/people/2/", 
                    "https://swapi.dev/api/people/4/", 
                    "https://swapi.dev/api/people/6/", 
                    "https://swapi.dev/api/people/7/", 
                    "https://swapi.dev/api/people/8/", 
                    "https://swapi.dev/api/people/9/", 
                    "https://swapi.dev/api/people/11/", 
                    "https://swapi.dev/api/people/43/", 
                    "https://swapi.dev/api/people/62/"
                ], 
                "films": [
                    "https://swapi.dev/api/films/1/", 
                    "https://swapi.dev/api/films/3/", 
                    "https://swapi.dev/api/films/4/", 
                    "https://swapi.dev/api/films/5/", 
                    "https://swapi.dev/api/films/6/"
                ], 
                "created": "2014-12-09T13:50:49.641000Z", 
                "edited": "2014-12-20T20:58:18.411000Z", 
                "url": "https://swapi.dev/api/planets/1/"
            }
        ],
        
            findOne : (name:string) => [
                {
                    "name": `${name}`, 
                    "rotation_period": "23", 
                    "orbital_period": "304", 
                    "diameter": "10465", 
                    "climate": "arid", 
                    "gravity": "1 standard", 
                    "terrain": "desert", 
                    "surface_water": "1", 
                    "population": "200000", 
                    "residents": [
                        "https://swapi.dev/api/people/1/", 
                        "https://swapi.dev/api/people/2/", 
                        "https://swapi.dev/api/people/4/", 
                        "https://swapi.dev/api/people/6/", 
                        "https://swapi.dev/api/people/7/", 
                        "https://swapi.dev/api/people/8/", 
                        "https://swapi.dev/api/people/9/", 
                        "https://swapi.dev/api/people/11/", 
                        "https://swapi.dev/api/people/43/", 
                        "https://swapi.dev/api/people/62/"
                    ], 
                    "films": [
                        "https://swapi.dev/api/films/1/", 
                        "https://swapi.dev/api/films/3/", 
                        "https://swapi.dev/api/films/4/", 
                        "https://swapi.dev/api/films/5/", 
                        "https://swapi.dev/api/films/6/"
                    ], 
                    "created": "2014-12-09T13:50:49.641000Z", 
                    "edited": "2014-12-20T20:58:18.411000Z", 
                    "url": "https://swapi.dev/api/planets/1/"
                }
        ]
    }

    beforeEach(async() => {
        const moduleRef: TestingModule = await Test.createTestingModule({
            controllers: [PlanetsController],
            providers:[{provide: PlanetsService, useValue: planetService}]
        }).compile()

        app = moduleRef.createNestApplication()
        await app.init()

    })

    it('/GET planets', () => {
        return request(app.getHttpServer())
        .get('/planets')
        .expect(200)
        .expect(planetService.findAll())
    })

    it('/GET planets/:name', () => {
        const name:string = 'Tatooine'
        return request(app.getHttpServer())
        .get(`/planets/${name}`)
        .expect(200)
        .expect(planetService.findOne(name))
    })

})