import * as yup from "yup";

export const formLoginSchema = yup.object().shape({
  email: yup
    .string()
    .required("E-mail obrigatário")
    .email("Formato de E-mail inválido"),
  password: yup.string().required("Senha obrigátorio"),
});

export const formRegisterSchema = yup.object().shape({
  name: yup.string().required("Nome obrigátorio"),
  email: yup
    .string()
    .email("Formato de E-mail inválido")
    .required("E-mail obrigátorio"),
  cpf: yup
    .string()
    .matches(
      /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/,
      "CPF deve seguir o padrão 000.000.000-00"
    )
    .required("CPF obrigátorio"),
  phone: yup
    .string()
    .matches(
      /^\([1-9]{2}\) [9]{1}[6-9]{1}\d{3}\-\d{4}$/,
      "Número deve seguir o padrão (000) 90000-0000"
    )
    .required("Celular obrigátorio"),
  birthDate: yup.string().required("Data de nascimento obrigátorio"),
  description: yup.string().required("Descrição obrigátorio"),
  typeAccount: yup.mixed().oneOf(["buyer", "advertiser"]),
  isSaler: yup.boolean(),
  password: yup.string().min(6).required(),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "As senhas precisam ser iguais")
    .required(),
});
