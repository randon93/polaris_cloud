import {Injectable} from '@nestjs/common';
import {InjectRepository} from "@iaminfinity/express-cassandra";
import {PersonaDao} from "../persona/persona.repository";

@Injectable()
export class PersonaService {
    constructor(
        @InjectRepository(PersonaDao)
        private readonly personaDao: PersonaDao,
    ) {
    }

    findAll() {
        return this.personaDao.find({});
    }

}
