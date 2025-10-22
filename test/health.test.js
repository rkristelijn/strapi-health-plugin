describe('Health Plugin', () => {
  it('should have correct package configuration', () => {
    const pkg = require('../package.json');
    
    expect(pkg.name).toBe('strapi-health-plugin');
    expect(pkg.main).toBe('strapi-server.js');
    expect(pkg.strapi.name).toBe('health');
    expect(pkg.strapi.kind).toBe('plugin');
  });

  it('should export server entry point', () => {
    const serverEntry = require('../strapi-server.js');
    expect(serverEntry).toBeDefined();
    expect(typeof serverEntry).toBe('object');
  });

  it('should have built server files', () => {
    const fs = require('fs');
    const path = require('path');
    
    expect(fs.existsSync(path.join(__dirname, '../dist/server/index.js'))).toBe(true);
  });
});
