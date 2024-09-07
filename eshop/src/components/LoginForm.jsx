import PropTypes from "prop-types";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./forms.scss";

const LoginForm = ({ onLogin, onRegisterClick, onClose }) => {
  const validationSchema = Yup.object({
    email: Yup.string().email('Neteisingas el. paštas').required('Būtinas laukelis'),
    password: Yup.string().required('Būtinas laukelis')
  });

  const initialValues = {
    email: '',
    password: ''
  };

  const onSubmit = (values, { setSubmitting }) => {
    console.log('Prisijungimo duomenys:', values);
    const userData = { name: "Vartotojas", email: values.email }; // Imituojame vartotojo prisijungimą
    onLogin(userData);
    setSubmitting(false);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Prisijungimas</h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
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
                Prisijungti
              </button>

              <p className="register-link">
                Neturite paskyros? Registruokitės <a href="#!" onClick={onRegisterClick}>čia</a>
              </p>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

LoginForm.propTypes = {
  onLogin: PropTypes.func.isRequired,
  onRegisterClick: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default LoginForm;
