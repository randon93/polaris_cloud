import {EntityRepository, Repository} from '@iaminfinity/express-cassandra';
import {PersonaEntity} from "./persona.entity";

@EntityRepository(PersonaEntity)
export class PersonaDao extends Repository<PersonaEntity> {

}