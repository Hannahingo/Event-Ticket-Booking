import React, { useState, useEffect } from "react";

const StepTwo = ({ nextStep, goBack, ticket }) => {
    const [image, setImage] = useState(ticket.profileImg || null);
    const [imagePreview, setImagePreview] = useState(ticket.profileImg || null);
    const [name, setName] = useState(ticket.name || "");
    const [email, setEmail] = useState(ticket.email || "");
    const [about, setAbout] = useState(ticket.about || "");
    const [errors, setErrors] = useState({});

    // Handle Image Upload
    const uploadImageToCloudinary = async (file) => {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "my_upload_preset"); // Replace with your Cloudinary preset

        const response = await fetch(
            "https://api.cloudinary.com/v1_1/dbrpvs7qj/image/upload",
            {
                method: "POST",
                body: formData,
            }
        );

        const data = await response.json();
        if (data.secure_url) {
            setImage(data.secure_url);
            setImagePreview(data.secure_url);
        }
    };

    // Handle File Change
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
            uploadImageToCloudinary(file);
        }
    };

    // Handle Input Change
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        switch (name) {
            case "name":
                setName(value);
                break;
            case "email":
                setEmail(value);
                break;
            case "about":
                setAbout(value);
                break;
            default:
                break;
        }
    };

    // Validate Email
    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    // Form Validation
    const validateForm = () => {
        const validationErrors = {};
        if (!email) {
            validationErrors.email = "Email is required";
        } else if (!validateEmail(email)) {
            validationErrors.email = "Enter a valid email address";
        }

        setErrors(validationErrors);
        return Object.keys(validationErrors).length === 0;
    };

    // Handle Next
    const handleNext = () => {
        if (validateForm()) {
            nextStep({ name, email, about, profileImg: image });
        }
    };

    return (
        <div className="stepTwo">
            <div className="profileUpload-cont">
                <p className="profileUpload-text" aria-live="polite">
                    Upload Profile Photo
                </p>
                <div className="profileUpload-back" role="button" tabIndex="0">
                    <div className="profileUpload-drop" onClick={() => document.getElementById("file-input").click()}>
                        {imagePreview ? (
                            <img src={imagePreview} alt="Profile Preview" className="image-preview" />
                        ) : (
                            <span>Drag & drop or click to upload</span>
                        )}
                    </div>
                    <input type="file" id="file-input" hidden onChange={handleFileChange} />
                </div>
            </div>

            <form className="profileUpload-form" onSubmit={(e) => e.preventDefault()}>
                <div>
                    <label htmlFor="name">Enter Your Name</label>
                    <input type="text" id="name" name="name" value={name} onChange={handleInputChange} />
                </div>
                <div>
                    <label htmlFor="email">Enter Your Email *</label>
                    <input type="email" id="email" name="email" value={email} onChange={handleInputChange} />
                    {errors.email && <span className="error">{errors.email}</span>}
                </div>
                <div>
                    <label htmlFor="about">About the project</label>
                    <textarea name="about" id="about" value={about} onChange={handleInputChange} />
                </div>
            </form>

            <div className="buttons">
                <button className="primary-button" onClick={goBack}>Back</button>
                <button className="secondary-button" onClick={handleNext}>Get My Free Ticket</button>
            </div>
        </div>
    );
};

export default StepTwo;
