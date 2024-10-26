import * as request from 'supertest';

import { Test, TestingModule } from '@nestjs/testing';

import { INestApplication } from '@nestjs/common';
import { PeopleController } from "./people.controller"
import { PeopleService } from './people.service';

describe('PeopleController', () => {
    let app : INestApplication
    let peopleService = {
        findAll: () => [
            {
                "_id": "671cf8025955a30e9910023c",
                "name": "Luke Skywalker", 
                "height": "172", 
                "mass": "77", 
                "hair_color": "blond", 
                "skin_color": "fair", 
                "eye_color": "blue", 
                "birth_year": "19BBY", 
                "gender": "male", 
                "homeworld": "https://swapi.dev/api/planets/1/", 
                "films": [
                    "https://swapi.dev/api/films/1/", 
                    "https://swapi.dev/api/films/2/", 
                    "https://swapi.dev/api/films/3/", 
                    "https://swapi.dev/api/films/6/"
                ], 
                "species": [], 
                "vehicles": [
                    "https://swapi.dev/api/vehicles/14/", 
                    "https://swapi.dev/api/vehicles/30/"
                ], 
                "starships": [
                    "https://swapi.dev/api/starships/12/", 
                    "https://swapi.dev/api/starships/22/"
                ], 
                "created": "2014-12-09T13:50:51.644000Z", 
                "edited": "2014-12-20T21:17:56.891000Z", 
                "url": "https://swapi.dev/api/people/1/",
                "_v": 0
            }
        ],
        findOne: (name:string) => [
            {
                "_id": "671cf8025955a30e9910023c",
                "name": `${name}`, 
                "height": "172", 
                "mass": "77", 
                "hair_color": "blond", 
                "skin_color": "fair", 
                "eye_color": "blue", 
                "birth_year": "19BBY", 
                "gender": "male", 
                "homeworld": "https://swapi.dev/api/planets/1/", 
                "films": [
                    "https://swapi.dev/api/films/1/", 
                    "https://swapi.dev/api/films/2/", 
                    "https://swapi.dev/api/films/3/", 
                    "https://swapi.dev/api/films/6/"
                ], 
                "species": [], 
                "vehicles": [
                    "https://swapi.dev/api/vehicles/14/", 
                    "https://swapi.dev/api/vehicles/30/"
                ], 
                "starships": [
                    "https://swapi.dev/api/starships/12/", 
                    "https://swapi.dev/api/starships/22/"
                ], 
                "created": "2014-12-09T13:50:51.644000Z", 
                "edited": "2014-12-20T21:17:56.891000Z", 
                "url": "https://swapi.dev/api/people/1/",
                "_v": 0
            }
        ]
    }

    beforeEach(async() => {
        const moduleRef: TestingModule = await Test.createTestingModule({
            controllers:[PeopleController],
            providers: [
                {provide: PeopleService, useValue: peopleService}
            ]
        }).compile()

        app = moduleRef.createNestApplication();
        await app.init();
    })


    it('/GET people', () => {
        return request(app.getHttpServer())
        .get('/people')
        .expect(200)
        .expect(peopleService.findAll())
        
    })

    it('/GET people/:name', () => {

        const name:string = 'Luke Skywalker'

        return request(app.getHttpServer())
        .get(`/people/${name}`)
        .expect(200)
        .expect(peopleService.findOne(name))
    })

    
    
})