import { Controller, Get } from "@nestjs/common";

@Controller("/api")
export class AppController {
  @Get("/asdf")
  getRootRoute() {
    return "hi there";
  }

  @Get("/buy")
  getByeThere() {
    return "bye there";
  }
}
