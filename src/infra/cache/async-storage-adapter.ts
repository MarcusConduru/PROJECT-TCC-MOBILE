import AsyncStorage from '@react-native-async-storage/async-storage';
import {getStorage, setStorage} from '../../data/protocols/cache';

export class AsyncStorageAdapter implements setStorage, getStorage {
  async get(key: string): Promise<any> {
    return await AsyncStorage.getItem(key);
  }

  async set(name: string, value: object): Promise<void> {
    if (value) {
      await AsyncStorage.setItem(name, JSON.stringify(value));
    } else {
      await AsyncStorage.removeItem(name);
    }
  }
}
