import * as request from 'supertest';

import { Test, TestingModule } from '@nestjs/testing';

import { FilmsController } from './films.controller';
import { FilmsService } from './films.service';
import { INestApplication } from '@nestjs/common';

describe('FilmsController', () => {
    let app: INestApplication;
    let filmsService = { 
        findAll: () => 
            [
                {
                "_id": "671cf8025955a30e9910023c",
                "title": "The Empire Strikes Back",
                "episode_id": 5,
                "opening_crawl": "It is a dark time for the Rebellion...",
                "director": "Irvin Kershner",
                "producer": "Gary Kurtz, Rick McCallum",
                "release_date": "1980-05-17",
                "characters": ["https://swapi.dev/api/people/1/", "https://swapi.dev/api/people/2/"],
                "planets": ["https://swapi.dev/api/planets/4/", "https://swapi.dev/api/planets/5/"],
                "starships": ["https://swapi.dev/api/starships/3/", "https://swapi.dev/api/starships/10/"],
                "vehicles": ["https://swapi.dev/api/vehicles/8/", "https://swapi.dev/api/vehicles/14/"],
                "species": ["https://swapi.dev/api/species/1/", "https://swapi.dev/api/species/2/"],
                "created": "2014-12-12T11:26:24.656000Z",
                "edited": "2014-12-15T13:07:53.386000Z",
                "url": "https://swapi.dev/api/films/2/",
                "__v": 0
                }
            ],
        findOne: (episode: number) => 
            [
                {
                    "_id": "671cf8025955a30e9910023c",
                    "title": "The Empire Strikes Back",
                    "episode_id": `${episode}`,
                    "opening_crawl": "It is a dark time for the Rebellion...",
                    "director": "Irvin Kershner",
                    "producer": "Gary Kurtz, Rick McCallum",
                    "release_date": "1980-05-17",
                    "characters": ["https://swapi.dev/api/people/1/", "https://swapi.dev/api/people/2/"],
                    "planets": ["https://swapi.dev/api/planets/4/", "https://swapi.dev/api/planets/5/"],
                    "starships": ["https://swapi.dev/api/starships/3/", "https://swapi.dev/api/starships/10/"],
                    "vehicles": ["https://swapi.dev/api/vehicles/8/", "https://swapi.dev/api/vehicles/14/"],
                    "species": ["https://swapi.dev/api/species/1/", "https://swapi.dev/api/species/2/"],
                    "created": "2014-12-12T11:26:24.656000Z",
                    "edited": "2014-12-15T13:07:53.386000Z",
                    "url": "https://swapi.dev/api/films/2/",
                    "__v": 0
                    }
            ]
            
        
    };

    beforeEach(async () => {
        const moduleRef: TestingModule = await Test.createTestingModule({
        controllers: [FilmsController],
        providers: [
            { provide: FilmsService, useValue: filmsService },
        ],
        }).compile();

        app = moduleRef.createNestApplication();
        await app.init();
    });

    it('/GET films', () => {
        return request(app.getHttpServer())
        .get('/films')
        .expect(200)
        .expect(filmsService.findAll());
    });

    it('/GET :episode', () => {
        const episode:number = 5
        return request(app.getHttpServer())
        .get(`/films/${episode}`)
        .expect(200)
        .expect(filmsService.findOne(episode))
    })
});
