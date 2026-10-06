import {AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren, ChangeDetectionStrategy} from '@angular/core';
import {COURSES} from '../db-data';
import {Course} from './model/course';
import {CourseCardComponent} from './course-card/course-card.component';
import {HighlightedDirective} from './directives/highlighted.directive';
import {Observable} from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { CourseService } from './services/courses.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class AppComponent implements OnInit {

  courses$ : Observable<Course[]>;
  courses;

  constructor(private http: HttpClient, private courseService : CourseService) {

  }

  ngOnInit() {

    console.log(this.courseService)
    this.courses$ = this.courseService.loadCourses();
  }



}
