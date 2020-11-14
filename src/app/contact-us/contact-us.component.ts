import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators,FormBuilder } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  myForm : FormGroup;

//  yr = (new Date()).getFullYear()
  constructor(private formBuilder: FormBuilder) {
    this.myForm =this.formBuilder.group({
      name :[null, Validators.required],
      email : [null, [Validators.required,Validators.email]],
      msg : [null, Validators.required],
    })
   }



  ngOnInit(): void {
  }
  onSubmit(myForm){
    console.log(myForm.value)

  }
}
