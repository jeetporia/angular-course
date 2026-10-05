import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'course-card',
  imports: [],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css',
})
export class CourseCardComponent {
    @Input({ required: true }) course!: Course;
    @Input({ required: true }) index: Number;
    @Output() courseSelected = new EventEmitter<Course>();

    onCourseViewed() {
      this.courseSelected.emit(this.course);
    }
}
