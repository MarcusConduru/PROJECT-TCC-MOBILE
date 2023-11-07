export class MinFieldError extends Error {
  constructor() {
    super('A senha deve ter pelo menos 6 caracteres');
    this.name = 'MinFieldError';
  }
}
