import axios from "axios";
import { Formik, Form, Field } from "formik";
import PropTypes from "prop-types";
import DOMPurify from "dompurify";
import "./ReviewForm.scss";

const ReviewForm = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{ name: "", comment: "", rating: "" }}
      onSubmit={(values, { resetForm }) => {
        const sanitizedValues = {
          name: DOMPurify.sanitize(values.name),
          comment: DOMPurify.sanitize(values.comment),
          rating: Number(values.rating), // Įsitikinkite, kad reitingas yra skaičius
          date: new Date().toLocaleDateString(),
        };

        axios
          .post("http://127.0.0.1:3000/reviews", sanitizedValues) // Pakeiskite į savo backend URL
          .then((response) => {
            console.log(response.data.message);
            onSubmit(sanitizedValues); // Papildomai iškviečiame `onSubmit`, jei norite lokaliai atnaujinti būseną
            resetForm();
          })
          .catch((error) => {
            console.error("Klaida siunčiant atsiliepimą:", error.message);
          });
      }}
    >
      {({ setFieldValue }) => (
        <Form className="review-form">
          <h2>Palikite Atsiliepimą</h2>
          <div className="form-group">
            <label htmlFor="name">Vardas</label>
            <Field name="name" type="text" placeholder="Įveskite savo vardą" />
          </div>
          <div className="form-group">
            <label>Įvertinimas</label>
            <div className="rating-group">
              {[1, 2, 3, 4, 5].map((star) => (
                <label key={star} className="rating-bubble">
                  <Field 
                    type="radio" 
                    name="rating" 
                    value={star} 
                    onChange={() => setFieldValue("rating", star)} // Pridėta logika, kad pažymėtų vertinimą
                  />
                  <span>{star}</span>
                </label>
              ))}
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="comment">Atsiliepimas</label>
            <Field
              name="comment"
              as="textarea"
              placeholder="Parašykite savo atsiliepimą"
            />
          </div>
          <button type="submit" className="submit-button">Siųsti atsiliepimą</button>
        </Form>
      )}
    </Formik>
  );
};

ReviewForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ReviewForm;
