## Mweeter:

Mweeter is an minimal app replicating some features from Twitter, such as a timeline, ability to follow/unfollow other people, infinite scrolling and profile editing.

You can check it out at: [Mweeter](https://mweeter-zeta.vercel.app/)

## Features:

- Signin with Auth0 [Google or Microsoft accounts]
- Write your own Mweets
- Follow others
- Unfollow others from your following page
- Edit your details (Name, Last Name, Handle)
- Infinite scrolling
- Responsive layout and loading skeletons

## Demo:

![](/public/mweeter_demo.gif)

## Technologies Used:

- [Typescript](https://www.typescriptlang.org)
- [Next.JS](https://nextjs.org)
- [Tailwind](https://tailwindcss.com)
- [Prisma](https://www.prisma.io)
- [Planetscale](https://planetscale.com)
- [NextAuth](https://next-auth.js.org)
- [Auth0](https://auth0.com)
- [Vercel](https://vercel.com)
- [tRPC](https://trpc.io)
- [Zod](https://zod.dev)

## How To Run Locally:

You'll need:

- Node.js version 14+
- Git
- pnpm, yarn and npm should work as well.
- Set up your own Auth0 account and setup the credentials in an .env file.

```bash
# Clone Repository
$ git clone https://github.com/emwp/mweeter

# Move to directory
$ cd mweeter

# Install dependencies
$ pnpm i

# Copy example env file and setup your own credentials
$ cp .env.example .env

# Run the application
$ pnpm dev
```
