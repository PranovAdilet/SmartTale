import { HeadingValuesTypes } from "./types";

export const headingValues: HeadingValuesTypes = {
   ["/register"]: {
      title: "Регистрация",
      subtitle: "Введите ваши ФИО и почту, чтобы войти в систему",
   },
   ["/confirmation/login"]: {
      title: "Вход",
      subtitle: "Отправлен 4-хзначный код на указанную почту",
      loading: "Пару секунд и вы в системе! 😃",
      error: "Код введен неверно, попробуйте еще раз",
   },
   ["/confirmation/register"]: {
      title: "Регистрация",
      subtitle: "Отправлен 4-хзначный код на указанную почту",
      loading: "Пару секунд и вы в системе! 😃",
      error: "Код введен неверно, попробуйте еще раз",
   },
   ["/login"]: {
      title: "Вход",
      subtitle: "Введите почту и пароль, чтобы войти в систему",
      error: "Почта указана неверно",
   },
};
