import axios from "axios";

export interface IData {
  fullName: string;
  tel: string;
  email: string;
  message: string;
}

export const sendMail = async (data: IData) => {
  try {
    // Sending the POST request to the API endpoint with form data
    const response = await axios.post("/api/message", data, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    // Handle the response
    if (response.status === 200) {
      alert("Message sent successfully");
    } else {
      alert(`Error: ${response.data.errMessage || "Something went wrong"}`);
    }
  } catch (error) {
    // Log the error and show alert
    console.error("Failed to send email:", error);
    alert("Failed to send message");
  }
};
