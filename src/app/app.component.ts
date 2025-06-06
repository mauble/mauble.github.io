import { Component } from "@angular/core";
import { ViewportScroller } from "@angular/common";
import { RouterOutlet } from "@angular/router";
import { NavbarComponent } from "./navbar/navbar.component";
import { GlobalsService } from "./globals.service";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

@Component({
  selector: "app-root",
  imports: [RouterOutlet, NavbarComponent, FontAwesomeModule],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  constructor(
    public globals: GlobalsService,
    viewport: ViewportScroller,
  ) {
    viewport.setOffset([0, 150]);
  }
}
