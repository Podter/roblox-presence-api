# roblox-presence-api

Expose your Roblox presence and activities to a RESTful API

## Developing

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Building

Just run one of these commands to build for production:

```bash
npm run build
# or
yarn build
# or
pnpm build
```

And then start the server with:

```bash
npm start
# or
yarn start
# or
pnpm start
```

### Deploying on serverless functions

Deploying on serverless functions (like Vercel) isn't support. noblox.js always throw **module not found** error.

I think noblox.js native modules are missing in serverless functions.

So you have to deploy on full Node.js environment like VPS or Docker.
