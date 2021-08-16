export function getKeyValue<T, K extends keyof T>(
  o: T,
  propertyNames: K,
): T[K] {
  return o[propertyNames];
}
