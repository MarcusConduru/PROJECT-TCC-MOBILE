export class PhoneFieldError extends Error {
  constructor() {
    super('Telefone Inválido');
    this.name = 'PhoneFieldError';
  }
}
