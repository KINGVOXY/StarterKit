import * as home from "../controllers/mod.ts";

export const routes = 
[
    {
        PATH: "./views/home/welcome.html",
        URL: ["/"],
        GET: home.get_welcome
    }
];