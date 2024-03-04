import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './App.css';

const BookSchema = Yup.object().shape({
  title: Yup.string().required('Title is required'),
  author: Yup.string().required('Author is required'),
  isbn: Yup.string().required('ISBN is required'),
  publicationDate: Yup.date().required('Publication date is required'),
});

function App() {
  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.setSubmitting(false);
  };

  return (
    <div className="form-container">
      <h1>Add Book</h1>
      <Formik
        initialValues={{
          title: '',
          author: '',
          isbn: '',
          publicationDate: '',
        }}
        validationSchema={BookSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="form-group">
              <label htmlFor="title">Title:</label>
              <Field type="text" name="title" id="title" className="input-field" />
              <ErrorMessage name="title" component="div" className="error-message" />
            </div>
            <div className="form-group">
              <label htmlFor="author">Author:</label>
              <Field type="text" name="author" id="author" className="input-field" />
              <ErrorMessage name="author" component="div" className="error-message" />
            </div>
            <div className="form-group">
              <label htmlFor="isbn">ISBN:</label>
              <Field type="text" name="isbn" id="isbn" className="input-field" />
              <ErrorMessage name="isbn" component="div" className="error-message" />
            </div>
            <div className="form-group">
              <label htmlFor="publicationDate">Publication Date:</label>
              <Field type="date" name="publicationDate" id="publicationDate" className="input-field" />
              <ErrorMessage name="publicationDate" component="div" className="error-message" />
            </div>
            <button type="submit" className="submit-btn" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default App;
