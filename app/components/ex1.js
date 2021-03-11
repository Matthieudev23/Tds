import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class ex1Component extends Component {
  @tracked text;
  constructor() {
    super(...arguments);
    this.text=this.args.value;
  }
  get size() {
    if(this.text){
      return this.text.length;
    }
    return 0;
  }

  get full(){
    return this.max <= this.size;
  }
}
