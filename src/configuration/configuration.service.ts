import * as fs from 'fs';
import { parse } from 'dotenv';
import * as path from 'path';


export class ConfigurationService{
    private readonly envConfig: { [key: string]: string};
    constructor(){
        const isDevelopmentEnv = process.env.NODE_ENV !== "production";

        if (isDevelopmentEnv) {
            const envFilePath =path.join(__dirname, '..', '..', '..', '.env');
            const existPATH = fs.existsSync(envFilePath);

            if (!existPATH) {
                console.log('.env file not exist');
                process.exit(0);
            }
            this.envConfig = parse(fs.readFileSync(envFilePath));
        }else{
            this.envConfig = {
                PORT: process.env.PORT,
            }
        }       
    }

    get(key: string): string{
        return this.envConfig[key];
    }
}