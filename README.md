# DEEP AI SAAS PLATFORM
This is a comprehensive SaaS application that offers a suite of AI-powered tools for content creation and management. It features complete responsiveness, user authentication with Clerk, and utilizes react-hook-form for client-side form validation. The application integrates server error handling with react-toast and includes tools for generating images, videos, conversations, and music powered by OpenAI and Replicate AI. It also provides a Stripe-based monthly subscription system with a free tier and API usage restrictions.



## Features

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

## Getting Started

Instructions on setting up your project locally. To get a local copy up and running, follow these steps

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

Add MySQL Database (I used Aiven.io MySQL DB)

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
