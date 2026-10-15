function processData(data: unknown): void {
  if (typeof data === 'string') {
    console.log(`Данные - строка, длина: ${data.length}`);
  } else if (typeof data === 'number') {
    console.log(`Данные - число, умноженное на 10: ${data * 10}`);
  } else if (Array.isArray(data)) {
    console.log(`Данные - массив, элементов: ${data.length}`);
  }
}

processData("Привет, мир!");
processData(5);            
processData([1, 2, 3, 4]);