export class Utils {
  static tryParse(value: any): string | number {
    const number = Number(value);

    if (!isNaN(number)) {
      return number;
    }

    return value?.toString();
  }
}
