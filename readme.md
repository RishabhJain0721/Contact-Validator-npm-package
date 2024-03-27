# Contact Validator

Contact Validator is a versatile npm package designed to validate various types of contact information.

- Email addresses
- Phone numbers
- URLs
- IP addresses

## Installation

Using npm :

`npm install contact-validator`

## Usage

### Validating Email Addresses

To validate an email address, import the `validateEmail` function and call it with the email address you want to validate.

```
import { validateEmail } from "contact-validator";

async function checkEmailValidity(email) {
  try {
    const isValid = await validateEmail(email);
    console.log("Email validity:", isValid);
  } catch (error) {
    console.error("Error validating email:", error);
  }
}

checkEmailValidity("example@example.com");
```

### Validating Phone Numbers

To validate a phone number, use the `validatePhone` function. This function checks if the phone number is in a valid format.

```
import { validatePhone } from "contact-validator";

async function checkPhoneValidity(phone) {
  try {
    const isValid = await validatePhone(phone);
    console.log("Phone number validity:", isValid);
  } catch (error) {
    console.error("Error validating phone number:", error);
  }
}

checkPhoneValidity("1234567890");
```

### Validating URLs

To validate a URL, use the `validateUrl` function. This function checks if the URL is in a valid format and can be accessed.

```
import { validateUrl } from "contact-validator";

async function checkUrlValidity(url) {
  try {
    const isValid = await validateUrl(url);
    console.log("URL validity:", isValid);
  } catch (error) {
    console.error("Error validating URL:", error);
  }
}

checkUrlValidity("https://www.example.com");
```

### Validating IP Addresses

To validate an IP address, use the `validateIp` function. This function checks if the IP address is in a valid format (IPv4 or IPv6).

```
import { validateIp } from "contact-validator";

async function checkIpValidity(ip) {
  try {
    const isValid = await validateIp(ip);
    console.log("IP address validity:", isValid);
  } catch (error) {
    console.error("Error validating IP address:", error);
  }
}

checkIpValidity("192.168.1.1");
```

## Contributing

Contributions are welcome! If you have a feature request, bug report, or want to contribute code, please open an issue or submit a pull request.

## License

Contact Validator is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
