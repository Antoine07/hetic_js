
async function addition (numbers) {
  let p = init(numbers.pop())
  return await numbers.reduce((acc, number) => acc.then(s => s+number), p)
}

const init = (number) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (parseFloat(number) != number) {
        reject(new Error("not a number ..."));

        return;
      }
      resolve(parseFloat(number));
    }, 500);
  });

await addition([2,5,8,12,20])
