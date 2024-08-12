import { Component, OnInit } from '@angular/core';
import { Tile } from './change-tile-color/change-tile-color.models';
import { Projects } from './models/projects.enums';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  activeTile: string;
  projects: typeof Projects = Projects;
  selectedProject: Projects;
  projectList: Projects[] = [
    Projects.GITHUB_SHOWCASE,
    Projects.NOTE_READER,
    Projects.SEARCH_BOOKS,
    Projects.SELECT_ALL_FORM,
    Projects.TILE_COLOR,
    Projects.TRAFFIC_LIGHT,
    Projects.CALENDAR,
    Projects.TODO_LIST,
    Projects.USER_CARD,
  ];
  sampleTiles: Tile[] = [
    {
      title: 'Directives',
      body: 'The Angular directive helps us to manipulate the DOM. You can change the appearance, behavior, or layout of a DOM element using the directives. They help you to extend HTML. The Angular directives are classified into three categories based on how they behave.  They are Component, Structural and Attribute Directives',
      color: 'red',
    },
    {
      title: 'Pipes',
      body: 'The Angular pipes are used to Transform the Data. For Example, the Date pipe formats the date according to locale rules. We can pass arguments to pipe and chain pipes. The Angular also allows us to create the Custom Pipe',
      color: 'green',
    },
    {
      title: 'Component Life Cycle Hook',
      body: 'The life cycle hooks are the methods that angular invokes on directives and components as it creates, changes, and destroys them. Using life-cycle hooks we can fine-tune the behavior of our components during creation, update, and destruction.',
      color: 'blue',
    },
    {
      title: 'HTTP',
      body: 'The newly designed HttpClient Module allows us to query the Remote API source to get data into our Application. It requires us to Subscribe to the returned response using RxJs observables.',
      color: 'orange',
    },
  ];

  constructor() {}

  ngOnInit() {}

  handleTileButtonClick(color: string) {
    this.activeTile = color;
  }
}
