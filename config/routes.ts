import * as home from "../controllers/home_controller.ts";

export const routes = 
[
    {
        PATH: "./views/home/welcome.html",
        URL: ["/"],
        GET: home.get_welcome
    }
];