// Набор функций, для удобной работы с локальным хранилищем

export function getItem(key: string): string | null {
  return localStorage.getItem(key);
}

export function setItem(key: string, value: string): void {
  localStorage.setItem(key, value);
}

export function removeItem(key: string): void {
  localStorage.removeItem(key);
}

export function getItems(key: string) {
  const localStorageKey = localStorage.getItem(key);

  if (localStorageKey) {
    return JSON.parse(localStorageKey);
  }
}


export function setItems<T>(key: string, values: Array<T>) {
  localStorage.setItem(key, JSON.stringify(values));
}

export function pushItems(key: string, newValue: string) {
  const items = getItems(key) || [];

  const allItems = [...items, newValue];

  setItems<string>(key, allItems);
}