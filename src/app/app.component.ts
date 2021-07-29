import { Component } from '@angular/core';
import { LoggerService } from '../services/logger.service';

interface AppComponentProps {
  title: string;
  hello: string;
  sayHelloId?: string;
  sayMessage: (event: MouseEvent) => void;
  canClick: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AppComponentProps {

  constructor(private logger: LoggerService) { }

  abc = new LoggerService();
  title: string = 'tour-of-heroes';
  hello: string = 'adadas';
  sayHelloId = 'yolo';
  fontColor = 'blue';

  sayMessage(event: MouseEvent): void {
    let elementId: string = (event.target as Element).id;
    this.logger.writeLog(`${elementId} invoked this`);
    alert(`${elementId} invoked this`);

  }
  canClick = false;
}
