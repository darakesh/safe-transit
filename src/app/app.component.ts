import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';


import awsconfig from '../../src/aws-exports';
import { Amplify } from 'aws-amplify';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'safe-transit';

  ngOnInit(): void {
    Amplify.configure(awsconfig);
  }
}
