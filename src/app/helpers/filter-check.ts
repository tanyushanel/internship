export function isSubstring(str: string | number | undefined, substr: string): boolean {
  if (str) {
    return str.toString().toLowerCase().includes(substr.toLowerCase());
  }
  return false;
}
