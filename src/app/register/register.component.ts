import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  uname = ""
  acno = ""
  pswd = ""

  //register model
  registerForm = this.fb.group({
    uname:[''],
    acno:[''],
    pswd:['']
  })

  constructor(private fb:FormBuilder,private ds: DataService,private router:Router) { }

  ngOnInit(): void {
  }

  //register
  register() {

    var uname = this.registerForm.value.uname
    var acno = this.registerForm.value.acno
    var pswd = this.registerForm.value.pswd

    const result = this.ds.register(acno, uname, pswd)
    if(result){
      alert("successfully registered!!")
      this.router.navigateByUrl('')
    }
    else{
      alert("user already Exist.....plz Log in")
      this.router.navigateByUrl('')
    }
  }
}
