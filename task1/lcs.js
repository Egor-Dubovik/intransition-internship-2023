const FCS = (strs) => {
  if (!strs.length) return "";
  if (strs.length === 1) return strs[0];
  let l = "",s = strs[0],len = s.length;
  for (let i = 0; i < len; i++) for (let j = i + 1; j <= len; j++) if (strs.every((x) => ~x.indexOf(s.slice(i, j))) && j - i > l.length) l = s.slice(i, j);
  return l;
}
console.log(FCS(process.argv.slice(2)));
