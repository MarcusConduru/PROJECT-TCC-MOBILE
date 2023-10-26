export interface DeleteImage {
  delete: (params: PropsDeleteImage) => Promise<void>;
}

export type PropsDeleteImage = {
  key: string;
  image: string;
};
