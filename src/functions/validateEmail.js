import dns from "dns";

// Simple regex to check email format
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

async function validateEmail(email) {
  // Check if the email matches the regex format
  if (!emailRegex.test(email)) {
    // console.log("Invalid email format.");
    return false;
  }

  const emailParts = email.split("@");
  const domain = emailParts[1];

  try {
    // Set a timeout for the DNS query
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 5000); // 5 seconds timeout

    const addresses = await dns.promises.resolveMx(domain, {
      signal: controller.signal,
    });
    clearTimeout(timeout);

    // console.log("Address:", addresses);
    return true;
  } catch (error) {
    // if (error.name === "AbortError") {
    //   console.log("DNS query timed out.");
    // } else {
    //   console.log("Error:", error);
    // }
    return false;
  }
}

export default validateEmail;
