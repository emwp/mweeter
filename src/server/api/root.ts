import { createTRPCRouter } from "~/server/api/trpc";
import { userRouter } from "~/server/api/routers/user";
import { mweetRouter } from "~/server/api/routers/mweet";

export const appRouter = createTRPCRouter({
  mweet: mweetRouter,
  user: userRouter,
});

export type AppRouter = typeof appRouter;
