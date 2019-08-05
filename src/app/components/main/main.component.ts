import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { MainService } from '../../services/main.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  registerForm: FormGroup;
  sent: any;

  constructor(private form: FormBuilder, private service: MainService, private snackbar: MatSnackBar) {
    this.createForm();
   }

  ngOnInit() {
  }

  createForm() {
    this.registerForm = this.form.group({
      name: new FormControl,
      email: new FormControl
    });
  }

  onSubmit(){
    this.snackbar.open('Adding you to the super dope mailing list', 'Done', {duration: 3000});
    console.log(this.registerForm.value);
    this.service.mail(this.registerForm.value);
    this.sent = true;
  }

}
