import React, { Fragment, FC, useState } from 'react'
import Helmet from 'react-helmet'
import { stringify } from 'qs'
import { serialize } from 'dom-form-serializer'

import './Form.css'

interface FormProps {
  name: string;
  subject?: string;
  action?: string;
  successMessage?: string;
  errorMessage?: string;
}

const FormSimpleAjax: FC<FormProps> = ({ name = "", subject = "", action = "", successMessage = "Thanks for your enquiry, we will get back to you soon", errorMessage = "There is a problem, your message has not been sent, please try contacting us via email" }) => {
  const [alert, setAlert] = useState('');
  const [disabled, setDisabled] = useState(false);

  const handleSubmit = e => {
    e.preventDefault()
    if (disabled) return

    const form = e.target
    const data = serialize(form)
    setDisabled(true);
    fetch(form.action + '?' + stringify(data), {
      method: 'POST'
    })
      .then(res => {
        if (res.ok) {
          return res
        } else {
          throw new Error('Network error')
        }
      })
      .then(() => {
        form.reset()
        setDisabled(false);
        setAlert(successMessage);
      })
      .catch(err => {
        console.error(err)
        setDisabled(false);
        setAlert(errorMessage);
      })
  }

  return (
    <>
      <Helmet>
        <script src="https://www.google.com/recaptcha/api.js" />
      </Helmet>
      <form
        className="form-contact contact_form"
        name={name}
        action={action}
        onSubmit={handleSubmit}
        data-netlify=""
        netlify-recaptcha=""
      >
        {alert && (
          <div className="Form--Alert">{alert}</div>
        )}
        <div className="row">
          <div className="col-sm-6">
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                placeholder="Vorname"
                name="firstname"
                required
              />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                placeholder="Nachname"
                name="lastname"
                required
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <div className="form-group">
              <input
                className="form-control"
                type="email"
                placeholder="Email"
                name="email"
                required
              />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                placeholder="Kontaktgrund"
                name="type"
                required
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <textarea
              className="form-control w-100"
              placeholder="Message"
              name="message"
              rows={10}
              cols={30}
              required
            />
          </div>
        </div>
        <div
          className="g-recaptcha"
          data-sitekey="6LfKN3kUAAAAAGIM1CbXmaRZx3LIh_W2twn1tzkA"
        />
        {!!subject && <input type="hidden" name="subject" value={subject} />}
        <input type="hidden" name="form-name" value={name} />
        
        <div className="form-group mt-3">
          <button type="submit" className="button button-contactForm boxed-btn">Send</button>
        </div>
      </form>
    </>
  )
}

export default FormSimpleAjax
