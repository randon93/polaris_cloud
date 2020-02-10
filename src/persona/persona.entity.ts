import {Entity, Column, GeneratedUUidColumn, IndexColumn} from '@iaminfinity/express-cassandra';

@Entity({
    // eslint-disable-next-line @typescript-eslint/camelcase
    table_name: 'persona',
    key: ["id"]
})
export class PersonaEntity {
    @GeneratedUUidColumn()
    private id: string;

    @Column({type: "text"})
    private numeroDocumento: string;

    @Column({type: "text"})
    @IndexColumn()
    private nombre: string;

}