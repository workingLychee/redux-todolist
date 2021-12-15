import React from 'react';
import { withFormik, FormikProps } from 'formik';
import { store } from '../store/index';
import { addTodo } from '../actions/todoAction';

interface FormValues {
  email: string;
  password: string;
}

interface MyFormProps {
  initialEmail?: string;
  initialPassword?: string;
}

const handleClick = (value: string) => {
  console.log(value);
  store.dispatch(addTodo({ title: value, done: false }));
  console.log(store.getState());
};

class Basic extends React.Component<FormikProps<FormValues>, {}> {
  render() {
    const { errors, handleSubmit, isSubmitting, values, handleChange, handleBlur } = this.props;

    console.log(errors);

    return (
      <div>
        <h1>Login Form</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor='email'>Email:</label>
          <input
            id='email'
            value={values.email}
            type='email'
            name='email'
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <label htmlFor='password'>Password:</label>
          <input
            id='password'
            value={values.password}
            type='password'
            name='password'
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <button type='submit' disabled={isSubmitting || !!errors.email || !!errors.password}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

const Form = withFormik<MyFormProps, FormValues>({
  mapPropsToValues: (props) => ({
    email: props.initialEmail || '',
    password: props.initialPassword || '',
  }),
  validate(values) {
    const errors = {};

    if (!values.email) {
      (errors as { email: string }).email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      (errors as { email: string }).email = 'Invalid email address';
    }
    return errors;
  },
  handleSubmit({ email, password }: FormValues, { setSubmitting }) {
    console.log(email, password);
    handleClick(email);
    setSubmitting(false);
  },
})(Basic);

export default Form;
