import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Aeropuerto} from './aeropuerto.model';

@model({settings: {strict: false}})
export class Ruta extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;
  @property({
    type: 'string',
    required: true,
  })
  tiempo_estimado: string;

  @belongsTo(() => Aeropuerto, {name: 'origenfk'})
  origen: string;

  @belongsTo(() => Aeropuerto, {name: 'destinoFk'})
  destino: string;
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Ruta>) {
    super(data);
  }
}

export interface RutaRelations {
  // describe navigational properties here
}

export type RutaWithRelations = Ruta & RutaRelations;
