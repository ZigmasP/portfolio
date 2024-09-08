import { Formik, Form, Field, ErrorMessage } from "formik";
import PropTypes from "prop-types";
import * as Yup from "yup";

const PurchaseForm = ({ onSubmit }) => {
  const validationSchema = Yup.object({
    firstName: Yup.string().required('Vardas būtinas'),
    lastName: Yup.string().required('Pavardė būtina'),
    birthYear: Yup.number().min(1900, 'Netinkami gimimo metai').max(new Date().getFullYear(), 'Gimimo metai neturi būti ateityje').required('Gimimo metai būtini'),
    email: Yup.string().email('Netinkamas el. paštas').required('El. paštas būtinas'),
    phone: Yup.string().required('Tel. nr, būtinas'),
    tickets: Yup.number().min(1, 'Turi būti bent 1 bilietas').required('Reikalingas bilietų skaičius'),
  });

  return (
    <Formik
      initialValues={{ firstName: '', lastName: '', birthYear: '', email: '', phone: '', tickets: 1 }}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <div>
            <label htmlFor="firstName">Vardas</label>
            <Field id="firstName" name="firstName" />
            <ErrorMessage name="firstName" component="div" className="error" />
          </div>

          <div>
            <label htmlFor="lastName">Pavardė</label>
            <Field id="lastName" name="lastName" />
            <ErrorMessage name="lastName" component="div" className="error" />
          </div>

          <div>
            <label htmlFor="birthYear">Gimimo metai</label>
            <Field id="birthYear" name="birthYear" type="number" />
            <ErrorMessage name="birthYear" component="div" className="error" />
          </div>

          <div>
            <label htmlFor="email">El. paštas</label>
            <Field id="email" name="email" type="email" />
            <ErrorMessage name="email" component="div" className="error" />
          </div>

          <div>
            <label htmlFor="phone">Telefonas</label>
            <Field id="phone" name="phone" />
            <ErrorMessage name="phone" component="div" className="error" />
          </div>

          <div>
            <label htmlFor="tickets">Bilietai</label>
            <Field id="tickets" name="tickets" type="number" />
            <ErrorMessage name="tickets" component="div" className="error" />
          </div>

          <button type="submit" disabled={isSubmitting}>
            Pirkti
          </button>
        </Form>
      )}
    </Formik>
  );
};

// PropTypes validacija
PurchaseForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default PurchaseForm;
