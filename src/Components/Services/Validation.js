export default class Validation {
  static validSKU(data) {
    const pattern = /^([A-Z0-9]){8}$/;
    if (data.match(pattern)) return true;
    return false;
  }

  static validName(data) {
    const pattern = /^([A-Za-z0-9\s]){3,}$/;
    if (data.match(pattern)) return true;
    return false;
  }

  static validNumInp(data) {
    const answer = parseFloat(data);
    if (answer && answer > 0) return true;
    return false;
  }
}
