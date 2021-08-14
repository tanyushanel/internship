export function isSubstring(str: string | number, substr: string): boolean {
  if (str) {
    return str.toString().toLowerCase().includes(substr.toLowerCase());
  }
  return false;
}
