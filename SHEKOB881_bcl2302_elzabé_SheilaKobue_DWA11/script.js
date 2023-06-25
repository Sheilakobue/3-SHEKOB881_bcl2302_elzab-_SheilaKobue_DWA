class Counter {
  value = 1;

  increase() {
    this.value +=1

  }

  decrease(){
    this.value -=1

  }

  log(){
    console.log(this.value)

  }
}
const instance = new Counter()
instance.increase()
instance.decrease()
instance.log()
