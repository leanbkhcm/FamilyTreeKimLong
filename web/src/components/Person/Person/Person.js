import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes, navigate } from '@redwoodjs/router'

const DELETE_PERSON_MUTATION = gql`
  mutation DeletePersonMutation($id: Int!) {
    deletePerson(id: $id) {
      id
    }
  }
`

const jsonDisplay = (obj) => {
  return (
    <pre>
      <code>{JSON.stringify(obj, null, 2)}</code>
    </pre>
  )
}

const timeTag = (datetime) => {
  return (
    <time dateTime={datetime} title={datetime}>
      {new Date(datetime).toUTCString()}
    </time>
  )
}

const checkboxInputTag = (checked) => {
  return <input type="checkbox" checked={checked} disabled />
}

const Person = ({ person }) => {
  const [deletePerson] = useMutation(DELETE_PERSON_MUTATION, {
    onCompleted: () => {
      toast.success('Person deleted')
      navigate(routes.people())
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete person ' + id + '?')) {
      deletePerson({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Person {person.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Person id</th>
              <td>{person.personId}</td>
            </tr>
            <tr>
              <th>Father id</th>
              <td>{person.fatherId}</td>
            </tr>
            <tr>
              <th>Mother id</th>
              <td>{person.motherId}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{person.name}</td>
            </tr>
            <tr>
              <th>Hint name</th>
              <td>{person.hintName}</td>
            </tr>
            <tr>
              <th>Seq in family id</th>
              <td>{person.seqInFamilyId}</td>
            </tr>
            <tr>
              <th>Sex</th>
              <td>{person.sex}</td>
            </tr>
            <tr>
              <th>Birth day</th>
              <td>{timeTag(person.birthDay)}</td>
            </tr>
            <tr>
              <th>Email</th>
              <td>{person.email}</td>
            </tr>
            <tr>
              <th>Phone no</th>
              <td>{person.phoneNo}</td>
            </tr>
            <tr>
              <th>Remark</th>
              <td>{person.remark}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editPerson({ id: person.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <a
          href="#"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(person.id)}
        >
          Delete
        </a>
      </nav>
    </>
  )
}

export default Person
