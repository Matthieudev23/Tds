import { tracked } from '@glimmer/tracking';

export default class ex1 {
  MAX = 100;
  @tracked text='bla';
  @tracked content;
  to;
  constructor(text, to) {
    this.text = text;
    this.to = to;
    this.content = content;
  }

  get size() {
    if(this.text.length == 0)
    return this.text.length;
  }

  get isFull() {
    return this.MAX <= this.size;
  }
}
