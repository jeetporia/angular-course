import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Course } from '../model/course';
import { NgClass } from '@angular/common';

@Component({
  selector: 'course-card',
  imports: [NgClass],
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

    cardClasses() {
     if(this.course.category === 'BEGINNER') {
      // return ['beginner','course-card']
      return 'beginner course-card'
     }
     return ['course-card']
      // return {
      //   'beginner': this.course.category === 'BEGINNER',
      //   'course-card': true
      // }
    }
}
