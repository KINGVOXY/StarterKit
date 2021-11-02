import {
    redirect,
    ServerRequest,
    SystemResponse,
    default_get
} from "https://raw.githubusercontent.com/PuddleServer/Puddle/develop/mod.ts";


export async function get_welcome(req: ServerRequest, res: SystemResponse): Promise<void> {
    await default_get()(req, res);
}