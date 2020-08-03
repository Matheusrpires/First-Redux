import vest, { test } from "vest";
import enforce from "vest/enforceExtended";

export default vest.create("login_form", (data = {}, currentField) => {
  vest.only(currentField);
  test("username", "Digite nome de usuário", () => {
    enforce(data.username).isNotEmpty();
  });
  test("password", "Senha é necessário", () => {
    enforce(data.password).isNotEmpty();
  });
});
