import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PasscodeService } from '../passcode.service';

@Component({
  selector: 'app-lock-screen',
  templateUrl: './lock-screen.component.html',
  styleUrls: ['./lock-screen.component.css']
})
export class LockScreenComponent implements OnInit {

  leverState:Array<string> = ['up', 'up', 'up', 'up', 'up', 'up', 'up', 'up']
  private valid = false;

  constructor(private passcodeSevice:PasscodeService, private router: Router ) { 
  }

  ngOnInit(): void {
    console.log("ngInit of lock screen compoennt")
  }


  update(state:any, leverNumber:number): void {
    this.leverState[leverNumber] = state
  }

  validateLevers():void {
    console.log("Making a call to validate levers");
    this.passcodeSevice.validateLevers(this.leverState).subscribe( result => {
      console.log("result = ", result);
      if (result) {
        this.passcodeSevice.isLoggedIn = result
        
        this.router.navigate([this.passcodeSevice.redirectUrl]);
      }
    })


  } 


}
