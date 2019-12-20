import React from 'react';
import { Formik, Field, Form, useField } from "formik"
import { TextField, Button, Checkbox, FormControl, Radio, FormControlLabel, RadioGroup } from "@material-ui/core"
import Innovate from './Innovate';


const FormField = () => {

    function StyledRadio(props) {
        return (
            <Radio
                disableRipple
                color="default"
                {...props}
            />
        );
    }
    return (
        <div className="form-container">
            <Innovate />
            <Formik initialValues={{ firstName: '', lastName: '', email: '', phoneNumber: '', canCall: false }} onSubmit={(data, { resetForm }) => {
                console.log(data)
                resetForm();
            }}>
                {({ values, handleChange, handleBlur, handleSubmit }) => (
                    <Form className="">
                        <div>
                            <Field
                                placeholder="First Name"
                                name="firstName"
                                value={values.firstName}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                        </div>
                        <div>
                            <Field
                                placeholder="Last Name"
                                name="lastName"
                                value={values.lastName}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                        </div>
                        <div>
                            <Field
                                placeholder="Email"
                                name="email"
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                        </div>
                        <div>
                            <Field
                                placeholder="Phone Number"
                                name="phoneNumber"
                                value={values.phoneNumber}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                        </div>
                        <p>Is it okay to call you? check for "Hell yea" </p>
                        <Field name='canCall' type="checkbox" as={Checkbox} />

                        <p>If so, give us a best time!</p>
                        <FormControl component="fieldset">
                            <formLabel component="legend">Time</formLabel>
                            <RadioGroup>
                                <FormControlLabel value="morning" control={<StyledRadio />} label="Morning" />
                                <FormControlLabel value="afternoon" control={<StyledRadio />} label="Afternoon" />
                                <FormControlLabel value="Evening" control={<StyledRadio />} label="Evening" />
                            </RadioGroup>
                        </FormControl>

                        <div>
                            <Button type="submit">Submit</Button>
                        </div>

                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default FormField;
