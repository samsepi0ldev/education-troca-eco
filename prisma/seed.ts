import { faker } from '@faker-js/faker'
import bcrypt from 'bcrypt'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main () {
  const password = await bcrypt.hash('123', 12)
  await prisma.user.create({
    data: {
      name: faker.person.fullName(),
      email: faker.internet.email(),
      whatsapp: faker.phone.number(),
      address: faker.location.streetAddress(),
      password
    }
  })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })