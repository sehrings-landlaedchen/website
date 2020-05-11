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
    <Fragment>
      <Helmet>
        <script src="https://www.google.com/recaptcha/api.js" />
      </Helmet>
      <form
        className="Form"
        name={name}
        action={action}
        onSubmit={handleSubmit}
        data-netlify=""
        netlify-recaptcha=""
      >
        {alert && (
          <div className="Form--Alert">{alert}</div>
        )}
        <div className="Form--Group">
          <label className="Form--Label">
            <input
              className="Form--Input Form--InputText"
              type="text"
              placeholder="Vorname"
              name="firstname"
              required
            />
            <span>Vorname</span>
          </label>
          <label className="Form--Label">
            <input
              className="Form--Input Form--InputText"
              type="text"
              placeholder="Nachname"
              name="lastname"
              required
            />
            <span>Nachname</span>
          </label>
        </div>
        <label className="Form--Label">
          <input
            className="Form--Input Form--InputText"
            type="email"
            placeholder="Email"
            name="emailAddress"
            required
          />
          <span>Email</span>
        </label>
        <label className="Form--Label has-arrow">
          <select
            className="Form--Input Form--Select"
            name="type"
            defaultValue="Type of Enquiry"
            required
          >
            <option disabled hidden>
              Kontaktgrund
              </option>
            <option>Need to know more</option>
            <option>Found a bug</option>
            <option>Want to say hello</option>
          </select>
        </label>
        <label className="Form--Label">
          <textarea
            className="Form--Input Form--Textarea Form--InputText"
            placeholder="Message"
            name="message"
            rows={10}
            required
          />
          <span>Nachricht</span>
        </label>
        <label className="Form--Label Form-Checkbox">
          <input
            className="Form--Input Form--Textarea Form--CheckboxInput"
            name="newsletter"
            type="checkbox"
          />
          <span>Newsletter</span>
        </label>
        <div
          className="g-recaptcha"
          data-sitekey="6LfKN3kUAAAAAGIM1CbXmaRZx3LIh_W2twn1tzkA"
        />
        {!!subject && <input type="hidden" name="subject" value={subject} />}
        <input type="hidden" name="form-name" value={name} />
        <input
          className="Button Form--SubmitButton"
          type="submit"
          value="Enquire"
          disabled={disabled}
        />
      </form>
    </Fragment>
  )
}

export default FormSimpleAjax
