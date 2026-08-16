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
          <div className="card bg-dark text-white border-warning border-opacity-30 shadow-lg rounded-4 overflow-hidden">
            <div className="card-header bg-black bg-opacity-40 border-bottom border-secondary border-opacity-25 p-4">
              <div className="d-flex align-items-center gap-3">
                <span className="fs-2">📩</span>
                <div>
                  <h1 className="h3 text-warning fw-bold mb-0">Contact & Registration</h1>
                  <p className="text-secondary small mb-0">
                    Get in touch with us or register your account details below.
                  </p>
                </div>
              </div>
            </div>

            <div className="card-body p-4 p-md-5">
              {isSubmitted && submittedData && (
                <div
                  className="alert bg-success bg-opacity-20 border border-success text-white rounded-3 p-4 mb-4"
                  role="alert"
                >
                  <div className="d-flex align-items-center gap-2 mb-2">
                    <span className="fs-4">🎉</span>
                    <h2 className="h5 text-success fw-bold mb-0">Form Submitted Successfully!</h2>
                  </div>
                  <p className="small text-light mb-2">
                    Thank you, <strong>{submittedData.fullName}</strong>. Your response has been received.
                  </p>
                  <div className="bg-black bg-opacity-40 p-3 rounded-2 small font-monospace">
                    <div><strong>Email:</strong> {submittedData.email}</div>
                    <div><strong>Phone:</strong> {submittedData.phone}</div>
                    <div><strong>Subject:</strong> {submittedData.subject}</div>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate>
                <div className="row g-4">
                  <div className="col-12 col-md-6">
                    <label htmlFor="fullName" className="form-label text-secondary small fw-bold">
                      Full Name <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      className={`form-control bg-secondary bg-opacity-10 text-white border-secondary ${
                        errors.fullName ? "is-invalid border-danger" : ""
                      }`}
                      placeholder="e.g. John Doe"
                      value={formData.fullName}
                      onChange={handleChange}
                    />
                    {errors.fullName && (
                      <div className="invalid-feedback d-block text-danger small mt-1">
                        ⚠️ {errors.fullName}
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
                      className={`form-control bg-secondary bg-opacity-10 text-white border-secondary ${
                        errors.email ? "is-invalid border-danger" : ""
                      }`}
                      placeholder="e.g. john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    {errors.email && (
                      <div className="invalid-feedback d-block text-danger small mt-1">
                        ⚠️ {errors.email}
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
                      className={`form-control bg-secondary bg-opacity-10 text-white border-secondary ${
                        errors.phone ? "is-invalid border-danger" : ""
                      }`}
                      placeholder="e.g. +1 555 123 4567"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                    {errors.phone && (
                      <div className="invalid-feedback d-block text-danger small mt-1">
                        ⚠️ {errors.phone}
                      </div>
                    )}
                  </div>

                  <div className="col-12 col-md-6">
                    <label htmlFor="subject" className="form-label text-secondary small fw-bold">
                      Subject / Topic
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      className="form-select bg-secondary bg-opacity-10 text-white border-secondary"
                      value={formData.subject}
                      onChange={handleChange}
                    >
                      <option value="General Inquiry" className="bg-dark">General Inquiry</option>
                      <option value="Account Registration" className="bg-dark">Account Registration</option>
                      <option value="Movie Review Feedback" className="bg-dark">Movie Review Feedback</option>
                      <option value="Technical Support" className="bg-dark">Technical Support</option>
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
                      className={`form-control bg-secondary bg-opacity-10 text-white border-secondary ${
                        errors.message ? "is-invalid border-danger" : ""
                      }`}
                      placeholder="Type your message, address, or details here..."
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                    {errors.message && (
                      <div className="invalid-feedback d-block text-danger small mt-1">
                        ⚠️ {errors.message}
                      </div>
                    )}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-top border-secondary border-opacity-25 text-end">
                  <StyledActionButton type="submit" $variant="primary">
                    🚀 Submit Form
                  </StyledActionButton>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
