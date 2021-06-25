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
        fatherId: 1523425,
        motherId: 7747441,
        name: 'String',
        hintName: 'String',
        seqInFamilyId: 178920,
        sex: 'String',
        birthDay: '2021-06-25T22:42:52Z',
        email: 'String8722216',
        phoneNo: 'String',
        remark: 'String',
      },
    })

    expect(result.fatherId).toEqual(1523425)
    expect(result.motherId).toEqual(7747441)
    expect(result.name).toEqual('String')
    expect(result.hintName).toEqual('String')
    expect(result.seqInFamilyId).toEqual(178920)
    expect(result.sex).toEqual('String')
    expect(result.birthDay).toEqual('2021-06-25T22:42:52Z')
    expect(result.email).toEqual('String8722216')
    expect(result.phoneNo).toEqual('String')
    expect(result.remark).toEqual('String')
  })

  scenario('updates a person', async (scenario) => {
    const original = await person({ id: scenario.person.one.id })
    const result = await updatePerson({
      id: original.id,
      input: { fatherId: 847777 },
    })

    expect(result.fatherId).toEqual(847777)
  })

  scenario('deletes a person', async (scenario) => {
    const original = await deletePerson({ id: scenario.person.one.id })
    const result = await person({ id: original.id })

    expect(result).toEqual(null)
  })
})
