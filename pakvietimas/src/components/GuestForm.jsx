import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./GuestForm.scss";

const GuestForm = () => {
  return (
    <Formik
      initialValues={{ name: '', attendees: '', children: '', phone: '' }}
      validationSchema={Yup.object({
        name: Yup.string().required('Vardas yra privalomas'),
        attendees: Yup.number()
          .min(1, 'Bent vienas asmuo turi dalyvauti')
          .required('Laukas privalomas'),
        children: Yup.number()
          .min(0, 'Vaikų skaičius negali būti neigiamas')
          .required('jei nėra - rašykitę 0'),
        phone: Yup.string()
          .matches(/^\+?\d{9,12}$/, 'Telefono numeris turi būti validus')
          .required('Laukas privalomas'),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form className="guest-form">
          <div>
            <label htmlFor="name">Vardas</label>
            <Field name="name" type="text" />
            <ErrorMessage name="name" component="div" className="error" />
          </div>

          <div>
            <label htmlFor="attendees">Kiek asmenų dalyvaus</label>
            <Field name="attendees" type="number" />
            <ErrorMessage name="attendees" component="div" className="error" />
          </div>

          <div>
            <label htmlFor="children">Vaikai iki 12 metų</label>
            <Field name="children" type="number" />
            <ErrorMessage name="children" component="div" className="error" />
          </div>

          <div>
            <label htmlFor="phone">Telefono nr.</label>
            <Field name="phone" type="text" />
            <ErrorMessage name="phone" component="div" className="error" />
          </div>

          <button type="submit" disabled={isSubmitting}>
            Pateikti
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default GuestForm;