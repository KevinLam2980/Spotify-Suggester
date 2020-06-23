import axios from 'axios'



axios.get('')
.thenr(res =>{
    console.log(res)
    dispatch({payload: res})
})