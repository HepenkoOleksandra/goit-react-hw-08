import { useDispatch, useSelector } from "react-redux"
import { selectUserName } from "../../redux/auth/selectors"
import { apiLogout } from "../../redux/auth/operations";

const UserMenu = () => {
    const dispatch = useDispatch();
    const userName = useSelector(selectUserName);

    const hendleLogout = () => {
        dispatch(apiLogout());
    }

  return (
      <div>
          <p>Hello {userName}</p>
          <button type="button" onClick={hendleLogout}>Logout</button>
    </div>
  )
}

export default UserMenu