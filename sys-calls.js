const fs = require('fs');

fs.writeFileSync('sample.txt', 'This is a sample file with some text.');


fs.readFile('sample.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
  console.log('Contents of sample.txt:', data);

  
  const output = `Read from sample.txt:\n${data}`;
  fs.writeFile('output.txt', output, (err) => {
    if (err) {
      console.error('Error writing to file:', err);
      return;
    }
    console.log('Data successfully written to output.txt');

  });
});
const os = require('os');
console.log("Platform: " + os.platform());
console.log("Hostname: " + os.hostname());
console.log("Architecture: " + os.arch());