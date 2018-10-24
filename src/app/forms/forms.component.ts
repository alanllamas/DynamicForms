import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  objectTypes: Array<Object> = [
    {
      name : "name",
      content : "content",
      img : "img"
    },
  ];
  
  forms: Array<any> = [];
  formValues: Object = {};
  formsValues: Array<any> = [];


  constructor() { }

  ngOnInit() {
    this.createForms()
  }

  get formData() {
    let form;
    for (let i = 0; i < this.forms.length; i++) {
      const element = this.forms[i];
      form = {};
      for (const key in element) {
        if (element.hasOwnProperty(key)) {
          const ele = element[key];
          form[key] = ele.value
        }
      }
      this.formsValues.push(form)
    }
    return this.formsValues
  }

  getData() {
    this.formsValues = []
    this.formValues = this.formData
  }

  createForms() {
    const element = this.objectTypes[0];
    let content = {};
      for (const key in element) {
        if (element.hasOwnProperty(key)) {
          const e = element[key];
          content[e] = new FormControl();
        }
      }
    this.forms.push(content)
  }
}
