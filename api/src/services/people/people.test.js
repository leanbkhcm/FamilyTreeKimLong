import {
  people,
  person,
  createPerson,
  updatePerson,
  deletePerson,
} from './people'

describe('people', () => {
  scenario('returns all people', async (scenario) => {
    const result = await people()

    expect(result.length).toEqual(Object.keys(scenario.person).length)
  })

  scenario('returns a single person', async (scenario) => {
    const result = await person({ id: scenario.person.one.id })

    expect(result).toEqual(scenario.person.one)
  })

  scenario('creates a person', async () => {
    const result = await createPerson({
      input: {
        fatherId: 4653177,
        motherId: 3199286,
        name: 'String',
        hintName: 'String',
        seqInFamilyId: 7454251,
        sex: 'String',
        birthDay: '2021-06-27T03:33:36Z',
        email: 'String1673262',
        phoneNo: 'String',
        remark: 'String',
      },
    })

    expect(result.fatherId).toEqual(4653177)
    expect(result.motherId).toEqual(3199286)
    expect(result.name).toEqual('String')
    expect(result.hintName).toEqual('String')
    expect(result.seqInFamilyId).toEqual(7454251)
    expect(result.sex).toEqual('String')
    expect(result.birthDay).toEqual('2021-06-27T03:33:36Z')
    expect(result.email).toEqual('String1673262')
    expect(result.phoneNo).toEqual('String')
    expect(result.remark).toEqual('String')
  })

  scenario('updates a person', async (scenario) => {
    const original = await person({ id: scenario.person.one.id })
    const result = await updatePerson({
      id: original.id,
      input: { fatherId: 2856026 },
    })

    expect(result.fatherId).toEqual(2856026)
  })

  scenario('deletes a person', async (scenario) => {
    const original = await deletePerson({ id: scenario.person.one.id })
    const result = await person({ id: original.id })

    expect(result).toEqual(null)
  })
})
