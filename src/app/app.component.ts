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
  allCurrency: Currency[] = [];
  currentId = 0;
  createHidden = true;
  editHidden = true;
  indexToEdit = 0;
  filteredCurrency: Currency[] = [];
  areFiltered = false;
  settingsShown = false;
  filterIsShown = false;

  tableColumns = {
    active: true,
    currencyId: true,
    country: true,
    currencyName: true,
    currencyCode: true,
    currencySymbol: true,
    branch: true,
    createdOn: true,
    createdBy: true,
    lastChanged: true,
    lastChangedBy: true
  };


  create(form: NgForm) {
    const value: Currency = form.value;
    value.createdBy = 'Venelin Todorov';
    value.currencyId = this.currentId;
    this.currentId++;
    value.country = "Bulgaria";
    value.createdOn = new Date().toDateString();
    value.lastChangedBy = "Venelin Todorov";
    value.lastChanged = new Date().toDateString();
    this.allCurrency.push(value);
  }

  delete(id: number) {
    const result = this.allCurrency.find(currency => currency.currencyId === id);
    const index = this.allCurrency.findIndex(currency => result?.currencyId === currency.currencyId);
    this.allCurrency.splice(index, 1);
  }

  findOneToEdit(id: number) {
    this.editHidden = false;
    const result = this.allCurrency.find(currency => currency.currencyId === id);
    const index = this.allCurrency.findIndex(currency => result?.currencyId === currency.currencyId);
    this.indexToEdit = index;
  }

  edit(form: NgForm) {
    const value: Currency = form.value;
    const currencyToEdit = this.allCurrency[this.indexToEdit];
    currencyToEdit.currencyName = value.currencyName
    currencyToEdit.currencyCode = value.currencyCode
    currencyToEdit.currencySymbol = value.currencySymbol
    currencyToEdit.branch = value.branch
    currencyToEdit.active = value.active
    value.lastChanged = new Date().toDateString();

  }

  filter(form: NgForm) {
    const value = form.value.filterInput;
    console.log(value);
    this.filteredCurrency = this.allCurrency.filter(currency => currency.currencyCode == value);
    console.log(this.filteredCurrency);
    this.areFiltered = true;
  }

  removeColumn(columnName: string) {
    switch (columnName) {
      case 'active':
        if (this.tableColumns["active"] === true) {
          this.tableColumns["active"] = false
        } else {
          this.tableColumns["active"] = true
        }
        break;

      case 'currencyId':
        if (this.tableColumns["currencyId"] === true) {
          this.tableColumns["currencyId"] = false
        } else {
          this.tableColumns["currencyId"] = true
        }
        break;

      case 'country':
        if (this.tableColumns["country"] === true) {
          this.tableColumns["country"] = false
        } else {
          this.tableColumns["country"] = true
        }
        break;

      case 'currencyName':
        if (this.tableColumns["currencyName"] === true) {
          this.tableColumns["currencyName"] = false
        } else {
          this.tableColumns["currencyName"] = true
        }
        break;

      case 'currencyCode':
        if (this.tableColumns["currencyCode"] === true) {
          this.tableColumns["currencyCode"] = false
        } else {
          this.tableColumns["currencyCode"] = true
        }
        break;

      case 'currencySymbol':
        if (this.tableColumns["currencySymbol"] === true) {
          this.tableColumns["currencySymbol"] = false
        } else {
          this.tableColumns["currencySymbol"] = true
        }
        break;

      case 'branch':
        if (this.tableColumns["branch"] === true) {
          this.tableColumns["branch"] = false
        } else {
          this.tableColumns["branch"] = true
        }
        break;

      case 'createdOn':
        if (this.tableColumns["createdOn"] === true) {
          this.tableColumns["createdOn"] = false
        } else {
          this.tableColumns["createdOn"] = true
        }
        break;

      case 'createdBy':
        if (this.tableColumns["createdBy"] === true) {
          this.tableColumns["createdBy"] = false
        } else {
          this.tableColumns["createdBy"] = true
        }
        break;

      case 'lastChanged':
        if (this.tableColumns["lastChanged"] === true) {
          this.tableColumns["lastChanged"] = false
        } else {
          this.tableColumns["lastChanged"] = true
        }
        break;

      case 'lastChangedBy':
        if (this.tableColumns["lastChangedBy"] === true) {
          this.tableColumns["lastChangedBy"] = false
        } else {
          this.tableColumns["lastChangedBy"] = true
        }
        break;
    }

  }

}
