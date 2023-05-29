export function toNumber(value: any, defaultValue = 0): number {
    const parsedValue = Number(value);
    return isNaN(parsedValue) ? defaultValue : parsedValue;
}
