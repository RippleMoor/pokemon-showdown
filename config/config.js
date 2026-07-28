/**
 * Pokémon Showdown config file
 */
exports.port = 3000;
exports.serverid = 'pokemon-showdown';

// 允许所有人访问（你的私服）
exports.restricted = false;

// 日志级别
exports.loglevel = 2;

// 自动创建账号（不需要验证邮箱）
exports.requireemail = false;

// 启动时自动打开浏览器（服务器端无意义，保持 false）
exports.openbrowser = false;

/**
 * Pokémon Showdown 精简配置（针对 256 MiB 内存优化）
 */
exports.port = 8000;
exports.serverid = 'pokemon-showdown';

// 关闭所有非必要功能
exports.restricted = false;
exports.requireemail = false;
exports.openbrowser = false;

// 精简日志（只记录错误，不记录 info 和 debug）
exports.loglevel = 1; // 0=debug, 1=info, 2=warn, 3=error

// 关闭自动更新和数据分析（节省内存）
exports.updatemodlog = false;
exports.analytics = false;

// 限制最大房间数量（防止内存膨胀）
exports.maxrooms = 5;

// 限制玩家数量
exports.maxusers = 10;

// 禁用 repl（交互式命令行，服务器上不需要）
exports.repl = false;

// 禁用自动生成 team 预览缓存
exports.autogenerate = false;

// 使用精简版 HTML 渲染
exports.lightweight = true;
