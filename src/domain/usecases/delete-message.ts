export interface DeleteMessage {
  delete: (params: string) => Promise<void>;
}
