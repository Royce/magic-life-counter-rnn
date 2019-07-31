export function numberAsStringWithExplicitSign(number) {
  return number === 0
    ? '0'
    : number > 0
    ? `+${number.toString()}`
    : number.toString();
}
