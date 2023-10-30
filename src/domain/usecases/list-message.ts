import {ListModel} from '../models';

export interface ListMessage {
  loadAll: (key: string) => ListModel;
}
