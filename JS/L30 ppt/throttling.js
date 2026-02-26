function throttle(fn, limit) {
  let flag = true;
  return function (...args) {
    if (flag) {
      fn.apply(this, args);
      flag = false;
      setTimeout(() => flag = true, limit);
    }
  };
}

const onScroll = throttle(() => {
  console.log("Scroll event");
}, 1000);


function throttle(fn, limit) {
  let flag = true;
  return function (...args) {
    if (!flag) return;
    fn.apply(this, args);
    flag = false;
    setTimeout(() => (flag = true), limit);
  };
}
