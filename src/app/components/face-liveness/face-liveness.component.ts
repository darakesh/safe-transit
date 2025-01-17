import { CommonModule } from '@angular/common';
import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { FaceLivenessReactWrapperComponent } from './react-component-wrapper/faceLivenessReactWrapperComponent';
import { AWSRekognitionService } from '../../services';

@Component({
  selector: 'app-face-liveness',
  imports: [CommonModule, FaceLivenessReactWrapperComponent],
  templateUrl: './face-liveness.component.html',
  styleUrl: './face-liveness.component.scss'
})
export class FaceLivenessComponent implements OnInit ,OnDestroy{
  showLivenessCapture: boolean = false
  session_id: string| undefined 

  constructor( private awsRecognitionService : AWSRekognitionService ){

  }

ngOnInit(): void {
  const res = this.awsRecognitionService.startSession().then(result =>{
    this.session_id = result.SessionId 
    this.showLivenessCapture = true;
  })
}

public handleErrors(err: any) {
  debugger
  alert(err)
}

public handleLivenessAnalysisResults(data: any) {
  debugger
  console.log(data);
  alert("success")
}


ngOnDestroy(): void {
  // cancel any ongoing session incase if any function available for this.
}

}
