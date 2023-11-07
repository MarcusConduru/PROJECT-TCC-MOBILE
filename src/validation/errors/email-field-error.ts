export class EmailFieldError extends Error {
  constructor() {
    super('Email Inválido');
    this.name = 'EmailFieldError';
  }
}
