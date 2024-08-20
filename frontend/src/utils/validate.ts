export function validateFn<T>(forValidate: T[], whiWhat: T): boolean {
    return !forValidate.some((item: T) => item === whiWhat);
}