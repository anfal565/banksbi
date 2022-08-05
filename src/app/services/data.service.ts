import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  //login username
  currentUser: any
  //login acno
  currentAcno:any

  //database_bank
  userDetails: any = {
    1000: { acno: 1000, username: 'Neer', password: 1000, balance: 50000, transaction: [] },
    1001: { acno: 1001, username: 'Laisha', password: 1001, balance: 4000, transaction: [] },
    1002: { acno: 1002, username: 'Akku', password: 1002, balance: 12000, transaction: [] }
  }

  constructor() { }

  //register
  register(acno: any, username: any, password: any) {
    let userDetails = this.userDetails
    if (acno in userDetails) {
      return false
    }
    else {
      userDetails[acno] = {
        acno,
        username,
        password,
        balance: 0,
        transaction: []
      }
      console.log(userDetails);
      return true
    }
  }

  //login
  login(acno: any, pswd: any) {
    if (acno in this.userDetails) {
      if (pswd == this.userDetails[acno]['password']) {
        this.currentUser = this.userDetails[acno]['username']
        this.currentAcno = acno
        return true
      }
      else {
        alert("Incorrect password..!!")
        return false
      }
    }
    else {
      alert("account doesn't exist..!!")
      return false
    }
  }

  //deposit
  deposit(acno: any, pswd: any, amt: any) {
    let userDetails = this.userDetails
    var amount = parseInt(amt)

    if (acno in this.userDetails) {
      if (pswd == userDetails[acno]['password']) {
        userDetails[acno]['balance'] += amount
        userDetails[acno]['transaction'].push({
          type: 'CREDIT',
          amount
        })
        return userDetails[acno]['balance']
      }
      else {
        alert("Incorrect password")
        return false
      }
    }
    else {
      alert("Accnt doesn't Exist")
      return false
    }
  }
  //Withdraw
  withdraw(acno: any, pswd: any, amt: any) {
    let userDetails = this.userDetails
    var amount = parseInt(amt)

    if (acno in this.userDetails) {
      if (pswd == userDetails[acno]['password']) {
        if (userDetails[acno]['balance'] > amount) {
          userDetails[acno]['balance'] -= amount
          userDetails[acno]['transaction'].push({
            type: 'DEBIT',
            amount
          })
          return userDetails[acno]['balance']
        }
        else {
          alert("Insufficient Balance")
          return false
        }
      }
      else {
        alert("Incorrect password")
      }
    }
    else {
      alert("Accnt doesn't Exist")
      return false
    }
  }
  //transaction
  getTransaction(acno: any) {
    return this.userDetails[acno]['transaction']
  }
}
