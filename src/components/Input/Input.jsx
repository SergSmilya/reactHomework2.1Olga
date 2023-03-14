import { Formik, Field, Form } from 'formik';
import * as yup from 'yup';
import { nanoid } from 'nanoid';

export default function Input({ updateState }) {
  const initialValues = {
    name: '',
    number: '',
  };
  const schema = yup.object({
    name: yup.string().required(),
    number: yup.number().min(8).required(),
  });

  function onHandleSubmit(values, { resetForm }) {
    values.id = nanoid(5);
    updateState(values);
    resetForm();
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onHandleSubmit}
      validationSchema={schema}
    >
      <Form>
        <label>
          Name
          <Field
            type="text"
            name="name"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label>
          Number
          <Field
            type="tel"
            name="number"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}
