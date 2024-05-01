import { useDispatch, useSelector } from "react-redux"
import { selectUserEmail, selectUserName } from "../../redux/auth/selectors"
import { apiLogout } from "../../redux/auth/operations";
import css from "./UserMenu.module.css"

const UserMenu = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  const userEmail = useSelector(selectUserEmail);

    const hendleLogout = () => {
        dispatch(apiLogout());
    }

  return (
    <div className={css.userMenuContainer}>
      <div className={css.user}>
        <p>Hello, {userName}</p>
        <p>{userEmail}</p>
      </div>
      <button type="button" onClick={hendleLogout} className={css.button}>Logout</button>
    </div>
  )
}

export default UserMenu