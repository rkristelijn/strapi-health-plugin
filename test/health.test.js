const request = require('supertest');

describe('Health Plugin', () => {
  let strapi;

  beforeAll(async () => {
    strapi = await require('@strapi/strapi')().load();
  });

  afterAll(async () => {
    await strapi.destroy();
  });

  it('should return health status', async () => {
    const response = await request(strapi.server.httpServer)
      .get('/health')
      .expect(200);

    expect(response.body).toHaveProperty('uptime');
    expect(response.body).toHaveProperty('message', 'OK');
    expect(response.body).toHaveProperty('timestamp');
    expect(typeof response.body.uptime).toBe('number');
    expect(typeof response.body.timestamp).toBe('number');
  });
});
