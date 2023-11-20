function isNumber(number) {
  if (typeof number === 'number') {
    if (!Number.isFinite(number)) {
      return false;
    }
    return true;
  }
  return false;
}

console.log(isNumber(NaN));
