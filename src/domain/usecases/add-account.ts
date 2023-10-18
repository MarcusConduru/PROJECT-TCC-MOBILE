export interface AddAccount {
  add: (params: TypeAddAccount) => void;
}

export type TypeAddAccount = {
  email: string;
  password: string;
  navigation: any;
  setLoading: Function;
};
