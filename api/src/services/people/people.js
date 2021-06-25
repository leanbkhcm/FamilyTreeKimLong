import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'

// Used when the environment variable REDWOOD_SECURE_SERVICES=1
export const beforeResolver = (rules) => {
  rules.add(requireAuth)
}

export const people = () => {
  return db.person.findMany()
}

export const person = ({ id }) => {
  return db.person.findUnique({
    where: { id },
  })
}

export const createPerson = ({ input }) => {
  return db.person.create({
    data: input,
  })
}

export const updatePerson = ({ id, input }) => {
  return db.person.update({
    data: input,
    where: { id },
  })
}

export const deletePerson = ({ id }) => {
  return db.person.delete({
    where: { id },
  })
}
