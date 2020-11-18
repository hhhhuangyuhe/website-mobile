export default function (context) {
    context.userAgent = process.server
        ? context.req.headers['user-agent']
        : navigator.userAgent
    let isMob = /(Android|webOS|iPhone|iPod|tablet|BlackBerry|Mobile)/i.test(context.userAgent);
    if (!isMob && context.route.name != 'toPC') {
        // console.log(context.route)
        context.redirect({ path: '/toPC', query: { fullPath: context.route.fullPath } })
    }
}