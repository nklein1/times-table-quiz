
export function getRandomString() {
  return Math.random().toString(36).substring(2, 8) + Math.random().toString(36).substring(2, 8);
}