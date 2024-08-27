export function getItem(key: string): string | null {
  return localStorage.getItem(key);
}

export function setItem(key: string, value: string): void {
  localStorage.setItem(key, value);
}

export function removeItem(key: string): void {
  localStorage.removeItem(key);
}

export function setItems<T>(key: string, values: Array<T>) {
  localStorage.setItem(key, JSON.stringify(values));
}

export function getItems(key: string) {
  const localStorageKey = localStorage.getItem(key);

  if (localStorageKey) {
    return JSON.parse(localStorageKey);
  }
}
