import {
    SystemRequest,
    SystemResponse
} from "../deps.ts";

/**
 * Welcomeページの表示 (get a welcome page.)
 * [/ => "./views/home/welcome.html"]
 * @param req リクエスト(SystemRequest)
 * @param res レスポンス(SystemResponse)
 */
export async function get_welcome(req: SystemRequest, res: SystemResponse): Promise<void> {
    await res.setFile("./views/home/welcome.html");
}
