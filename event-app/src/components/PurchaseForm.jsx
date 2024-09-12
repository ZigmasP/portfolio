import { Formik, Form, Field, ErrorMessage } from "formik";
import PropTypes from "prop-types";
import * as Yup from "yup";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const PurchaseForm = ({ onSubmit }) => {
  const validationSchema = Yup.object({
    firstName: Yup.string().required('Vardas būtinas'),
    lastName: Yup.string().required('Pavardė būtina'),
    birthDate: Yup.date()
      .nullable()
      .required('Gimimo data būtina')
      .test(
        "amzius",
        "Turite būti bent 16 metų",
        (value) => {
          const today = new Date();
          const minAge = new Date(today.getFullYear() - 16, today.getMonth(), today.getDate());
          return value && value <= minAge;
        }
      ),
    email: Yup.string().email('Netinkamas el. paštas').required('El. paštas būtinas'),
    phone: Yup.string().required('Tel. nr. būtinas'),
    tickets: Yup.number().min(1, 'Turi būti bent 1 bilietas').required('Reikalingas bilietų skaičius'),
  });

  return (
    <Formik
      initialValues={{ firstName: '', lastName: '', birthDate: null, email: '', phone: '', tickets: 1 }}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting, setFieldValue, values }) => (
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
            <label htmlFor="birthDate">Gimimo data</label>
            <DatePicker
              id="birthDate"
              selected={values.birthDate}
              onChange={(date) => setFieldValue('birthDate', date)}
              dateFormat="yyyy-MM-dd"
              showYearDropdown
              scrollableYearDropdown
            />
            <ErrorMessage name="birthDate" component="div" className="error" />
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
