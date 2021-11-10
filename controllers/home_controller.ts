import {
    SystemRequest,
    SystemResponse
} from "https://github.com/PuddleServer/Puddle/raw/v1.0.0-beta/mod.ts";

/**
 * Welcomeページの表示 (get a welcome page.)
 * [/ => "./views/home/welcome.html"]
 * @param req リクエスト(SystemRequest)
 * @param res レスポンス(SystemResponse)
 */
export async function get_welcome(req: SystemRequest, res: SystemResponse): Promise<void> {
    await res.setFile("./views/home/welcome.html");
}
