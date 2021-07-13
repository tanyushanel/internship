import { Level } from '../../constants/route-constant';

export interface Topic {
  id: number;
  level: Level;
  topicText: string;
  creationDate: string;
}
