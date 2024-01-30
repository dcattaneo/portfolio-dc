import { useState } from "react";

export function useFormValidation({ language }) {
  const INITIAL_DATA = {
    username: "",
    email: "",
    message: "",
  };

  const [formData, setFormData] = useState(INITIAL_DATA);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [sentEmailMessage, setSentEmailMessage] = useState(false);
  const [errorSentEmailMessage, setErrorSentEmailMessage] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};
    if (!formData.username.trim()) {
      validationErrors.username = `${language ? "Please, enter your name" : "Por favor, ingrese su nombre"}`;
    }

    if (!formData.email.trim()) {
      validationErrors.email = `${language ? "E-mail is required" : "Ingrese su correo electrónico"}`;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.email = `${language ? "Provide a valid e-mail adress" : "Ingrese una dirección de correo válida"}`;
    }

    if (!formData.message.trim()) {
      validationErrors.message = `${language ? "You must write a message" : "Debe escribir un mensaje"}`;
    } else if (formData.message.length <= 6) {
      validationErrors.message = `${language ? "Your message should be longer" : "Su mensaje debe ser más largo"}`;
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setLoading(true);

      fetch("https://getform.io/f/fd68c20f-86d1-4158-b7b8-e3368b7b5ed8", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            setFormData(INITIAL_DATA);
            setLoading(false);
            setSentEmailMessage(true);
            setTimeout(() => {
              setSentEmailMessage(false);
            }, 2500);
          } else {
            setLoading(false);
            setErrorSentEmailMessage(true);
            setTimeout(() => {
              setErrorSentEmailMessage(false);
            }, 2500);
          }
        })

        .catch((error) => {
          console.log(error);
          setLoading(false);
        });
    }
  };

  return {
    formData,
    errors,
    loading,
    sentEmailMessage,
    errorSentEmailMessage,
    handleChange,
    handleSubmit,
  };
}
