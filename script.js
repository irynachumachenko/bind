function logName() {
  console.log(this.name);
} 

const user = {
  name: 'Ira',
};

const bindedFn = logName.bind(user);

bindedFn();

function bind(fn, context) {
  return(...args) =>fn.bind(context, args);
}

console.log(bind);