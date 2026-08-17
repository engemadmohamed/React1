import { useState } from "react";
import { StyledActionButton } from "../components/StyledComponents";

const initialForm = {
  fullName: "",
  email: "",
  phone: "",
  subject: "General Inquiry",
  message: "",
};

function Contact() {
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full Name is required.";
    } else if (formData.fullName.trim().length < 3) {
      newErrors.fullName = "Full Name must be at least 3 characters.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }

    const phoneRegex = /^[0-9+\s-]{8,15}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!phoneRegex.test(formData.phone.trim())) {
      newErrors.phone = "Please enter a valid phone number (8-15 digits).";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message or Address is required.";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: null,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(false);

    if (validateForm()) {
      setSubmittedData({ ...formData });
      setIsSubmitted(true);
      setFormData(initialForm);
      setErrors({});
    }
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-lg-8">
          <div
            className="p-4 p-md-5 rounded-3"
            style={{
              backgroundColor: "var(--bg-surface)",
              border: "1px solid var(--border-color)",
            }}
          >
            <div className="mb-4">
              <h1 className="h3 fw-bold mb-1" style={{ color: "var(--text-primary)" }}>
                Contact &amp; Registration
              </h1>
              <p className="text-secondary small mb-0">
                Please fill out the form below. All marked fields are validated using React state.
              </p>
            </div>

            {isSubmitted && submittedData && (
              <div
                className="p-3.5 rounded-2 mb-4"
                style={{
                  backgroundColor: "rgba(16, 185, 129, 0.1)",
                  border: "1px solid rgba(16, 185, 129, 0.3)",
                  color: "var(--text-primary)",
                }}
              >
                <h2 className="h6 fw-bold mb-1" style={{ color: "var(--success)" }}>
                  Form Submitted Successfully
                </h2>
                <p className="small text-secondary mb-2">
                  Thank you, <strong>{submittedData.fullName}</strong>. Your message has been received.
                </p>
                <div
                  className="p-2.5 rounded font-mono small"
                  style={{
                    backgroundColor: "var(--bg-card)",
                    border: "1px solid var(--border-color)",
                  }}
                >
                  <div><strong>Email:</strong> {submittedData.email}</div>
                  <div><strong>Phone:</strong> {submittedData.phone}</div>
                  <div><strong>Subject:</strong> {submittedData.subject}</div>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate>
              <div className="row g-3">
                <div className="col-12 col-md-6">
                  <label htmlFor="fullName" className="form-label text-secondary small fw-bold">
                    Full Name <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    className="form-control"
                    style={{
                      backgroundColor: "var(--bg-card)",
                      borderColor: errors.fullName ? "var(--danger)" : "var(--border-color)",
                      color: "var(--text-primary)",
                    }}
                    placeholder="e.g. John Doe"
                    value={formData.fullName}
                    onChange={handleChange}
                  />
                  {errors.fullName && (
                    <div className="text-danger small mt-1">
                      {errors.fullName}
                    </div>
                  )}
                </div>

                <div className="col-12 col-md-6">
                  <label htmlFor="email" className="form-label text-secondary small fw-bold">
                    Email Address <span className="text-danger">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control"
                    style={{
                      backgroundColor: "var(--bg-card)",
                      borderColor: errors.email ? "var(--danger)" : "var(--border-color)",
                      color: "var(--text-primary)",
                    }}
                    placeholder="e.g. john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && (
                    <div className="text-danger small mt-1">
                      {errors.email}
                    </div>
                  )}
                </div>

                <div className="col-12 col-md-6">
                  <label htmlFor="phone" className="form-label text-secondary small fw-bold">
                    Phone Number <span className="text-danger">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="form-control font-mono"
                    style={{
                      backgroundColor: "var(--bg-card)",
                      borderColor: errors.phone ? "var(--danger)" : "var(--border-color)",
                      color: "var(--text-primary)",
                    }}
                    placeholder="e.g. +1 555 123 4567"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                  {errors.phone && (
                    <div className="text-danger small mt-1">
                      {errors.phone}
                    </div>
                  )}
                </div>

                <div className="col-12 col-md-6">
                  <label htmlFor="subject" className="form-label text-secondary small fw-bold">
                    Topic / Category
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    className="form-select"
                    style={{
                      backgroundColor: "var(--bg-card)",
                      borderColor: "var(--border-color)",
                      color: "var(--text-primary)",
                    }}
                    value={formData.subject}
                    onChange={handleChange}
                  >
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Account Registration">Account Registration</option>
                    <option value="Movie Feedback">Movie Feedback</option>
                    <option value="Technical Support">Technical Support</option>
                  </select>
                </div>

                <div className="col-12">
                  <label htmlFor="message" className="form-label text-secondary small fw-bold">
                    Message or Address <span className="text-danger">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    className="form-control"
                    style={{
                      backgroundColor: "var(--bg-card)",
                      borderColor: errors.message ? "var(--danger)" : "var(--border-color)",
                      color: "var(--text-primary)",
                    }}
                    placeholder="Type your message or details here..."
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                  {errors.message && (
                    <div className="text-danger small mt-1">
                      {errors.message}
                    </div>
                  )}
                </div>
              </div>

              <div className="mt-4 pt-3 border-top d-flex justify-content-end" style={{ borderColor: "var(--border-color)" }}>
                <StyledActionButton type="submit" $variant="primary">
                  Submit Form
                </StyledActionButton>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
