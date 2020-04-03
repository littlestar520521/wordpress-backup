/**
 * 该页面由Cloudflare Workers生成并提供
 */
addEventListener("fetch", event => {
	event.respondWith(handleRequest(event.request));
});
//完整的页面HTML内容字符串
const htmlStr = "";
/**
 * Respond to the request
 * @param {Request} request
 */
async function handleRequest(request) {
	return new Response(htmlStr, {
		status: 200,
		headers: { "Content-Type": "text/html; charset=utf-8" }
	});
}
