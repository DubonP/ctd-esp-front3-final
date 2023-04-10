/* A página deve ter um formulário dividido em 3 seções ou etapas:
Dados pessoais
Endereço de entrega
Detalhes do pagamento
A seção de endereço de entrega deve conter os seguintes campos:
Endereço (obrigatório)
Departamento, andar, etc (opcional)
Cidade (obrigatório)
Província (obrigatório)
CEP (obrigatório)
Por fim, a seção de pagamento deve ter os seguintes campos obrigatórios:
Número de cartão
Nome como aparece no cartão
Data de expiração
Código de segurança (estilo de senha secreta ***)
O formulário deve ser construído usando React Hook Form e Material UI
O componente Mui deve ser o Stepper
Envio (enviar) do formulário */

import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button, TextField, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Alert } from "@mui/material";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

type FormValues = {
  name: string;
  lastName: string;
  email: string;
  address: string;
  department: string;
  city: string;
  province: string;
  zipCode: string;
  cardNumber: string;
  cardName: string;
  expirationDate: string;
  securityCode: string;
};

const userMessageSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  email: Yup.string().email("Email inválido").required("Email is required"),
  address: Yup.string().required("Address is required"),
  department: Yup.string(),
  city: Yup.string().required("City is required"),
  province: Yup.string().required("Province is required"),
  zipCode: Yup.number().min(5).required("Zip Code is required"),
  cardNumber: Yup.number().min(16).required("Card Number is required"),
  cardName: Yup.string().required("Card Name is required"),
  expirationDate: Yup.string().required("Expiration Date is required"),
  securityCode: Yup.string().required("Security Code is required"),
});

export default function Checkout() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(userMessageSchema),
  });

  const createMessageRequest: SubmitHandler<FormValues> = (data) => {
    console.log(data);
    alert(
      `nome: ${data.name} sobrenome: ${data.lastName} email: ${data.email}`
    );
  };

  return (
    <>
      <main>
        <form onSubmit={handleSubmit(createMessageRequest)}>
          <h1>Personal information</h1>
          <TextField
            id="filled-basic"
            label="Name"
            variant="filled"
            size="small"
            sx={{ width: 300 }}
            {...register("name")}
          />
          <span>
            {errors.name && (
              <Alert
                sx={{
                  width: 300,
                }}
                severity="error"
              >
                {errors.name.message}
              </Alert>
            )}
          </span>
          <br />
          <TextField
            id="filled-basic"
            label="Last Name"
            variant="filled"
            size="small"
            sx={{ width: 300 }}
            {...register("lastName")}
          ></TextField>
          <span>
            {errors.lastName && (
              <Alert
                sx={{
                  width: 300,
                }}
                severity="error"
              >
                {errors.lastName.message}
              </Alert>
            )}
          </span>
          <br />
          <TextField
            id="filled-basic"
            label="Email"
            variant="filled"
            size="small"
            sx={{ width: 300 }}
            {...register("email")}
          ></TextField>
          <span>
            {errors.email && (
              <Alert
                sx={{
                  width: 300,
                }}
                severity="error"
              >
                {errors.email.message}
              </Alert>
            )}
          </span>
          <br />
          <h1>Delivery address</h1>
          <TextField
            id="filled-basic"
            label="Address"
            variant="filled"
            size="small"
            sx={{ width: 300 }}
            {...register("address")}
          ></TextField>
          <span>
            {errors.address && (
              <Alert
                sx={{
                  width: 300,
                }}
                severity="error"
              >
                {errors.address.message}
              </Alert>
            )}
          </span>
          <br />
          <TextField
            id="filled-basic"
            label="Department"
            variant="filled"
            size="small"
            sx={{ width: 300 }}
            {...register("department")}
          ></TextField>
          <span>
            {errors.department && (
              <Alert
                sx={{
                  width: 300,
                }}
                severity="error"
              >
                {errors.department.message}
              </Alert>
            )}
          </span>
          <br />
          <TextField
            id="filled-basic"
            label="City"
            variant="filled"
            size="small"
            sx={{ width: 300 }}
            {...register("city")}
          ></TextField>
          <span>
            {errors.city && (
              <Alert
                sx={{
                  width: 300,
                }}
                severity="error"
              >
                {errors.city.message}
              </Alert>
            )}
          </span>
          <br />
          <TextField
            id="filled-basic"
            label="Province"
            variant="filled"
            size="small"
            sx={{ width: 300 }}
            {...register("province")}
          ></TextField>
          <span>
            {errors.province && (
              <Alert
                sx={{
                  width: 300,
                }}
                severity="error"
              >
                {errors.province.message}
              </Alert>
            )}
          </span>
          <br />
          <TextField
            id="filled-basic"
            label="Zip Code"
            variant="filled"
            size="small"
            sx={{ width: 300 }}
            {...register("zipCode")}
          ></TextField>
          <span>
            {errors.zipCode && (
              <Alert
                sx={{
                  width: 300,
                }}
                severity="error"
              >
                {errors.zipCode.message}
              </Alert>
            )}
          </span>
          <br />
          <h1>Payment details</h1>
          <TextField
            id="filled-basic"
            label="Card Number"
            variant="filled"
            size="small"
            sx={{ width: 300 }}
            {...register("cardNumber")}
          ></TextField>
          <span>
            {errors.cardNumber && (
              <Alert
                sx={{
                  width: 300,
                }}
                severity="error"
              >
                {errors.cardNumber.message}
              </Alert>
            )}
          </span>
          <br />
          <TextField
            id="filled-basic"
            label="Card Name"
            variant="filled"
            size="small"
            sx={{ width: 300 }}
            {...register("cardName")}
          ></TextField>
          <span>
            {errors.cardName && (
              <Alert
                sx={{
                  width: 300,
                }}
                severity="error"
              >
                {errors.cardName.message}
              </Alert>
            )}
          </span>
          <br />
          <TextField
            id="filled-basic"
            label="Expiration Date"
            variant="filled"
            size="small"
            sx={{ width: 300 }}
            {...register("expirationDate")}
          ></TextField>
          <span>
            {errors.expirationDate && (
              <Alert
                sx={{
                  width: 300,
                }}
                severity="error"
              >
                {errors.expirationDate.message}
              </Alert>
            )}
          </span>
          <br />
          <TextField
            id="filled-basic"
            label="Security Code"
            type="password"
            variant="filled"
            size="small"
            sx={{ width: 300 }}
            {...register("securityCode")}
          ></TextField>
          <span>
            {errors.securityCode && (
              <Alert
                sx={{
                  width: 300,
                }}
                severity="error"
              >
                {errors.securityCode.message}
              </Alert>
            )}
          </span>
          <br />
          <Button
            variant="contained"
            sx={{ width: 300, marginTop: 2 }}
            type="submit"
          >
            Submit
          </Button>
        </form>
      </main>
    </>
  );
}
