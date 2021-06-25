export const schema = gql`
  type Person {
    personId: Int!
    fatherId: Int!
    motherId: Int!
    name: String!
    hintName: String!
    seqInFamilyId: Int!
    sex: String!
    birthDay: DateTime!
    email: String!
    phoneNo: String!
    remark: String!
  }

  type Query {
    people: [Person!]!
    person(id: Int!): Person
  }

  input CreatePersonInput {
    personId: Int!
    fatherId: Int!
    motherId: Int!
    name: String!
    hintName: String!
    seqInFamilyId: Int!
    sex: String!
    birthDay: DateTime!
    email: String!
    phoneNo: String!
    remark: String!
  }

  input UpdatePersonInput {
    personId: Int
    fatherId: Int
    motherId: Int
    name: String
    hintName: String
    seqInFamilyId: Int
    sex: String
    birthDay: DateTime
    email: String
    phoneNo: String
    remark: String
  }

  type Mutation {
    createPerson(input: CreatePersonInput!): Person!
    updatePerson(id: Int!, input: UpdatePersonInput!): Person!
    deletePerson(id: Int!): Person!
  }
`
