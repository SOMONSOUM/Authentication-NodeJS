const ALPHABET = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

export function TokenGeneration() {
  let token = '';
  for (let i = 0; i < 16; i++) {
    token += ALPHABET.charAt(Math.floor(Math.random() * ALPHABET.length));
  }
  return token;
}