import dns from "dns";

async function validateEmail(email) {
  const emailParts = email.split("@");
  console.log(emailParts);
  const domain = emailParts[1];
  try {
    await dns.promises.resolveMx(domain); //returns array of addresses; if no addresses, throws error
    return true;
  } catch (error) {
    return false;
  }
}

export default validateEmail;
