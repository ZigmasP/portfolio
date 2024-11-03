import { Formik, Form, Field } from "formik";
import PropTypes from "prop-types";
import "./ReviewForm.scss";

const ReviewForm = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{ name: "", comment: "", rating: "" }}
      onSubmit={(values, { resetForm }) => {
        onSubmit({
          ...values,
          rating: Number(values.rating), // Įsitikinkite, kad reitingas yra skaičius
          date: new Date().toLocaleDateString(),
        });
        resetForm();
      }}
    >
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
                <Field type="radio" name="rating" value={star} />
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
    </Formik>
  );
};

ReviewForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ReviewForm;