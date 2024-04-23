import { Component } from "@angular/core";
import { bootstrapApplication } from "@angular/platform-browser";
import { Route, RouterModule, provideRouter } from "@angular/router";
import "zone.js";
import { FlexComponent } from "./app/flex/flex.component";
import { ColorsComponent } from "./colors/colors.component";

@Component({
  selector: "app-root",
  standalone: true,
  templateUrl: `main.html`,
  imports: [RouterModule],
})
export class App {
  name = "Angular";
}

export const ROUTES: Route[] = [
  { path: "colors", component: ColorsComponent },
  { path: "flex", component: FlexComponent },
];

bootstrapApplication(App, {
  providers: [provideRouter(ROUTES)],
});
