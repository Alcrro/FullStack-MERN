import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const RegisterForm = () => {
  const schema = yup.object().shape({
    fullName: yup.string().required(),
    email: yup.string().email().required(),
    age: yup.number().positive().integer().min(18).required(),
    password: yup.string().min(4).max(20).required(),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null])
      .required(),
  });
  const { register, handleSubmit } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="container mt-5 text-center ">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="username" {...register("fullName")} />
        <input type="email" placeholder="email" {...register("email")} />
        <input type="number" placeholder="age" {...register("email")} />
        <input type="password" placeholder="password" {...register("password")} />
        <input type="password" placeholder="Confirm password" {...register("confirmPassword")} />
        <input type="submit" />
      </form>
    </div>
  );
};

export default RegisterForm;
