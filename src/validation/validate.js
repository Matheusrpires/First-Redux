import vest, { test } from "vest";
import enforce from "vest/enforceExtended";

export default vest.create("user_form", (data = {}, currentField) => {
  vest.only(currentField);
  test("name", "Nome é necesssário", () => {
    enforce(data.name).isNotEmpty();
  });
  test("sobrenome", "Sobrenome é necesssário", () => {
    enforce(data.sobrenome).isNotEmpty();
  });
  test("username", "Username é necesssário", () => {
    enforce(data.username).isNotEmpty();
  });
  test("email", "Email precisa ser válido", () => {
    enforce(data.email).isEmail();
  });
  test("password", "Senha é necessário", () => {
    enforce(data.password).isNotEmpty();
  });

  test("password", "Senha precisa ter pelo menos 4 caracteres", () => {
    enforce(data.password).longerThanOrEquals(4);
  });

  test("confirm_password", "Senhas precisam ser iguais", () => {
    enforce(data.confirm_password).isNotEmpty();
    enforce(data.confirm_password).equals(data.password);
  });
});
