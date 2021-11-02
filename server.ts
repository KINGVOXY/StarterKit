import { System, Config } from "https://raw.githubusercontent.com/PuddleServer/Puddle/develop/mod.ts";
import { routes } from "./config/routes.ts"
import { assets } from "./config/assets.ts"


System.createRoutes(...routes);
System.createRoutes(...assets);

System.listen("./config/.env", (conf: Config)=>{
    console.log(`The server running on http://${conf.SERVER.HOSTNAME}:${conf.SERVER.PORT}`);
});
