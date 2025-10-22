# Contributing to Strapi Health Plugin

Thank you for your interest in contributing! This document provides guidelines for contributing to the project.

## Development Setup

1. Fork and clone the repository
2. Install dependencies: `npm install`
3. Build the project: `npm run build`

## Development Workflow

1. Create a feature branch: `git checkout -b feature/your-feature`
2. Make your changes
3. Build and test: `npm run build`
4. Commit your changes with a clear message
5. Push and create a pull request

## Release Process

We use [Changesets](https://github.com/changesets/changesets) for version management and releases:

1. **After making changes**, add a changeset:
   ```bash
   npm run changeset
   ```
   
2. **Select change type**: patch, minor, or major
3. **Write summary**: Describe what changed
4. **Commit the changeset** with your changes
5. **Push to main**: A release PR will be created automatically
6. **Merge release PR**: Publishes to NPM automatically

### Changeset Guidelines
- **patch**: Bug fixes, documentation updates
- **minor**: New features, backwards compatible
- **major**: Breaking changes

## Code Standards

- Follow existing code style
- Use TypeScript for new code
- Add comments for complex logic
- Keep functions small and focused

## Testing

- Test your changes in a real Strapi application
- Verify the `/health` endpoint works correctly
- Check compatibility with different Strapi versions

## Pull Request Guidelines

- Provide a clear description of changes
- Reference any related issues
- Include screenshots for UI changes
- Ensure CI passes

## Reporting Issues

- Use the issue templates
- Provide clear reproduction steps
- Include environment details
- Add relevant logs or screenshots

## Questions?

Feel free to open an issue for questions or reach out to the maintainers.
