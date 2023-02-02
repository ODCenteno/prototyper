const fnAsync = () => {
  return new Promise((resolve, reject) => {
    true ? setTimeout(() => resolve('Async on!'), 2000) : reject( new Error('Error, no async'));
  })
}

const anotherFn = async () => {
  const something = await fnAsync();
  console.log(something);
}

anotherFn();
