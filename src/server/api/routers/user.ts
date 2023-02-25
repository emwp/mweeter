import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";

export const userRouter = createTRPCRouter({
  current: protectedProcedure.query(async ({ ctx }) => {
    const { prisma, session } = ctx ?? {};
    return await prisma.user.findUnique({ where: { id: session.user.id } });
  }),

  getUnfollowed: protectedProcedure.query(async ({ ctx }) => {
    const { prisma, session } = ctx;
    const { id } = session?.user ?? {};
    return await prisma.user.findMany({
      where: {
        followedBy: { none: { userId: id } },
        id: { not: id },
      },
    });
  }),

  getFollowed: protectedProcedure.query(async ({ ctx }) => {
    const { prisma, session } = ctx;
    const { id } = session?.user ?? {};
    return await prisma.user.findMany({
      where: { followedBy: { some: { userId: id } } },
    });
  }),

  updateProfile: protectedProcedure
    .input(
      z.object({
        handle: z.string().min(1),
        name: z.string().min(1),
        lastName: z.string().min(1),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const { prisma, session } = ctx;
      const { id } = session?.user ?? {};

      return await prisma.user.update({
        where: { id },
        data: {
          handle: input.handle.replace(/^@/, ""),
          name: input.name,
          lastName: input.lastName,
        },
      });
    }),

  follow: protectedProcedure
    .input(z.object({ userId: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const { prisma, session } = ctx;
      const { id } = session?.user ?? {};

      return await prisma.follows.create({
        data: {
          userId: id,
          followingId: input.userId,
        },
      });
    }),

  unfollow: protectedProcedure
    .input(z.object({ userId: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const { prisma, session } = ctx;
      const { id } = session?.user ?? {};

      const follow = await prisma.follows.findFirst({
        where: {
          followingId: { equals: input.userId },
          userId: { equals: id },
        },
      });

      if (!follow) throw new Error("Not following");

      return await prisma.follows.delete({
        where: {
          id: follow.id,
        },
      });
    }),
});
