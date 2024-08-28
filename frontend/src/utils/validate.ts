// Функция, проверяющая содержит ли массив типа T определенный элемент
export function validateFn<T>(forValidate: T[], whiWhat: T): boolean {
    return !forValidate.some((item: T) => item === whiWhat);
}