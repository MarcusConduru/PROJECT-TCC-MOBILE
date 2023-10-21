/* eslint-disable react-hooks/exhaustive-deps */
import React, {useContext, useEffect, useState} from 'react';
import contextApi from '../../context/contextApi';
import {AccountModel} from '../../../domain/models';
import {MakeLogin} from '../../../main/factories/pages';

type Props = {
  Componet: React.ReactNode;
};

const render = (component: React.ReactNode) => {
  return component;
};

const PrivateRoute: React.FC<Props> = ({Componet}: Props) => {
  const [account, setAccount] = useState<AccountModel>();
  const {getCurrentAccount} = useContext(contextApi);

  useEffect(() => {
    getCurrentAccount().then(accountModel =>
      setAccount(JSON.parse(accountModel)),
    );
  }, []);

  return account ? render(Componet) : <MakeLogin />;
};

export default PrivateRoute;
