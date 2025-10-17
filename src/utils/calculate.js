export function calculate(input) {
  if (!input) return 0;

  let DELIMITER = /[,:]/;
  let numberString = input;

  if (input.startsWith('//')) {
    const newlineIndex = input.indexOf('\\n');

    if (newlineIndex === -1) {
      throw new Error('[ERROR] 커스텀 구분자 형식이 올바르지 않습니다.');
    }

    const customDelimiter = input.substring(2, newlineIndex);
    numberString = input.substring(newlineIndex + 2);
    DELIMITER = customDelimiter;
  }

  const stringNumbers = numberString.split(DELIMITER);

  const sum = stringNumbers.reduce((currentSum, strNum) => {
    const trimmedStr = strNum.trim();
    if (trimmedStr === '') {
      throw new Error('[ERROR] 숫자 사이에 구분자가 연속으로 올 수 없습니다.');
    }

    const num = Number(trimmedStr);

    if (isNaN(num)) throw new Error('[ERROR] 유효하지 않은 숫자입니다.');
    if (num < 0) throw new Error('[ERROR] 음수는 허용되지 않습니다.');

    return currentSum + num;
  }, 0);

  return sum;
}
