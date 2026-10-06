import {
  AfterViewInit,
  Component,
  ElementRef,
  QueryList,
  ViewChild,
  ViewChildren,
  ChangeDetectionStrategy,
} from "@angular/core";
import { COURSES } from "../db-data";
import { Course } from "./model/course";
import { CourseCardComponent } from "./course-card/course-card.component";
import { HighlightedDirective } from "./directives/highlighted.directive";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  changeDetection: ChangeDetectionStrategy.Default,
  standalone: false,
})
export class AppComponent implements AfterViewInit {
  courses = COURSES;
  @ViewChild("highligter")
  highligter: HighlightedDirective;

  @ViewChildren(CourseCardComponent, { read: ElementRef })
  cards: QueryList<ElementRef>;

  constructor() {}

  ngAfterViewInit() {
    console.log(this.highligter);
  }

  onCourseSelected(course: Course) {}

  onToggle(isHighlighted: boolean) {
    console.log(" Working ... parent class ", isHighlighted);
  }
}
