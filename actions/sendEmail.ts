"use server";

import React from "react";
import { Resend } from "resend";
import { validateString, validateEmail, getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";

export const sendEmail = (formData: FormData) => {
    const senderEmail = formData.get("senderEmail");
    const message = formData.get("message");
  
    // simple server-side validation
    if (!validateEmail(senderEmail, 500)) {
      return {
        error: "Invalid sender email",
      };
    }
    if (!validateString(message, 5000)) {
      return {
        error: "Invalid message",
      };
    }
    return{}
  };
  