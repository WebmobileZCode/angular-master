import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  public email = '';
  username = '';
  constructor() {}

  ngOnInit(): void {}
  onSubmit(form: NgForm) {
    console.log(form);
  }
}
