import * as request from 'supertest'

import { Test, TestingModule } from "@nestjs/testing"

import { INestApplication } from "@nestjs/common"
import { StarshipsController } from "./starships.controller"
import { StarshipsService } from "./starships.service"

describe('StarshipController', () => {
    let app: INestApplication

    let starshipService = {
        findAll: () => [
            {
                "_id": "671cf8025955a30e9910023c",
                "name": "CR90 corvette", 
                "model": "CR90 corvette", 
                "manufacturer": "Corellian Engineering Corporation", 
                "cost_in_credits": "3500000", 
                "length": "150", 
                "max_atmosphering_speed": "950", 
                "crew": "30-165", 
                "passengers": "600", 
                "cargo_capacity": "3000000", 
                "consumables": "1 year", 
                "hyperdrive_rating": "2.0", 
                "MGLT": "60", 
                "starship_class": "corvette", 
                "pilots": [], 
                "films": [
                    "https://swapi.dev/api/films/1/", 
                    "https://swapi.dev/api/films/3/", 
                    "https://swapi.dev/api/films/6/"
                ], 
                "created": "2014-12-10T14:20:33.369000Z", 
                "edited": "2014-12-20T21:23:49.867000Z", 
                "url": "https://swapi.dev/api/starships/2/"
            }
        ],
        findOne: (name:string) => [
            {
                "_id": "671cf8025955a30e9910023c",
                "name": `${name}`, 
                "model": "CR90 corvette", 
                "manufacturer": "Corellian Engineering Corporation", 
                "cost_in_credits": "3500000", 
                "length": "150", 
                "max_atmosphering_speed": "950", 
                "crew": "30-165", 
                "passengers": "600", 
                "cargo_capacity": "3000000", 
                "consumables": "1 year", 
                "hyperdrive_rating": "2.0", 
                "MGLT": "60", 
                "starship_class": "corvette", 
                "pilots": [], 
                "films": [
                    "https://swapi.dev/api/films/1/", 
                    "https://swapi.dev/api/films/3/", 
                    "https://swapi.dev/api/films/6/"
                ], 
                "created": "2014-12-10T14:20:33.369000Z", 
                "edited": "2014-12-20T21:23:49.867000Z", 
                "url": "https://swapi.dev/api/starships/2/"
            }
        ]
    }

    beforeEach(async() => {
        const moduleRef: TestingModule = await Test.createTestingModule({
            controllers:[StarshipsController],
            providers: [{provide: StarshipsService, useValue: starshipService}]
        }).compile()

        app = moduleRef.createNestApplication()
        await app.init()
    })

    it('/GET /starships', () => {
        return request(app.getHttpServer())
        .get(`/starships`)
        .expect(200)
        .expect(starshipService.findAll())
    })

    it('/GET starships/:name', () => {
        const name:string = "CR90 corvette"
        return request(app.getHttpServer())
        .get(`/starships/${name}`)
        .expect(200)
        .expect(starshipService.findOne(name))
    })
    
})