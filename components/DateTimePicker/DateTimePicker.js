import React from "react"
import {Formik, Form, Field} from 'formik'
import {Button, LinearProgress} from '@material-ui/core'
import {DateTimePicker} from 'formik-material-ui-pickers'
import {MuiPickersUtilsProvider} from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'
import Router from "next/router"
import {useDispatch} from "react-redux"
import {setDateTime} from "../../redux/actions/checkinAction"
import * as Yup from 'yup'

const newDate = new Date()
const validationSchema = Yup.object({
    checkIn: Yup.date().min(new Date(), 'CheckIn should be bigger then current date')
        .max(newDate, 'Checkin can be only in the next 2 hours').required('Required'),
    checkOut: Yup.date().min(Yup.ref('checkIn'), 'CheckOut date should be bigger then CheckIn')
        .required('Required')
})


export const DateTimePickerComponent = () => {

    const dispatch = useDispatch()

    //Adding 2 hours to the current date
    newDate.setMilliseconds(2 * 60 * 60 * 1000)

    const submit = (values, { setSubmitting}) => {
        dispatch(setDateTime({
            checkIn: values.checkIn.toString(),
            checkOut: values.checkOut.toString()
        }))
        setSubmitting(false)
    }

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils} >
            <Formik
                initialValues={{
                    checkIn: new Date(),
                    checkOut: new Date(),
                }}
                validationSchema={validationSchema}
                onSubmit={submit}
            >
                {({submitForm, isSubmitting}) => (
                    <Form style={{minHeight: '200px'}}>
                        <Field
                            component={DateTimePicker}
                            name="checkIn"
                            label="CheckIn"
                            ampm={false}
                            style={{display: 'block', margin: '20px'}}
                        />
                        <Field
                            component={DateTimePicker}
                            name="checkOut"
                            label="CheckOut"
                            ampm={false}
                            style={{display: 'block', margin: '20px'}}
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
