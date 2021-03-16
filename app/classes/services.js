import {tracked} from '@glimmer/tracking'
export default class Services{
  services;
  promos;
  @tracked codePromo;
  constructor(datas, promos) {
    this.services = datas;
    this.promos = promos;
  }

  get activeServices(){
    return this.services.filterBy('active', true);
  }
  get countActive(){
    return this.activeServices.length;
  }

  get promo(){
    if(this.codePromo && this.promos[this.codePromo]){
      return this.promos[this.codePromo];
    }
    return 'pas de promos';
  }

  get sumActive(){
    let result = 0;
    this.services.forEach((s) => {
      if(s.active){
        result += s.price;
      }

    });
    return result;

  }
}
