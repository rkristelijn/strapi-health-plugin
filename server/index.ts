export default {
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
