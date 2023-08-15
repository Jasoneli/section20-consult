import * as React from "react";

interface EmailTemplateProps {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
  lastName,
  email,
  message,
}) => (
  <div>
    <h1>
      Welcome, {firstName} {lastName}!
    </h1>
    <p>Email: {email}</p>
    <p>{message}</p>
  </div>
);
