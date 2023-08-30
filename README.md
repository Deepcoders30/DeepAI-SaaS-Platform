# DEEP AI SAAS PLATFORM
#### Full Stack SaaS AI Platform built with Next.js 13, offering powerful features including Conversation, Image, Code, Music, and Video Generation using OpenAI and Replicate APIs



### Features:

- Complete responsiveness
- User authentication with Clerk.
- Utilization of react-hook-form for client-side form validation and management
- Server error handling integrated with react-toast
- Tool for Generating Images (Powered by Open AI)
- Tool for Generating Videos (Powered by Replicate AI)
- Tool for Generating Conversations (Powered by Open AI)
- Tool for Generating Music (Powered by Replicate AI)
- Indication of page loading status
- Stripe-based monthly subscription system
- Inclusion of a free tier with API usage restrictions

### Prerequisites

**Node version 18.x.x**

### Cloning the repository

```shell
git clone https://github.com/Deepcoders30/DeepAI-SaasS-Platform.git
```

### Install packages

```shell
npm i
```

### Setup .env file


```js
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard

OPENAI_API_KEY=
REPLICATE_API_TOKEN=

DATABASE_URL=

STRIPE_API_KEY=
STRIPE_WEBHOOK_SECRET=

NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

### Setup Prisma

Add MySQL Database (I used PlanetScale)

```shell
npx prisma db push

```

### Start the app

```shell
npm run dev
```

## Available commands

Running commands with npm `npm run [command]`

| command         | description                              |
| :-------------- | :--------------------------------------- |
| `dev`           | Starts a development instance of the app |
