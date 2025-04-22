import styles from "./Login.module.css";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();

  const schema = yup.object().shape({
    name: yup
      .string()
      .min(4, "The name must be at least 4 characters long")
      .max(16, "Maximum characters must be 16")
      .required("Name input is required"),
    email: yup
      .string()
      .email("Please enter your email correctly.")
      .required("Email input is required"),
    password: yup
      .string()
      .min(4, "The minimum password character must be 4")
      .max(15, "The minimum password character must be 15")
      .required(" Password input is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const successNotif = () => {
    toast.success("Registration completed", {
      duration: 4000,
      position: "top-center",
    });
  };

  const onSubmitForm = (data) => {
    console.log(data);
    successNotif();
    setTimeout(() => {
      navigate("/");
    }, 1500);
  };

  return (
    <div className={styles.login_form}>
      <form
        onSubmit={handleSubmit(onSubmitForm)}
        className={styles.Login_wrapper}
      >
        <Toaster />
        <h1 className={styles.login_h1}>Welcome Back</h1>

        <div>
          <input
            className={styles.input}
            type="text"
            placeholder="Your Name"
            {...register("name")}
          />
          {errors.name && <p className={styles.error}>{errors.name.message}</p>}
        </div>

        <div>
          <input
            className={styles.input}
            type="email"
            placeholder="Your Email"
            {...register("email")}
          />
          {errors.email && (
            <p className={styles.error}>{errors.email.message}</p>
          )}
        </div>

        <div>
          <input
            className={styles.input}
            type="password"
            placeholder="Your Password"
            {...register("password")}
          />
          {errors.password && (
            <p className={styles.error}>{errors.password.message}</p>
          )}
        </div>

        <button type="submit" className={styles.btn_sub}>
          Sign In
        </button>
      </form>
    </div>
  );
};
//4.26
