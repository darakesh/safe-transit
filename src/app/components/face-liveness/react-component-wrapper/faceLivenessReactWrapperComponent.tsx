import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
  ViewEncapsulation,
} from "@angular/core";
import React from "react";
import { createRoot } from "react-dom/client";
import { FaceLivenessDetector } from "@aws-amplify/ui-react-liveness";
import { AWSCoreService } from "../../../services/aws/awscore.service";

const containerElementName = "faceLivenessReactContainer";

@Component({
  selector: "app-faceliveness-react-wrapper",
  template: `<span #${containerElementName}></span>`,
  styleUrls: ["./FaceLivenessAmplify.scss"],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class FaceLivenessReactWrapperComponent
  implements OnInit, OnChanges, OnDestroy, AfterViewInit
{
  @ViewChild(containerElementName, { static: true }) containerRef!: ElementRef;

  @Input() public counter = 10;
  @Input() public sessionId: string = "";
  @Output() public livenessResults = new EventEmitter<any>();
  @Output() public livenessErrors = new EventEmitter<any>();
  
  
  region = "";
  domNode: any = null;

  constructor(private awsCoreService:AWSCoreService) {
    this.region = awsCoreService.region
  }

  ngOnInit(): void {
    console.log("Component Loaded" + this.sessionId);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.render();
  }

  ngAfterViewInit() {
    this.domNode = createRoot(this.containerRef.nativeElement);
    this.render();
  }

  ngOnDestroy() {
    this.domNode.unmount();
  }

  handleAnalysisComplete = async () => {
    alert("recognition completed");
    // var rekognition = new AWS.Rekognition();
    // var params = {
    //     SessionId: this.sessionId
    // };
    // rekognition.getFaceLivenessSessionResults(params).promise().then(data => {
    //     this.livenessResults.emit(data);
    //     console.log(data);
    // }).catch(err => {
    //     console.log(err);
    // });
  };

  handleError = async (err: any) => {
    this.livenessErrors.emit(err);
  };

  private render() {
    this.domNode.render(
      <React.StrictMode>
        <div>
          <FaceLivenessDetector
            sessionId={this.sessionId}
            region={this.region}
            onAnalysisComplete={this.handleAnalysisComplete}
            onError={this.handleError}
          />
        </div>
      </React.StrictMode>
    );
  }
}
