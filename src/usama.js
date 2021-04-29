// import React from 'react'
// import { connect } from 'react-redux'
// import { setname } from './store/action/usamaaction'
// import { setage } from './store/action/usamaaction'

// const usama = (props) => {
//     const name="usama"
//     const age="20"
//     return (
//         <div>
//             <p>my profile</p>
//             <p>
//                 my name is {props.myname}
//             </p>
//             <p>
//                 my age is {props.myage}
//             </p>
//             <button onClick={()=>props.setnames(name)}>setname</button>
//             <button onClick={()=>props.setage(age)}>setage</button>
//         </div>
//     )
// }
// const mapStateToProps = (state) => ({
//     myname: state.usama.myname,
//     myage: state.usama.myage,
   
//   })
//   const mapDispatchToProps = (dispatch) => ({
//     setnames: (name) => dispatch(setname(name)),
  
//     setage: (age) => dispatch(setage(age)),
  
//   })
//   export default connect(mapStateToProps, mapDispatchToProps)(usama);
// now using hook redux
import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { setname } from './store/action/usamaaction'
import { setage } from './store/action/usamaaction'

const Usama = (props) => {
    const myname=useSelector((state)=>{
return state.usama.myname
    })
    const myage=useSelector((state)=>{
        return state.usama.myage
            })
          const dispatch=useDispatch();
    const name="usama"
    const age="20"
    return (
        <div>
            <p>my profile</p>
            <p>
                my name is {myname}
            </p>
            <p>
                my age is {myage}
            </p>
            <button onClick={()=>dispatch(setname(name))}>setname</button>
            <button onClick={()=>dispatch(setage(age))}>setage</button>
        </div>
    )
}

 
  export default Usama;
