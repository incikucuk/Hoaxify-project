import { useState } from "react";
import axios from "axios";
import { signUp } from "./api";

export function SignUp() {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordRepeat, setPasswordRepeat] = useState();
  const [apiProgress, setApiProgress] = useState(false);
  const [successMessage, setSuccessMessage] = useState();

  const onSubmit = async (event) => {
    event.preventDefault();
    setSuccessMessage();
    setApiProgress(true);

    // try {
    //   const response = await signUp({
    //     username,
    //     email,
    //     password,
    //   }).setSuccessMessage(response.data.messsage);
    // } catch {
    // } finally {
    //   setApiProgress(false);
    // }

    await signUp({
      username,
      email,
      password,
    })
      .then((response) => {
        setSuccessMessage(response.data.messsage);
      })
      .finally(() => setApiProgress(false));
  };

  return (
    <div className="container">
      <div className="col-lg-6 offset-lg-3 col-sm-8 offset-sm-2">
        <form className="card" onSubmit={onSubmit}>
          <div className="text-center card-header">
            <h1>Sign Up</h1>
          </div>
          <div className="card-body">
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                Username:
              </label>
              <input
                id="username"
                className="form-control"
                onChange={(event) => setUsername(event.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email:
              </label>
              <input
                id="email"
                className="form-control"
                onChange={(event) => setEmail(event.target.value)}
              ></input>
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password:
              </label>
              <input
                id="password"
                className="form-control"
                type="password"
                onChange={(event) => setPassword(event.target.value)}
              ></input>
            </div>
            <div className="mb-3">
              <label htmlFor="passwordRepeat" className="form-label">
                Password Repeat:
              </label>
              <input
                id="passwordRepeat"
                className="form-control"
                type="password"
                onChange={(event) => setPasswordRepeat(event.target.value)}
              />
            </div>
            {successMessage && (
              <div className="alert alert-success" role="alert">
                {successMessage}
              </div>
            )}

            <div className="text-center">
              <button
                className="btn btn-primary"
                disabled={
                  apiProgress || !password || password !== passwordRepeat
                }
              >
                {apiProgress && (
                  <span
                    className="spinner-border spinner-border-sm"
                    aria-hidden="true"
                  ></span>
                )}
                Sign Up
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

// return (
//   <div className="container">
//     <div className="col-lg-6 offset-lg-3 col-sm-8 offset-sm-2">
//       <form className="card" onClick={onSubmit}>
//         <div className="text-center card-header">
//           <h1>Sign Up</h1>
//         </div>
//         <div className="card-body">
//           <div className="mb-3">
//             <label htmlFor="username" className="form-label">
//               Username:
//             </label>
//             <input
//               id="username"
//               className="form-control"
//               onChange={(event) => setUsername(event.target.value)}
//             />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="email" className="form-label">
//               Email:
//             </label>
//             <input
//               id="email"
//               className="form-control"
//               onChange={(event) => setEmail(event.target.value)}
//             ></input>
//           </div>
//           <div className="mb-3">
//             <label htmlFor="password" className="form-label">
//               Password:
//             </label>
//             <input
//               id="password"
//               className="form-control"
//               type="password"
//               onChange={(event) => setPassword(event.target.value)}
//             ></input>
//           </div>
//           <div className="mb-3">
//             <label htmlFor="passwordRepeat" className="form-label">
//               Password Repeat:
//             </label>
//             <input
//               id="passwordRepeat"
//               className="form-control"
//               type="password"
//               onChange={(event) => setPasswordRepeat(event.target.value)}
//             ></input>
//           </div>
//           <div className="text-center">
//             <button
//               className="btn btn-primary"
//               disabled={!password || password != passwordRepeat}
//             >
//               Sign Up
//             </button>
//           </div>
//         </div>
//       </form>
//     </div>
//   </div>
// );
