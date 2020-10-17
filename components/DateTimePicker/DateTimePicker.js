import React, {useEffect, useState} from "react"
import {Formik, Form, Field} from 'formik'
import {Button, LinearProgress} from '@material-ui/core'
import {DateTimePicker} from 'formik-material-ui-pickers'
import {MuiPickersUtilsProvider} from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'
import Router from "next/router"
import {useDispatch} from "react-redux";
import {setDateTime} from "../../redux/actions/checkinAction";


export const DateTimePickerComponent = (props) => {

    const dispatch = useDispatch()
    const datePickerFormValidate = (values) => {
        console.log('Validation...')
    }

    const submit = (values, { setSubmitting}) => {
        const formatCheckIn = values.checkIn.toString()
        const formatCheckOut = values.checkOut.toString()
        dispatch(setDateTime({
            checkIn: formatCheckIn,
            checkOut: formatCheckOut
        }))
        setSubmitting(false)
    }

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Formik
                initialValues={{
                    checkIn: new Date(),
                    checkOut: new Date(),
                }}
                validate={datePickerFormValidate}
                onSubmit={submit}
            >
                {({submitForm, isSubmitting}) => (
                    <Form>
                        <Field
                            component={DateTimePicker}
                            name="checkIn"
                            label="CheckIn"
                            ampm={false}
                        />
                        <Field
                            component={DateTimePicker}
                            name="checkOut"
                            label="CheckOut"
                            ampm={false}
                        />
                        {isSubmitting && <LinearProgress/>}
                        <br/>
                        <Button
                            variant="contained"
                            color="primary"
                            disabled={isSubmitting}
                            onClick={() => {
                                submitForm()
                                Router.push('/places')
                            }}
                        >
                            Next Step
                        </Button>
                    </Form>
                )}
            </Formik>

        </MuiPickersUtilsProvider>
    )
}
