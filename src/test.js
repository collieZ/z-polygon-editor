const hel = 'hello'

const fn = () => {
  console.log(hel, 'zzw');
}

class ZZW {
  static age = 12
  constructor(name = 'zzw') {
    this.name = name
  }
  say() {
    console.log(this.name);
  }
}

export default ZZW