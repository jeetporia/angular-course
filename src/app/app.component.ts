import {
  Component,
  ChangeDetectionStrategy,
  ViewChild,
  ElementRef,
  ViewChildren,
  QueryList,
} from "@angular/core";
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
  // for the for loop and for the all the component which we are repeating we have to use this
  //   @ViewChildren(CourseCardComponent, { read: ElementRef })
  //   cards: QueryList<ElementRef>;

  @ViewChild(CourseCardComponent)
  card: CourseCardComponent;

  @ViewChild("card2")
  card2: CourseCardComponent;

  @ViewChild("courseContainer")
  coursParent: ElementRef;

  onCardClick(course: Course) {
    console.log(this.card);
    console.log(this.card2);
    console.log(this.coursParent);
  }

  trackCourse(index: number, course: Course) {
    return course.id;
  }
}
