import React from "react";
import "./login.css"


/**
 * import axios from "axios";
   import React, { useState,    } from "react";
 *const [email, setEmail] = useState(""); Bunu kullanıcı adı olarak değiştir.
  const [pass, setPass] = useState("");
  const [sc, setSc] = useState(false);
  const [error, setError] = useState("");

  const nagivate = useNavigate();
  // const { setAuth } = useContext(AuthContext);
  const loginSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      await authService.login(email,pass).then(
        () => {
          nagivate('/')
          window.location.reload();
        },
        (err) => {
          console.log(err)
        }
      );
    } catch (error) {
      console.log(error);
    }
  };
    // -------------------- Register ------------------------------
  const [registerEmail, setRegisterEmail] = useState("");
  const [name, setName] = useState("");
  const [registerPass, setRegisterPass] = useState("");
  const [registerCPass, setRegisterCPass] = useState("");
  const [loading, setLoading] = useState(false);

  const registerSubmitHandler = async (e) => {
    e.preventDefault();

    if (registerPass !== registerCPass) {
      setMsg("Şifreler Uyuşmuyor");
    } else {
      setMsg(null);
      try {
        await authService.signup(
          registerEmail,
          registerPass,
          name)
          .then(
          () => {
            nagivate("/PageLogin")
            window.location.reload();
            window.alert("Giriş Yapabilirsiniz.")
            },
            (err) => {
              console.log(err)
          }
        )
        // const config = {
        //   headers: {
        //     "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        //   },
        // };
        // setLoading(true);
        // const { data } = await axios.post(
        //   "api/users/signup",
        //   {
        //     name: name,
        //     email: registerEmail,
        //     password: registerPass,
        //   },
        //   config
        // );
        // setLoading(false);

        // localStorage.setItem("userInfo", JSON.stringify(data));
        // console.log(data);

      } catch (error) {
        console.error(error.response.data.msg);
      }
    }
  };
  // ---------------------------------------------------------------------

 */
export default function Login() {
  return (
    <div>
      <div className="login-wrap">
        <div className="login-html">
          <input
            id="tab-1"
            type="radio"
            name="tab"
            className="sign-in"
            checked
          />
          <label for="tab-1" className="tab">
            Giriş yap
          </label>
          <input id="tab-2" type="radio" name="tab" className="sign-up" />
          <label for="tab-2" className="tab">
            Kayıt ol
          </label>
          <div className="login-form">
            <div className="sign-in-htm">
              <div className="group">
                <label for="user" className="label">
                  Kullanıcı Adı
                </label>
                <input id="user" type="text" className="input" />
              </div>
              <div className="group">
                <label for="pass" className="label">
                  Şifre
                </label>
                <input
                  id="pass"
                  type="password"
                  className="input"
                  data-type="password"
                />
              </div>
              <div className="group">
                <input id="check" type="checkbox" className="check" />
                <label for="check">
                  <span className="icon"></span> Beni hatırla
                </label>
              </div>
              <div className="group">
                <input type="submit" className="button" value="Sign In" />
              </div>
              <div className="hr"></div>
              <div className="foot-lnk">
                <a href="#forgot">Şifremi unuttum</a>
              </div>
            </div>
            <div className="sign-up-htm">
              <div className="group">
                <p className="yazı">Neden üye olmalıyım</p>
                <ul className="liste">
                  <li>Fiyat alarmı kur ve değişimlerden haberdar ol</li>
                  <li>Favori listelerini oluştur</li>
                  <li>Oluşturduğun listeleri paylaş</li>
                </ul>
              </div>
              <div className="group">
                <label for="user" className="label">
                  Kullanıcı Adı
                </label>
                <input id="user" type="text" className="input" />
              </div>
              <div className="group">
                <label for="pass" className="label">
                  e-posta
                </label>
                <input id="pass" type="text" className="input" />
              </div>
              <div className="group">
                <label for="pass" className="label">
                  Şifre
                </label>
                <input
                  id="pass"
                  type="password"
                  className="input"
                  data-type="password"
                />
              </div>
              <div className="group">
                <label for="pass" className="label">
                  Tekrar şifre
                </label>
                <input
                  id="pass"
                  type="password"
                  className="input"
                  data-type="password"
                />
              </div>

              <div className="group">
                <input type="submit" className="button" value="Sign Up" />
              </div>
              <div className="hr"></div>
              <div className="foot-lnk">
                <label for="tab-1">Zaten üye misiniz ?</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
