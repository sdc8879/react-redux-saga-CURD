import React from 'react'
import { Button, Form, FormGroup, Label, Input, FormText, FormFeedback } from 'reactstrap';


const FormControl = (props) => {
    const {label,type,error}=props;
    const name=label.toLowerCase();

    return (
        <FormGroup>
            <Label for={name}>{label}</Label>
            <Input type={type} id={name}></Input>
            <FormFeedback>{error}</FormFeedback>

        </FormGroup>
        
    )
}

export default FormControl
