import { Level } from '../../constants/data-constants';

export interface Audition {
  id: number;
  auditionAudio: string;
  level: Level;
  creationDate: string;
}
