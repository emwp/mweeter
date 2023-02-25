/* eslint-disable @typescript-eslint/no-misused-promises */
import { type User } from "@prisma/client";
import { prisma } from "~/server/db";
import { faker } from "@faker-js/faker";

const users: User[] = [
  {
    email: "dan_abramov@meta.com",
    name: "Dan Abramov",
    lastName: "",
    emailVerified: new Date(),
    handle: "dan_abramov",
    image:
      "https://pbs.twimg.com/profile_images/1545194945161707520/rqkwPViA_400x400.jpg",
    id: "clej1o1fd000008mo128qem1x",
  },
  {
    email: "youyuxi@gmail.com",
    name: "Evan You",
    lastName: "",
    emailVerified: new Date(),
    handle: "youyuxi",
    image:
      "https://pbs.twimg.com/profile_images/1206997998900850688/cTXTQiHm_400x400.jpg",
    id: "clej1q1zv000108mo3i1nbniz",
  },
  {
    email: "rich_Harris@gmail.com",
    name: "Rich Harris",
    lastName: "",
    emailVerified: new Date(),
    handle: "Rich_Harris",
    image:
      "https://pbs.twimg.com/profile_images/557940120184041473/bFyXy8Pu_400x400.jpeg",
    id: "clej1rm80000208mo332n2ohs",
  },
  {
    email: "leeerob@gmail.com",
    name: "Lee Robinson",
    lastName: "",
    emailVerified: new Date(),
    handle: "leeerob",
    image:
      "https://pbs.twimg.com/profile_images/1587647097670467584/adWRdqQ6_400x400.jpg",
    id: "clej1t57k000308moak8f1c89",
  },
  {
    email: "jaredpalmer@gmail.com",
    name: "Jared Palmer",
    lastName: "",
    emailVerified: new Date(),
    handle: "jaredpalmer",
    image:
      "https://pbs.twimg.com/profile_images/1593971470916636676/uip-eVID_400x400.jpg",
    id: "clej1uc7h000408mo4zt5362g",
  },
];

async function main() {
  const userList = await prisma.user.findMany();

  // if (userList.length < 5) {
  //   const userList = await prisma.$transaction(
  //     users.map((user) => prisma.user.create({ data: user }))
  //   );

  //   userList.forEach(async (user) => {
  //     for (let i = 0; i < 10; i++) {
  //       await prisma.mweet.create({
  //         data: {
  //           content: faker.lorem.sentence(10),
  //           createdAt: faker.date.recent(30),
  //           userId: user.id,
  //         },
  //       });
  //     }
  //   });

  //   return;
  // }

  userList.forEach(async (user) => {
    for (let i = 0; i < 100; i++) {
      await prisma.mweet.create({
        data: {
          content: faker.lorem.sentence(10),
          createdAt: faker.date.recent(30),
          userId: user.id,
        },
      });
    }
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
