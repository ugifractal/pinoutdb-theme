import { Application } from "@hotwired/stimulus"
import HelloController from "./controllers/hello_controller"
import SearchController from "./controllers/search_controller"

const app = Application.start()

app.register("hello", HelloController)
app.register("search", SearchController)
