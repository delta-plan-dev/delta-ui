export class Utils {
  static tryParse(value: any): string | number {
    const number = Number(value);

    if (!isNaN(number)) {
      return value;
    }

    return String(value);
  }
}
