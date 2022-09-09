import { forwardRef } from "react";
import {
  FormGroupProps,
  FormLabelProps,
  FormControlProps as BSFormControlProps,
} from "react-bootstrap";
import Form from "react-bootstrap/Form";

interface FormControlProps {
  formGroupProps?: FormGroupProps;
  formLabelProps?: FormLabelProps;
  formControlProps?: BSFormControlProps;
  label?: any;
}

const FormControl = forwardRef((props: FormControlProps, ref) => {
  const { formGroupProps, formLabelProps, formControlProps, label } = props;
  return (
    <Form.Group {...formGroupProps}>
      {Boolean(label) && <Form.Label className="mb-0" {...formLabelProps}>{label}</Form.Label>}
      <Form.Control ref={ref} {...formControlProps} />
    </Form.Group>
  );
});

export default FormControl;
