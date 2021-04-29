




// THIS USE FOR PROPERTIES & FOR GETTING  GLOBAL STATE's PROPERTIES


// THIS USE FOR FUNCTIONS & FOR UPDATING GLOBAL STATE's PROPERTIES



// export default connect(mapStateToProps,mapDispatchToProps)(App)
// export default connect(mapStateToProps, mapDispatchToProps)(App)
import React from 'react'
import { connect } from 'react-redux'
import { set_name } from './store/action'
import { set_school } from './store/action'
import { set_job } from './store/action'
import Usama from './usama'
const App = (props) => {
  var newname = 'birat';
  var newschool = 'iba'
  var newjob = ['upwork', 'fiverr', 'software house']
  console.log('REDUX >>> ', props)
  return (
    <div>
        <h1>Hello World</h1>
        <br />
        <button onClick={() => props.set_name(newname)}>Set Name</button>
        <button onClick={() => props.set_school(newschool)}>Set School</button>
        <button onClick={() => props.set_job(newjob)}>Set Job</button>
        <p>{props.app_name}</p>
        <p>{props.app_code}</p>
        <Usama/>
    </div>
  )
}
const mapStateToProps = (state) => ({
  app_name: state.app.app_name,
  app_code: state.app.app_code,
  user_school: state.auth.user_school,
  user_name: state.auth.user_name,
  user_job: state.auth.user_job,
  email: 'aaa@gmail.com',
})
const mapDispatchToProps = (dispatch) => ({
  set_name: (name) => dispatch(set_name(name)),
  set_school: (school) => dispatch(set_school(school)),
  set_job: (job) => dispatch(set_job(job)),

})
export default connect(mapStateToProps, mapDispatchToProps)(App);
