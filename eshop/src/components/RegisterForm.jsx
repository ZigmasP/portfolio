import PropTypes from "prop-types";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./forms.scss";

const RegisterForm = ({ onClose }) => {
  const validationSchema = Yup.object({
    name: Yup.string().required('Būtinas laukelis'),
    email: Yup.string().email('Neteisingas el. paštas').required('Būtinas laukelis'),
    password: Yup.string().required('Būtinas laukelis')
  });

  const initialValues = {
    name: '',
    email: '',
    password: ''
  };

  const onSubmit = (values, { setSubmitting, setStatus }) => {
    console.log('Registracijos duomenys:', values);
    setSubmitting(false);
    setStatus("Registracija sėkminga. Galite prisijungti.");
    setTimeout(() => {
      onClose();
    }, 2000);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Registracija</h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ isSubmitting, status }) => (
            <Form>
              <div className="form-group">
                <label htmlFor="name">Vardas</label>
                <Field type="text" id="name" name="name" className="form-field" />
                <ErrorMessage name="name" component="div" className="error" />
              </div>

              <div className="form-group">
                <label htmlFor="email">El. paštas</label>
                <Field type="email" id="email" name="email" className="form-field" />
                <ErrorMessage name="email" component="div" className="error" />
              </div>

              <div className="form-group">
                <label htmlFor="password">Slaptažodis</label>
                <Field type="password" id="password" name="password" className="form-field" />
                <ErrorMessage name="password" component="div" className="error" />
              </div>

              <button type="submit" className="form-button" disabled={isSubmitting}>
                Registruotis
              </button>

              {status && <p className="success-message">{status}</p>}
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

RegisterForm.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default RegisterForm;
