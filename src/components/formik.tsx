import React from 'react';
import { useFormik } from 'formik';

interface SignupProps {
      onClick: (input: any) => void;
      onInput: (input: any) => void;
      input: any;
    }

const SignupForm:React.FC<SignupProps> = ({onClick, onInput, input}) => {
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted
  const formik = useFormik({
    initialValues: {
      title: '',
    },
    onSubmit: values => {
      onClick(values);
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="title">待办事项</label>
      <input
        placeholder="请输入代办事项"
        id="title"
        name="title"
        type="title"
        onChange={formik.handleChange}
        value={formik.values.title}
      />

      <button type="submit">ADD</button>
    </form>
  );
};

export default SignupForm;