# Strapi Health Plugin

[![npm](https://img.shields.io/npm/dm/strapi-health-plugin)](https://www.npmjs.com/package/strapi-health-plugin)
[![version](https://img.shields.io/npm/v/strapi-health-plugin?label=package)](https://www.npmjs.com/package/strapi-health-plugin)
![license](https://img.shields.io/npm/l/strapi-health-plugin)
![npm total downloads](https://img.shields.io/npm/dt/strapi-health-plugin)
![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)
![GitHub stars](https://img.shields.io/github/stars/rkristelijn/strapi-health-plugin)
![Last Commit](https://img.shields.io/github/last-commit/rkristelijn/strapi-health-plugin)

A lightweight Strapi plugin that provides health check endpoints for monitoring and Kubernetes readiness/liveness probes.

## Features

- ✅ Simple health endpoint at `/health`
- ✅ Returns uptime, status, and timestamp
- ✅ Perfect for Kubernetes readiness/liveness probes
- ✅ Zero configuration required
- ✅ Minimal performance impact

## Installation

```bash
npm install strapi-health-plugin
```

After installation, rebuild your Strapi application:

```bash
npm run build
# or
strapi build
```

## Usage

Once installed, the plugin automatically exposes a health endpoint at:

```
GET /health
```

### Response Format

```json
{
  "uptime": 19122.561740091,
  "message": "OK",
  "timestamp": 1696513452150
}
```

- `uptime`: Process uptime in seconds
- `message`: Status message ("OK" when healthy)
- `timestamp`: Current timestamp in milliseconds

## Kubernetes Configuration

### Readiness Probe

```yaml
readinessProbe:
  httpGet:
    path: /health
    port: 1337
  initialDelaySeconds: 30
  periodSeconds: 10
```

### Liveness Probe

```yaml
livenessProbe:
  httpGet:
    path: /health
    port: 1337
  initialDelaySeconds: 60
  periodSeconds: 30
```

## Docker Health Check

```dockerfile
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD curl -f http://localhost:1337/health || exit 1
```

## Troubleshooting

### Plugin Not Loading

1. Ensure you've run `npm run build` after installation
2. Check that the plugin is listed in your `package.json` dependencies
3. Restart your Strapi application

### Endpoint Not Accessible

1. Verify your Strapi server is running
2. Check if custom middleware is blocking the endpoint
3. Ensure no conflicting routes exist

### Permission Issues

The health endpoint is publicly accessible by default. If you need to restrict access, you can modify the route configuration in your Strapi application.

## Contributing

Contributions are welcome! Please read our [Contributing Guidelines](CONTRIBUTING.md) before submitting PRs.

### Releases

This project uses manual releases via GitHub Actions workflows. Only maintainers can trigger releases:

1. **Bump Version**: Go to Actions → "Bump Version" → Run workflow (select patch/minor/major)
2. **Publish Package**: Go to Actions → "Publish Package" → Run workflow
3. **Manual Release**: Go to Actions → "Manual Release" → Run workflow (does both steps)

## Security

For security concerns, please see our [Security Policy](SECURITY.md).

## License

MIT © [Remi Kristelijn](https://github.com/rkristelijn)

## Support

- 🐛 [Report bugs](https://github.com/rkristelijn/strapi-health-plugin/issues)
- 💡 [Request features](https://github.com/rkristelijn/strapi-health-plugin/issues)
- 💖 [Sponsor the project](https://github.com/sponsors/rkristelijn/)

---

**Made with ❤️ for the Strapi community**
