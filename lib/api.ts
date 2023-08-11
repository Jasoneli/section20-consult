interface Props {
  firstName: string;
  lastName: string;
  emailAddress: string;
  message: string;
}

export const sendConatctForm = async (data: Props) =>
  fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
