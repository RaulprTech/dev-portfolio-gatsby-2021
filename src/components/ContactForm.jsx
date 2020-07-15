import React from 'react';
import { navigate } from 'gatsby-link'

function encode(data) {
    return Object.keys(data)
      .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&')
    }
  
export default () => {

    const [state, setState] = React.useState({})
    const [message, setMessage] = React.useState({})

    const handleChange = (e) => {
        const { value, name } = e.target
        setMessage({...message, [e.target.name]: e.target.value})
        //setState({ ...state, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: encode({
                'form-name': form.getAttribute('name'),
                ...message,
            }),
        })
            .then(() => {
                navigate(form.getAttribute('action'));
                alert("Tu mensaje ha sido enviado, te contactare los mas pronto posible");
                setMessage("");
            })
            .catch((error) => alert(error))
    }
    return(
    <form 
        className="mt-16 text-center" 
        name="contact" 
        method="post" 
        action="/"
        data-netlify="true" 
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
        >
        <label 
            htmlFor="contact-label" 
            className="block text-gray-700 text-sm font-bold mb-2">
            Cuentame de esa idea que quieres hacer realidad
        </label>
        {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
        <input type="hidden" name="form-name" value="contact" />
        <p hidden>
          <label>
            Don’t fill this out: <input name="bot-field" onChange={handleChange} />
          </label>
        </p>
        <br/>
        <div className="flex shadow rounded bg-white border p-2">
            {/*<textarea
                id="message"
                name="message"
                onSubmit={handleChange}
                className="flex-1 py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
            ></textarea>*/}
            <textarea
                id="message" 
                type="textarea" 
                name="message" 
                onChange={handleChange} 
                className="flex-1 py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
            />
            <button className="btn ml-4" type="submit">Enviar</button>
        </div>
    </form>
    )
}