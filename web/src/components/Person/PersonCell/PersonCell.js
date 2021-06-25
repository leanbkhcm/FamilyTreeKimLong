import Person from 'src/components/Person/Person'

export const QUERY = gql`
  query FindPersonById($id: Int!) {
    person: person(id: $id) {
      personId
      fatherId
      motherId
      name
      hintName
      seqInFamilyId
      sex
      birthDay
      email
      phoneNo
      remark
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Person not found</div>

export const Success = ({ person }) => {
  return <Person person={person} />
}
