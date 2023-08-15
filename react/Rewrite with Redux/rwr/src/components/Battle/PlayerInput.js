import {memo} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setTempUserName} from "../redux/battle/battle.actions";

const PlayerInput = memo(({id, label, onSubmit}) => {
    const dispatch = useDispatch();
    const userName = useSelector((state) => state.battle[`${id}Name`])

  const SubmitHandler = (event) => {
    event.preventDefault()
      onSubmit(id, userName)
  }

    const handleInputChange = (event) => {
        const newUserName = event.target.value;
        dispatch(setTempUserName(id, newUserName));
    };

  return (
      <form className='column' onSubmit={SubmitHandler}>
          <label className='header' htmlFor="userName">{label}</label>
          <input
              type="text"
              id='userName'
              placeholder='GitHub UserName'
              autoComplete='off'
              value={userName}
              onChange={handleInputChange}
          />
          <button
              style={{cursor: "pointer"}}
              type='submit'
              className='button'
              disabled={!userName.length}
          >Submit
          </button>
      </form>
  )
})

export default PlayerInput;