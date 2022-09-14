import {
  ContactContainer,
  FormContainer,
  Form,
  FormHeadContainer,
  FormInputContainer,
  FormInputWrapper,
  FormError,
  CTAContainer,
  CTAWrapper,
} from "../styles/ContactStyles";
import SectionHeading from "../subcomponents/SectionHeading";
import { withTheme } from "styled-components";
import { useFormik } from "formik";
import {
  initialValues,
  validationSchema,
  handleSubmit,
  formInputGenerator,
  formTextAreaGenerator,
} from "../utils/FormUtils";
import { Address, Call } from "../subcomponents/ContactInfo";
import SocialIcons from "../subcomponents/SocialIcons";
import CTAButton from "../subcomponents/CTAButton";

const Contact = ({ theme }) => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      console.log("submitting");
      handleSubmit(values);
    },
  });

  return (
    <ContactContainer>
      <SectionHeading title="Connect with us" color={theme.darkBlue} />

      <FormContainer>
        <Form onSubmit={formik.handleSubmit}>
          <FormHeadContainer>
            <h3>Tell us about your project</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cum
              lobortis mi vulputate potenti orci.
            </p>
          </FormHeadContainer>
          <FormInputContainer>
            <FormInputWrapper>
              {formInputGenerator("name", formik)}
              {formik.touched["name"] && formik.errors["name"] ? (
                <FormError>{formik.errors["name"]}</FormError>
              ) : null}
            </FormInputWrapper>
          </FormInputContainer>
          <FormInputContainer>
            <FormInputWrapper>
              {formInputGenerator("email", formik)}
              {formik.touched["email"] && formik.errors["email"] ? (
                <FormError>{formik.errors["email"]}</FormError>
              ) : null}
            </FormInputWrapper>
            <FormInputWrapper>
              {formInputGenerator("phone number", formik)}
              {formik.touched["phone"] && formik.errors["phone"] ? (
                <FormError>{formik.errors["phone"]}</FormError>
              ) : null}
            </FormInputWrapper>
          </FormInputContainer>
          <FormInputContainer>
            <FormInputWrapper>
              {formTextAreaGenerator("message", formik)}
              {formik.touched["message"] && formik.errors["message"] ? (
                <FormError>{formik.errors["message"]}</FormError>
              ) : null}
            </FormInputWrapper>
          </FormInputContainer>
          <br />
          <CTAButton text="Submit" handler={formik.handleSubmit} />
        </Form>
        <CTAContainer>
          <CTAWrapper>{Address()}</CTAWrapper>
          <CTAWrapper>{Call()}</CTAWrapper>
          <CTAWrapper>
            <h3>Social Icons</h3>
            <SocialIcons cirlcecolor={theme.aqua} />
          </CTAWrapper>
        </CTAContainer>
      </FormContainer>
    </ContactContainer>
  );
};

export default withTheme(Contact);
