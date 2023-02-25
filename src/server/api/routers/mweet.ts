import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";

export const mweetRouter = createTRPCRouter({
  feed: protectedProcedure
  .input(
    z.object({
      cursor: z.string().optional(),
      limit: z.number(),
    })
  )
  .query(async ({ ctx, input }) => {
    const { prisma, session } = ctx;
    const { id } = session?.user ?? {};

    const result = await prisma.mweet.findMany({
      where: {
        OR: [
          {
            userId: {
              equals: id,
            },
          },
          { user: { followedBy: { some: { userId: id } } } },
        ],
      },
      include: {
        user: true,
      },
      take: input.limit + 1,
      cursor: input.cursor?.length ? { id: input.cursor } : undefined,  
      orderBy: { createdAt: "desc" },
    });

    const nextCursor = result.length > input.limit ? result?.[input.limit]?.id : null;

    return { nextCursor, mweets: result.slice(0, input.limit) };
  }),

  new: protectedProcedure
    .input(z.object({ message: z.string().max(280).min(1) }))
    .mutation(async ({ ctx, input }) => {
      const { prisma, session } = ctx;
      const { id } = session?.user ?? {};

      const mweet = await prisma.mweet.create({
        data: {
          content: input.message,
          userId: id,
        },
      });

      return mweet;
    }),
});
