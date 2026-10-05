import { Component, ChangeDetectionStrategy } from '@angular/core';
import {COURSES} from '../db-data';
import { Course } from './model/course';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class AppComponent {
    courses = [...COURSES] ;
    onCardClick(course:Course) {
        console.log('bubbled........', course)
    }
}
