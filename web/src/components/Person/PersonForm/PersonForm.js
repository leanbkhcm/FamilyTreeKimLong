import {
  Form,
  FormError,
  FieldError,
  Label,
  NumberField,
  TextField,
  DatetimeLocalField,
  Submit,
} from '@redwoodjs/forms'

const formatDatetime = (value) => {
  if (value) {
    return value.replace(/:\d{2}\.\d{3}\w/, '')
  }
}

const PersonForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.person?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="personId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Person id
        </Label>
        <NumberField
          name="personId"
          defaultValue={props.person?.personId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="personId" className="rw-field-error" />

        <Label
          name="fatherId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Father id
        </Label>
        <NumberField
          name="fatherId"
          defaultValue={props.person?.fatherId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="fatherId" className="rw-field-error" />

        <Label
          name="motherId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Mother id
        </Label>
        <NumberField
          name="motherId"
          defaultValue={props.person?.motherId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="motherId" className="rw-field-error" />

        <Label
          name="name"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Name
        </Label>
        <TextField
          name="name"
          defaultValue={props.person?.name}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="name" className="rw-field-error" />

        <Label
          name="hintName"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Hint name
        </Label>
        <TextField
          name="hintName"
          defaultValue={props.person?.hintName}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="hintName" className="rw-field-error" />

        <Label
          name="seqInFamilyId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Seq in family id
        </Label>
        <NumberField
          name="seqInFamilyId"
          defaultValue={props.person?.seqInFamilyId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="seqInFamilyId" className="rw-field-error" />

        <Label
          name="sex"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Sex
        </Label>
        <TextField
          name="sex"
          defaultValue={props.person?.sex}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="sex" className="rw-field-error" />

        <Label
          name="birthDay"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Birth day
        </Label>
        <DatetimeLocalField
          name="birthDay"
          defaultValue={formatDatetime(props.person?.birthDay)}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="birthDay" className="rw-field-error" />

        <Label
          name="email"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Email
        </Label>
        <TextField
          name="email"
          defaultValue={props.person?.email}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="email" className="rw-field-error" />

        <Label
          name="phoneNo"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Phone no
        </Label>
        <TextField
          name="phoneNo"
          defaultValue={props.person?.phoneNo}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="phoneNo" className="rw-field-error" />

        <Label
          name="remark"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Remark
        </Label>
        <TextField
          name="remark"
          defaultValue={props.person?.remark}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="remark" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default PersonForm
