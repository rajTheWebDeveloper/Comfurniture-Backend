let generateRand = () => {
  let arr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
  let res = "";
  for (let i = 0; i <10; i++) {
    res += arr[Math.floor(Math.random() * arr.length - 1)];
  }
  return res;
};

export default generateRand;
