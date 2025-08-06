# Strapi plugin health

[![npm](https://img.shields.io/npm/dm/strapi-health-plugin)](https://www.npmjs.com/package/strapi-health-plugin)
![version](https://img.shields.io/npm/v/strapi-health-plugin)
![license](https://img.shields.io/npm/l/strapi-health-plugin)
![npm total downloads](https://img.shields.io/npm/dt/strapi-health-plugin)
![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)
![GitHub stars](https://img.shields.io/github/stars/rkristelijn/strapi-health-plugin)
![Last Commit](https://img.shields.io/github/last-commit/rkristelijn/strapi-health-plugin)

A quick description of health with minimal plugin. It is written in JS and not TS as it doesn't pick up ts files without compiling.

## Demonstration

After installation, go to http://localhost:1337/health:

```json
{
  "uptime": 19122.561740091,
  "message": "OK",
  "timestamp": 1696513452150
}
```

## Installation

In your strapi project run:

```sh
npm install strapi-health-plugin
```

To apply the plugin to Strapi run re-build command

```sh
strapi build
```

## Sponsor me

[Sponsor me](https://github.com/sponsors/rkristelijn/) if you appreciate my work.
