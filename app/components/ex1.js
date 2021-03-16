import Component from '@ember/component';
import {action} from '@ember/object';
import {tracked} from "@glimmer/tracking";

export default class Ex1Component extends Component {
  MAX = 100;
  @tracked text='Entrez votre texte !';
  @tracked alert='primary';
  @tracked savedText = '';
  @tracked saveDisplay = "none";

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

  @action save(text){
    this.savedText = text;
    if (this.savedText.length > 0){
      this.saveDisplay = "block";
    }
    else {
      this.saveDisplay = "none";
    }
  }

  @action alertColor(){
    if(this.MAX < 10){
      this.alert = "danger";
    }
    else if (this.MAX < 30){
      this.alert = "warning";
    }
    else if (this.MAX < 50){
      return this.alert = "success";
    }
    else{
      return this.alert = "primary";
    }
  }
}
