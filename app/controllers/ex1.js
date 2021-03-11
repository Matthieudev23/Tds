import Controller from '@ember/controller';
import {action} from '@ember/object';
import {tracked} from "@glimmer/tracking";

export default class Ex1Controller extends Controller {
  MAX = 100;
  @tracked text='Entrez votre texte !';
  @tracked content;
  @tracked info='';

  get size() {
    if(this.text) {
      return this.text.length;
    }
    return 0;
  }

  get isFull() {
    return this.MAX <= this.size;
  }
  @action reset(){
    this.text='';
  }

  get style(){

  }

  @save login(){

  }

  @update transform(){

  }
}
