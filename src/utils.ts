export class Utils {
  static tryParse(value: any): string | number | null {
    if (value == null) {
      return null;
    }

    const number = Number(value);

    if (!isNaN(number)) {
      return number;
    }

    return value?.toString();
  }
}
