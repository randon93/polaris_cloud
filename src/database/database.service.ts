import {ExpressCassandraModule, auth} from "@iaminfinity/express-cassandra";
import { ConfigurationService } from "src/configuration/configuration.service";
import { ConfigurationModule } from "src/configuration/configuration.module";
import { Configuration } from "src/configuration/config.keys";


export const databaseProviders = [
    ExpressCassandraModule.forRootAsync({
        imports: [ConfigurationModule],
        inject: [ConfigurationService],
        useFactory(Config: ConfigurationService){
          return {
            clientOptions: {
                contactPoints: [Config.get(Configuration.HOST)],
                keyspace: Config.get(Configuration.DATABASE),
                protocolOptions: {
                    port: parseInt(Config.get(Configuration.PORT)),
                },
                queryOptions: {
                    consistency: 1,
                },
                authProvider: new auth.PlainTextAuthProvider(Config.get(Configuration.USERNAME), Config.get(Configuration.PASSWORD)),
            },
            ormOptions: {
                createKeyspace: true,
                defaultReplicationStrategy: {
                    class: 'SimpleStrategy',
                    replication_factor: 1,
                  },
                  migration: 'alter',
            },
        };
        } 
    })
  
]