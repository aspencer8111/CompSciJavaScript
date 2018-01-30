class Queue {
  constructor(){
    this.store = {},
    this.head = 0,
    this.tail = 0
  }

  enqueue(el){
    this.store[this.head] = el
    this.head++
    return this.store
  }

  dequeue(){
    let el = this.store[this.tail]
    delete this.store[this.tail]
    this.tail++
    return el
  }

  peek(){
    return this.store[this.tail]
  }

  size(){
    return this.head - this.tail
  }
}
