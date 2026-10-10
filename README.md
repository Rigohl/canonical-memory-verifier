# Canonical Memory Verifier

**Improved build** for Vercel deployment following the Neural Always Free architecture audit.

A local, read-only verifier for:
- Source integrity
- Explicit supersession
- Deterministic current projection
- Declared source-reference tracing
- Remembered-authority boundaries

## Architecture (from audit)

Based on the prioritization:

- **Frontend**: Next.js + React Flow (xyflow)
- **Monorepo**: Turborepo
- **Neural**: Candle / tract (local inference)
- **Agents**: Goose + agent-browser
- **Pipelines**: Dora
- **Connectors**: MCP
- **Memory**: SQLite initially

## Stacks from sheet

See the original Excel `repos_neural_frontend_conexiones.xlsx` for full candidate list.

Priority combination: Candle + tract + Goose + agent-browser + Dora + Next.js.

## Order of implementation

1. Validate inference (Candle + tract)
2. Frontend (Next.js + React Flow)
3. Agents (Goose)
4. Connectors (MCP)
5. Persistence
6. Cost & security audit

## Deploy

This repo is prepared for one-click Vercel deploy.

## License

MIT
