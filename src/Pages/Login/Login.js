import styles from "./Login.module.css";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
export const Login = () => {
  const schema = yup.object().shape({
    name: yup
      .string()
      .min(4, "حداقل کاراکتر نام باید4 باشد")
      .max(16, "حداکثر کاراکتر باید 16 باشد")
      .required(" ورودی نام اجباری است"),
    email: yup
      .string()
      .email("ایمیل خود را درست وارد کنید")
      .required(" ورودی ایمیل اجباریست"),
    password: yup
      .string()
      .min(4, "حداقل کاراکتر رمز عبور باید4 باشد")
      .max(15, "حداکثر کاراکتر  باید 15 باشد")
      .required(" ورودی رمز عبور اجباری است"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitForm = (data) => {
    console.log(data);
    alert(`${data.name} عزیز خوش امدید`);
  };
  return (
    <div>
      <form className={styles.login_form} onSubmit={handleSubmit(onSubmitForm)}>
        <h1 className={styles.login_h1}> Login Here</h1>
        <input
          className={styles.input}
          type={"text"}
          placeholder={"Your Name ..."}
          {...register("name")}
        />
        <br />

        <input
          className={styles.input}
          type={"email"}
          placeholder={"Your Email ..."}
          {...register("email")}
        />
        <br />
        <input
          className={styles.input}
          type={"password"}
          placeholder={"Your Password ..."}
          {...register("password")}
        />
        <br />
        <br />
        <br />
        <button type={"submit"} className={styles.btn_sub}>
          {" "}
          Submit{" "}
        </button>
        {errors.name && <p className={styles.error}> {errors.name.message} </p>}
        {errors.email && (
          <p className={styles.error}> {errors.email.message}</p>
        )}
        {errors.password && (
          <p className={styles.error}>{errors.password.message}</p>
        )}
      </form>
    </div>
  );
};
//4.26
