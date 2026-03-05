import { useState, useCallback, useEffect } from "react";
import { submitContact } from "../services/contactService";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const INITIAL_FORM = { name: "", email: "", message: "" };

const useContactForm = () => {
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [formErrors, setFormErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    if (!notification) return;
    const timer = setTimeout(() => setNotification(null), 3000);
    return () => clearTimeout(timer);
  }, [notification]);

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", isLoading);
    return () => document.body.classList.remove("overflow-hidden");
  }, [isLoading]);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === "email") {
      setFormErrors((prev) => ({
        ...prev,
        email: value.trim() ? !EMAIL_REGEX.test(value) : false,
      }));
    } else {
      setFormErrors((prev) => ({ ...prev, [name]: false }));
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = {};

    Object.keys(formData).forEach((field) => {
      if (!formData[field].trim()) errors[field] = true;
    });

    if (formData.email.trim() && !EMAIL_REGEX.test(formData.email)) {
      errors.email = true;
    }

    setFormErrors(errors);
    if (Object.keys(errors).length > 0) return;

    setIsLoading(true);
    try {
      await submitContact({
        ...formData,
        time: new Date().toLocaleString("en-US", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        }),
      });
      setFormData(INITIAL_FORM);
      setNotification("success");
    } catch {
      setNotification("error");
    } finally {
      setIsLoading(false);
    }
  };

  return {
    formData,
    formErrors,
    isLoading,
    notification,
    handleChange,
    handleSubmit,
    setNotification,
  };
};

export default useContactForm;
