import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  acno = ""
  pswd = ""
  amount = ""

  acno1 = ""
  pswd1 = ""
  amount1 = ""
  //login username
  user = ""

  constructor(private ds: DataService, private router: Router) {
    this.user = this.ds.currentUser
  }

  ngOnInit(): void {
  }
  // deposit
  deposit() {
    var acno = this.acno
    var pswd = this.pswd
    var amount = this.amount

    const result = this.ds.deposit(acno, pswd, amount)

    if (result) {
      alert(`${amount} is credited, New balance is ${result}`)
      
    }
  }
  // withdraw
  withdraw() {
    var acno = this.acno1
    var pswd = this.pswd1
    var amount = this.amount1

    const result = this.ds.withdraw(acno, pswd, amount)

    if (result) {
      alert(`${amount} is Debited, New balance is ${result}`)
      
    }
  }
}
