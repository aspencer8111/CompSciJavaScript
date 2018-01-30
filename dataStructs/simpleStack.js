class Stack {
  constructor(){
    this.store = {},
    this.index = 0
  }

  push(el){
    this.store[this.index++] = el
    return this.store
  }

  pop(){
    let popped = this.store[this.index - 1]
    delete this.store[this.index--]
    return popped
  }

  size(){
    return this.index
  }
}
