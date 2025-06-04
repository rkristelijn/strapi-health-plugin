# Strapi plugin health

A quick description of health with minimal plugin. It is written in JS and not TS as it doesn't pick up ts files without compiling.

> You are on a beta branch

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
