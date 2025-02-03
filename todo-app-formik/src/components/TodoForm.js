import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "../App.css";

const TodoForm = ({ addTodo }) => {
  return (
    <Formik
      initialValues={{ task: "" }}
      validationSchema={Yup.object({
        task: Yup.string()
          .min(5, "Min 5 chars")
          .required("Required field"),
      })}
      onSubmit={(values, { resetForm }) => {
        addTodo(values.task);
        resetForm();
      }}
    >
      {({ isSubmitting }) => (
        <Form className="todo-form">
          <Field name="task" placeholder="Add task..." />
          <ErrorMessage name="task" component="div" className="error" />
          <button type="submit" disabled={isSubmitting}>
            Add
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default TodoForm;