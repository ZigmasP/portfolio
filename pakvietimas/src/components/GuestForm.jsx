import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import PropTypes from "prop-types";
import "./GuestForm.scss";

const GuestForm = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{ name: "", attendees: "", children: "", phone: "" }}
      validationSchema={Yup.object({
        name: Yup.string().required("Vardas yra privalomas"),
        attendees: Yup.number()
          .min(1, "Bent vienas asmuo turi dalyvauti")
          .required("Laukas privalomas"),
        children: Yup.number()
          .min(0, "Vaikų skaičius negali būti neigiamas")
          .required("Jei nėra - rašykite 0"),
        phone: Yup.string()
          .matches(/^\+?\d{9,12}$/, "Telefono numeris turi būti validus")
          .required("Laukas privalomas"),
      })}
      onSubmit={(values, { resetForm, setSubmitting }) => {
        // Apskaičiuojame suaugusiųjų skaičių
        const adults = Math.max(0, values.attendees - values.children);

        // Sukuriame svečio duomenis
        const guestData = {
          ...values,
          adults, // Naudojame apskaičiuotą suaugusiųjų skaičių
        };

        // Išsaugome svečio duomenis į localStorage
        const storedGuests = JSON.parse(localStorage.getItem("guestList")) || [];
        const updatedGuests = [...storedGuests, guestData];
        localStorage.setItem("guestList", JSON.stringify(updatedGuests));

        // Iškviečiame onSubmit su naujais duomenimis
        onSubmit(guestData);
        resetForm();
        setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <Form className="guest-form">
          <div>
            <label htmlFor="name">Vardas</label>
            <Field
              id="name"
              name="name"
              type="text"
              autoComplete="name"
            />
            <ErrorMessage name="name" component="div" className="error" />
          </div>

          <div>
            <label htmlFor="attendees">Kiek asmenų dalyvaus (bendras)</label>
            <Field
              id="attendees"
              name="attendees"
              type="number"
              autoComplete="off"
            />
            <ErrorMessage name="attendees" component="div" className="error" />
          </div>

          <div>
            <label htmlFor="children">Vaikai iki 12 metų</label>
            <Field
              id="children"
              name="children"
              type="number"
              autoComplete="off"
            />
            <ErrorMessage name="children" component="div" className="error" />
          </div>

          <div>
            <label htmlFor="phone">Telefono nr.</label>
            <Field
              id="phone"
              name="phone"
              type="text"
              autoComplete="tel"
            />
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

GuestForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default GuestForm;
