const fs = require('fs');

// 1. Create a sample.txt file and add some text
fs.writeFileSync('sample.txt', 'This is a sample file with some text.');

// 2. Read the contents of sample.txt using fs.readFile()
fs.readFile('sample.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
  console.log('Contents of sample.txt:', data);

  // 3. Write data to output.txt using fs.writeFile()
  const output = `Read from sample.txt:\n${data}`;
  fs.writeFile('output.txt', output, (err) => {
    if (err) {
      console.error('Error writing to file:', err);
      return;
    }
    console.log('Data successfully written to output.txt');
  });
});
