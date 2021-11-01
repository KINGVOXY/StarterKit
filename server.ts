import { 
    System, Config, default_get, 
    default_error, redirect, SystemRequest, 
    SystemResponse, Route
} from "https://raw.githubusercontent.com/PuddleServer/Puddle/develop/mod.ts";

System.createRoutes("./views/assets/*");

System.createRoute("./views/html/welcome.html").URL("/");

System.listen("./config/.env", (conf: Config)=>{
    console.log(`The server running on http://${conf.SERVER.HOSTNAME}:${conf.SERVER.PORT}`);
});
