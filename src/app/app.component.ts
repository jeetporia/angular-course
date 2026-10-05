import { Component, ChangeDetectionStrategy } from "@angular/core";
import { COURSES } from "../db-data";
import { Course } from "./model/course";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class AppComponent {
  courses = [...COURSES];

  startDate = new Date(2000, 2, 23);
  title = this.courses[0].description;
  rate = 0.85;

  price = 999;
  onCardClick(course: Course) {
    console.log("bubbled........", course);
  }

  trackCourse(index: number, course: Course) {
    return course.id;
  }
}
