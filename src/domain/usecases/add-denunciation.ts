export interface AddDenunciation {
  add: (params: TypeAddDenunciation) => Promise<void>;
}

export type TypeAddDenunciation = {
  userID: string;
  title: string;
  phone: string;
  address: string;
  complement: string;
  description: string;
  latitude: number;
  longitude: number;
};
