import { Component, ChangeDetectionStrategy, ViewChild, ElementRef } from "@angular/core";
import { COURSES } from "../db-data";
import { Course } from "./model/course";
import { CourseCardComponent } from "./course-card/course-card.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class AppComponent {
  courses = [...COURSES];

  @ViewChild(CourseCardComponent)
  card: CourseCardComponent;

  @ViewChild('card2')
  card2 : CourseCardComponent;

  @ViewChild('courseContainer')
  coursParent : ElementRef;

  startDate = new Date(2000, 2, 23);
  title = this.courses[0].description;
  rate = 0.85;

  price = 999;
  onCardClick(course: Course) {
    console.log(this.card);
    console.log(this.card2)
    console.log(this.coursParent)
  }

  trackCourse(index: number, course: Course) {
    return course.id;
  }
}
