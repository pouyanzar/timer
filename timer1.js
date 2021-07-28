const args = process.argv;
if (args.length < 3) {
  return console.log("No alarm scheduled!!!");
}
for (const arg of args) {
  if (arg < 0) {
    continue;
  }
  setTimeout(() => process.stdout.write('\x07'), arg * 1000);
}
