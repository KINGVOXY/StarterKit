import {
    redirect,
    SystemRequest,
    SystemResponse,
    default_get
} from "https://raw.githubusercontent.com/PuddleServer/Puddle/develop/mod.ts";


export async function get_welcome(req: SystemRequest, res: SystemResponse): Promise<void> {
    await default_get()(req, res);
}
