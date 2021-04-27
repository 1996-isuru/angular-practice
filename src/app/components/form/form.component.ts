import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  // @ViewChild('f') formdata: NgForm;
  formcontrol: FormGroup;

  constructor() {
   }

  ngOnInit(): void {
    this.formcontrol = new FormGroup({
      formName: new FormControl(''),
      formEmail: new FormControl('')
    });
  }

  // submitForm(f: NgForm){
  //   // console.log(f);
  //   alert(f.value.name);
  //   alert(f.value.email);
  //   this.formdata = f;
  //   alert(this.formdata.value.name);
  // }

  func(){
    // console.log(this.formcontrol.get('formName').value);
    // console.log(this.formcontrol.get('formEmail').value);
  }

}
