import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material'
import { FormsModule } from '@angular/forms';
import { ErrorComponent } from '../error/error.component';
import { Router } from '@angular/router';
import { MymaterialModule } from "../mymaterial/mymaterial.module";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public username:string="";
  public password:string="";


  // constructor() { }

  ngOnInit() {
  }

  constructor(private  dialog:  MatDialog, private  router:  Router) { }
    login(){
        if(this.username  ===  "demo"  &&  this.password  === "demo")
        {
            this.router.navigate(['customer-list']);
        }
        else
        {
            this.dialog.open(ErrorComponent,{ data: {
            message:  "Your login information are incorrect!"
            }});
        }
    }

}
