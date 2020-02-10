import {Module} from '@nestjs/common';
import {DatabaseModule} from './database/database.module';
import {PersonaController} from './persona/persona.controller';
import {PersonaService} from './persona/persona.service';
import {PersonaModule} from "./persona/persona.module";
import { ConfigurationModule } from './configuration/configuration.module';
import { ConfigurationService } from './configuration/configuration.service';

@Module({
    imports: [PersonaModule, DatabaseModule, ConfigurationModule, ConfigurationService],
    controllers: [PersonaController],
    providers: [PersonaService],
})
export class AppModule {
}
