import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Currency } from 'src/types/currency';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'currency';
  allCurrency:Currency[] = [];
  currentId = 0;
  createHidden = true;
  editHidden = true;
  currentEdit = {};

  create(form: NgForm) {
    const value:Currency = form.value;
    value.createdBy = 'Venelin Todorov';
    value.currencyId = this.currentId;
    this.currentId++;
    value.country = "Bulgaria";
    value.createdOn = new Date().toDateString();
    value.lastChangedBy = "Venelin Todorov";
    value.lastChanged = new Date().toDateString();
    this.allCurrency.push(value);
  }

  delete(id:number) {
    const result = this.allCurrency.find(currency => currency.currencyId === id);
    const index = this.allCurrency.findIndex(currency => result?.currencyId === currency.currencyId );
    this.allCurrency.splice(index, 1);
  }

  findOneToEdit(id:number) {
    this.editHidden = false;
    const result = this.allCurrency.find(currency => currency.currencyId === id);
    if(result) {
      this.currentEdit = result
      console.log(this.currentEdit);
      
    }
  }
  
  edit(form: NgForm) {
    const value:Currency = form.value;
  }

}
