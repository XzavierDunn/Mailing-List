import { Component, OnInit } from '@angular/core';
import { MainService } from '../../services/main.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-unsub',
  templateUrl: './unsub.component.html',
  styleUrls: ['./unsub.component.css']
})
export class UnsubComponent implements OnInit {

  unsubForm: FormGroup;
  unsub: any;

  constructor(private service: MainService, private form: FormBuilder, private snackbar: MatSnackBar) {
    this.createForm();
   }

  ngOnInit() {
  }

  createForm() {
    this.unsubForm = this.form.group({
      email: new FormControl,
    });
  }

  onSubmit() {
    this.snackbar.open('Unsubscribing', 'Done');
    this.service.unsub(this.unsubForm.value).subscribe((val: any) => {
      this.unsub = val;
      this.snackbar.dismiss();
      if (this.unsub['status'] == 'Success') {
        this.snackbar.open("You've unsubscribed successfully", 'Done', {duration: 3000});
      }
    });
  };

}
