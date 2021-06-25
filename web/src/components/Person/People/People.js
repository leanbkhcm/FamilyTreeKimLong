import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes } from '@redwoodjs/router'

import { QUERY } from 'src/components/Person/PeopleCell'

const DELETE_PERSON_MUTATION = gql`
  mutation DeletePersonMutation($id: Int!) {
    deletePerson(id: $id) {
      id
    }
  }
`

const MAX_STRING_LENGTH = 150

const truncate = (text) => {
  let output = text
  if (text && text.length > MAX_STRING_LENGTH) {
    output = output.substring(0, MAX_STRING_LENGTH) + '...'
  }
  return output
}

const jsonTruncate = (obj) => {
  return truncate(JSON.stringify(obj, null, 2))
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

const PeopleList = ({ people }) => {
  const [deletePerson] = useMutation(DELETE_PERSON_MUTATION, {
    onCompleted: () => {
      toast.success('Person deleted')
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete person ' + id + '?')) {
      deletePerson({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Person id</th>
            <th>Father id</th>
            <th>Mother id</th>
            <th>Name</th>
            <th>Hint name</th>
            <th>Seq in family id</th>
            <th>Sex</th>
            <th>Birth day</th>
            <th>Email</th>
            <th>Phone no</th>
            <th>Remark</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {people.map((person) => (
            <tr key={person.id}>
              <td>{truncate(person.personId)}</td>
              <td>{truncate(person.fatherId)}</td>
              <td>{truncate(person.motherId)}</td>
              <td>{truncate(person.name)}</td>
              <td>{truncate(person.hintName)}</td>
              <td>{truncate(person.seqInFamilyId)}</td>
              <td>{truncate(person.sex)}</td>
              <td>{timeTag(person.birthDay)}</td>
              <td>{truncate(person.email)}</td>
              <td>{truncate(person.phoneNo)}</td>
              <td>{truncate(person.remark)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.person({ id: person.id })}
                    title={'Show person ' + person.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editPerson({ id: person.id })}
                    title={'Edit person ' + person.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <a
                    href="#"
                    title={'Delete person ' + person.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(person.id)}
                  >
                    Delete
                  </a>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default PeopleList
