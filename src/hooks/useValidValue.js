export const useValidValue = ({type, setErr}) => {

    return (event) => {

        switch (type) {
            case "email":
                const reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3})|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

                if (!reg.test(String(event.target.value).toLowerCase())) {
                    setErr("Некорректный email")
                } else {
                    setErr("")
                }
                break
            case "password":

                if (event.target.value.length < 8) {
                    setErr("Пароль должен быть больше 8 символов")
                } else if (event.target.value.length >= 30) {
                    setErr("Пароль не может быть больше 30 символов")
                } else {
                    setErr("")
                }
                break
            default:
                if (event.target.value === "") {
                    setErr("Поле не может быть пустым")
                } else if (event.target.value.length >= 30) {
                    setErr("Поле не может быть больше 30 символов")
                } else {
                    setErr("")
                }
        }
    }
}