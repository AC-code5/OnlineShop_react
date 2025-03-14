import styles from "./Login.module.css";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import toast, { Toaster } from "react-hot-toast";

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

  const successNotif = () => {
    toast.success("ثبت نام انجام شد ", {
      duration: 4000,
      position: "top-center",
    });
  };

  const onSubmitForm = (data) => {
    console.log(data);
    successNotif();
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
