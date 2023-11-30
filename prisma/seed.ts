import { faker } from '@faker-js/faker'
import bcrypt from 'bcrypt'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

type StringNumberArray = [string, number]

const products: StringNumberArray[] = [
  ['Lâmpadas LED de Baixo Consumo', 50],
  ['Detergente Biodegradável', 30],
  ['Creme Dental Natural', 40],
  ['Garrafa de Água Reutilizável', 60],
  ['Sacolas Reutilizáveis para Frutas e Vegetais', 20],
  ['Papel Higiênico Reciclado', 35],
  ['Barra de Shampoo Sólido', 45],
  ['Canudos de Bambu', 15],
  ['Esponja de Banho Biodegradável', 25],
  ['Almofadas de Algodão Orgânico', 55]
]

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
  const productsTransactions = products.map(([name, points]) => {
    return prisma.product.create({
      data: { 
        name,
        points
      }
    })
  })

  await prisma.$transaction(productsTransactions)
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