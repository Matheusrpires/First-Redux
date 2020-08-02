import vest, { test } from "vest";
import enforce from "vest/enforceExtended";

export default vest.create("user_form", (data = {}) => {
  // test("email", "Email Address is not valid", (data) => {
  //   enforce(data.email).isEmail();
  // });
  test("username", "Username é necesssário", () => {
    enforce(data.username).inNotEmpty();
  });
});
