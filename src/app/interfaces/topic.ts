import { Level } from '../../constants/data-constants';

export interface Topic {
  id: number;
  text: string;
  level: Level;
  creationDate: string;
}
