import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const RegistrationForm = ({ onSubmit }) => {
  const validationSchema = Yup.object({
    name: Yup.string().required('Vardas būtinas'),
    email: Yup.string().email('Netinkamas el. paštas').required('El. paštas būtinas'),
    tickets: Yup.number().min(1, 'Turi būti bent 1 bilietas').required('Reikalingas bilietų skaičius'),
  });

  return (
    <Formik
      initialValues={{ name: '', email: '', tickets: 1 }}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <div>
            <label htmlFor="name">Vardas</label>
            <Field id="name" name="name" />
            <ErrorMessage name="name" component="div" className="error" />
          </div>

          <div>
            <label htmlFor="email">El. paštas</label>
            <Field id="email" name="email" type="email" />
            <ErrorMessage name="email" component="div" className="error" />
          </div>

          <div>
            <label htmlFor="tickets">Bilietai</label>
            <Field id="tickets" name="tickets" type="number" />
            <ErrorMessage name="tickets" component="div" className="error" />
          </div>

          <button type="submit" disabled={isSubmitting}>
            Registruotis
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default RegistrationForm;
