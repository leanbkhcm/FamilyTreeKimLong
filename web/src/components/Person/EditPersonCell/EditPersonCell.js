import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import PersonForm from 'src/components/Person/PersonForm'

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
const UPDATE_PERSON_MUTATION = gql`
  mutation UpdatePersonMutation($id: Int!, $input: UpdatePersonInput!) {
    updatePerson(id: $id, input: $input) {
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

export const Success = ({ person }) => {
  const [updatePerson, { loading, error }] = useMutation(
    UPDATE_PERSON_MUTATION,
    {
      onCompleted: () => {
        toast.success('Person updated')
        navigate(routes.people())
      },
    }
  )

  const onSave = (input, id) => {
    const castInput = Object.assign(input, {
      personId: parseInt(input.personId),
      fatherId: parseInt(input.fatherId),
      motherId: parseInt(input.motherId),
      seqInFamilyId: parseInt(input.seqInFamilyId),
    })
    updatePerson({ variables: { id, input: castInput } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Person {person.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <PersonForm
          person={person}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
