import { Injectable } from '@angular/core';
import {
  RekognitionClient,
  CreateFaceLivenessSessionCommand,
  GetFaceLivenessSessionResultsCommand,
} from '@aws-sdk/client-rekognition';
import { AWSCoreService } from './awscore.service';

@Injectable({
  providedIn: 'root',
})
export class AWSRekognitionService {
  awsRegion = ""
  constructor(private awsCoreService: AWSCoreService ) {
    this.awsRegion = this.awsCoreService.region
  }

  public async startSession() {
    const client = new RekognitionClient({ region: this.awsRegion });
    const command = new CreateFaceLivenessSessionCommand({});
    const response = await client.send(command);
    return response;
  }

  public async getSessionResults(sessionId: string) {
    const client = new RekognitionClient({ region: this.awsRegion });
    const command = new GetFaceLivenessSessionResultsCommand({
      SessionId: sessionId,
    });
    const response = await client.send(command);
    return response;
  }
}
