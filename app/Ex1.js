import {tracked} from '@glimmer/tracking';
export default class Ex1{
  MAX = 100;
  @tracked text;
  to;
  constructor(text, to) {
    this.text = text; // Texte
    this.to = to; // Destinataire
  }

  get size(){ // C'est une property, elle est considérée comme une donnée membre qui retourne le nombre total de caractères
    return this.text.length;
  }

  get isFull(){
    return this.MAX<= this.size;
  }
}
