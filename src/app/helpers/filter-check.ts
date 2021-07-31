export function isSubstring(str: string | number, substr: string): boolean {
  return str.toString().toLowerCase().includes(substr.toLowerCase());
}
