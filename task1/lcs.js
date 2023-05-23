const strs = process.argv.slice(2);
const strsLength = strs.length;

if (strsLength === 0) {
  console.log("");
} else if (strsLength === 1) {
  console.log(strs[0]);
} else {
  let lcs = "";
  const shortestStr = strs.reduce((a, b) => (a.length < b.length ? a : b));
  for (let i = 0; i < shortestStr.length; i++) {
    for (let j = i + 1; j <= shortestStr.length; j++) {
      const substr = shortestStr.slice(i, j);
      let isCommon = true;
      for (let k = 0; k < strsLength; k++) {
        if (!strs[k].includes(substr)) {
          isCommon = false;
          break;
        }
      }
      if (isCommon && substr.length > lcs.length) {
        lcs = substr;
      }
    }
  }
  console.log(lcs);
}
