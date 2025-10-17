import { Console } from '@woowacourse/mission-utils';
function calculate(input) {
  if (!input) return 0;

  let delimiter = /[,:]/;
  let numberString = input;

  if (input.startsWith('//')) {
    const newlineIndex = input.indexOf('\\n');

    if (newlineIndex === -1) {
      throw new Error('[ERROR] 커스텀 구분자 형식이 올바르지 않습니다.\n');
    }

    const customDelimiter = input.substring(2, newlineIndex);
    numberString = input.substring(newlineIndex + 2);
    delimiter = customDelimiter;
  }

  const splitInput = numberString.split(delimiter);

  const sum = splitInput.reduce((currentSum, stringInput) => {
    const num = Number(stringInput);
    if (isNaN(num)) throw new Error('숫자를 입력해 주세요.\n');
    if (num < 0) throw new Error('양수를 입력해 주세요.\n');

    return currentSum + num;
  }, 0);

  return sum;
}

class App {
  async run() {
    try {
      const input = await Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n');
      const result = calculate(input);
      Console.print(`결과: ${result}`);
    } catch (error) {
      Console.print(`[Error] ${error.message}`);
    }
  }
}

export default App;
