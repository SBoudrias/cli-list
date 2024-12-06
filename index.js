module.exports = function list(args) {
  const res = [];
  let temp = [];
  for (let i = 0, max = args.length; i < max; i++) {
    const arg = args[i];
    if (arg[arg.length - 1] === ',') {
      temp.push(arg.slice(0, -1));
      res.push(temp);
      temp = [];
    } else {
      temp.push(arg);
    }
  }
  res.push(temp);
  return res;
};
