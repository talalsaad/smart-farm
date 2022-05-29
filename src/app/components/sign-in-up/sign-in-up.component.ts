import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../shared/services/auth.service";
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in-up',
  templateUrl: './sign-in-up.component.html',
  styleUrls: ['./sign-in-up.component.css']
})
export class SignInUpComponent implements OnInit {
  myform: FormGroup | undefined;
  view='Sign In';
  constructor(public authService: AuthService ) {


   }
   ngOnInit() {
    
   }

 
  }
