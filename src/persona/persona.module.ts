import {Module} from '@nestjs/common';
import {PersonaDao} from "./persona.repository";
import {ExpressCassandraModule} from "@iaminfinity/express-cassandra";
import {PersonaEntity} from "./persona.entity";

@Module({
    imports: [ExpressCassandraModule.forFeature([PersonaEntity, PersonaDao])],
    exports: [ExpressCassandraModule.forFeature([PersonaEntity, PersonaDao])]
})
export class PersonaModule {
}
