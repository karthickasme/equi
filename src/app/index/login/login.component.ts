import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userfm: FormGroup;
  constructor(private formBuilder: FormBuilder, private ht: HttpClient) {
    this.userfm = this.formBuilder.group({
      Name: '',
      Email: '',
pwd: ''

    });
   }
   saveUser() {
    if (this.userfm.dirty && this.userfm.valid) {
      alert(
        `Name: ${this.userfm.value.Name} Email: ${this.userfm.value.Email}`
      );
      this.ht.post('http://localhost:3000/myapi/savedata', this.userfm.value).subscribe(res => { console.log(res); });
    }
    else{
      alert('pls fill the values');
    }
  }
  ngOnInit(): void {
  }

}
