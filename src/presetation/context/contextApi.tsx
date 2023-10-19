import {createContext} from 'react';
import {AccountModel} from '../../domain/models';

type Props = {
  getCurrentAccount: () => Promise<any>;
  setCurrentAccount: (account: AccountModel) => void;
};

export default createContext<Props>(null as any);
