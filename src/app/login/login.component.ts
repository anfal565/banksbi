import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  aim = 'Your perfect banking partner'

  account = "Enter your accnt num"

  password = "****@#@&^@#****"

  acno = ""
  pswd = ""

  userDetails:any = {
    1000: { acno: 1000, username: 'Neer', password: 1000, balance: 50000 },
    1001: { acno: 1001, username: 'Laisha', password: 1001, balance: 4000 },
    1002: { acno: 1002, username: 'Akku', password: 1002, balance: 12000 }
  }

  constructor() { }

  ngOnInit(): void {
  }

  acnoChange(event: any) {
    this.acno = event.target.value
    console.log(this.acno);

  }
  pswdChange(event: any) {
    this.pswd = event.target.value
    console.log(this.pswd);

  }

  login() {

    var acno = this.acno
    var pswd = this.pswd

    if(acno in this.userDetails){
      if(pswd == this.userDetails[acno]['password']){
        alert("login successfully..!!")
      }
      else{
        alert("Incorrect password..!!")
      }
    }
    else{
      alert("account doesn't exist..!!")
    }
  }
}
