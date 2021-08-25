import '../../styles/Signin.css'
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux';

function Signin(){
  const userSignin = useSelector(state=>state.userSignin);
  const {userInfo} = userSignin;
  return(
    <>
    {
      userInfo ? <Link to="/profile" className="signin__nav">{userInfo.name}</Link>
      :
      <Link to="/signin" className="signin__nav">SignIn</Link>
    }

    </>

  )
}
export default Signin
