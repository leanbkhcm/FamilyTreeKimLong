import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import PersonForm from 'src/components/Person/PersonForm'

const CREATE_PERSON_MUTATION = gql`
  mutation CreatePersonMutation($input: CreatePersonInput!) {
    createPerson(input: $input) {
      id
    }
  }
`

const NewPerson = () => {
  const [createPerson, { loading, error }] = useMutation(
    CREATE_PERSON_MUTATION,
    {
      onCompleted: () => {
        toast.success('Person created')
        navigate(routes.people())
      },
    }
  )

  const onSave = (input) => {
    const castInput = Object.assign(input, {
      personId: parseInt(input.personId),
      fatherId: parseInt(input.fatherId),
      motherId: parseInt(input.motherId),
      seqInFamilyId: parseInt(input.seqInFamilyId),
    })
    createPerson({ variables: { input: castInput } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Person</h2>
      </header>
      <div className="rw-segment-main">
        <PersonForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewPerson
