"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    config: {
        enabled: true,
        auth: false,
    },
    routes: [
        {
            method: 'ALL',
            path: '/',
            handler: [
                (ctx) => {
                    const healthcheck = {
                        uptime: process.uptime(),
                        message: 'OK',
                        timestamp: Date.now(),
                    };
                    ctx.body = healthcheck;
                },
            ],
            config: {
                auth: false,
            },
        },
    ],
};
