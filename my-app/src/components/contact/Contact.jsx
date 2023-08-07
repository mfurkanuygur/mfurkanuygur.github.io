import { Formik, Form, Field } from 'formik';
import emailjs from 'emailjs-com';
import Error from '../GeneralForm/error';
import { FormSchema } from '../GeneralForm/schema';
import { ContactSection, SendButton } from './contactStyle';
import contact from '../../assets/contact.jpg'

const initialValues = {
  username: '',
  surname: '',
  email: '',
  message: '',
};

const onSubmit = (values, { resetForm }) => {
  const templateParams = {
    from_name: values.username + " " + values.surname,
    reply_to: values.email,
    message: values.message,

  };

  emailjs.send('service_j4qmei8', 'template_sdfwc4f', templateParams, "9AUOtO7vqvJc4dOeK")
    .then(() => {
      console.log('E-posta gönderildi');
      resetForm();
    })
    .catch((error) => {
      console.error('E-posta gönderilirken bir hata oluştu:', error);
    });
};

function App() {
  return (
    <ContactSection >
      <div className='container'>

        <div className='row  d-flex align-items-center  '>
          <div className='col-lg-6'>
            <img src={contact} alt="contact" className='img-fluid rounded-3' />
          </div>
          <div className='col-lg-6'>
            <Formik
              initialValues={initialValues}
              validationSchema={FormSchema}
              onSubmit={onSubmit}
            >
              <div className="d-flex justify-content-center align-items-center  ">
                <Form className='w-100 '>
                  <h3>Contact Me</h3>
                  <div className='row'>
                    <div className="col-lg-6 d-flex flex-column  ">
                      <label htmlFor="username">Name:</label>
                      <Field type="text" id="username" name="username" className="form-control" />
                      <Error name="username" />
                    </div>

                    <div className="col-lg-6 d-flex flex-column">
                      <label htmlFor="surname" className='text-start'>Surname:</label>
                      <Field type="text" id="surname" name="surname" className="form-control" />
                      <Error name="surname" />
                    </div>
                  </div>
                  <div className="d-flex flex-column form-height">
                    <label htmlFor="email" className='text-start'>Email:</label>
                    <Field type="email" id="email" name="email" className="form-control" />
                    <Error name="email" />
                  </div>
                  <div className="d-flex flex-column text-height text-start">
                    <label htmlFor="message" className='text-start'> Message:</label>
                    <Field type="text" as="textarea" id="message" name="message" className="form-control" />
                    <Error name="message" />
                  </div>
                  <SendButton type="submit">Send</SendButton>
                </Form>

              </div>
            </Formik >
          </div>
        </div>
      </div >
    </ContactSection>
  );
}

export default App;
