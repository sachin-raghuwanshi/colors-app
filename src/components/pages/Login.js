import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router"
const Login = ({setisloggedin}) => {
    const location=useLocation()
    const initialvalues = { email: "", password: "" ,check:false}
    const [formvalues, setformvalues] = useState(initialvalues)
    const data={
        'name':'successfully logged  in '
    }
    
    const navigate=useNavigate()

    const handleChange = (e) => {
        
        const { name, value ,checked} = e.target
        if(e.target.type==='text')
        setformvalues({ ...formvalues, [name]: value })
        else
        setformvalues({ ...formvalues, [name]: checked })
        

    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formvalues.email,formvalues.password);
        setisloggedin(true);
        navigate("/",{state:data})
        
      
    }
    return (
        <div>
            <p>{location.state?location.state.name:''}</p>
            <form onSubmit={handleSubmit}>
                <div>
                    <h3>Fill your account Details:</h3>
                </div>

                <div>
                    <label >
                        College Email Id
                        <input
                            type="text"
                            name="email"
                            value={formvalues.email}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <div>
                    <label >
                        Password
                        <input
                            type="text"
                            name="password"
                            value={formvalues.password}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Confirm Password

                        <input
                            type="text"
                            name="password"
                            value={formvalues.password}
                            onChange={handleChange}
                        />

                    </label>
                </div>
                <div>
                    <label>

                        <input
                            type="checkbox"
                            name="check"
                            value={formvalues.check}
                            onChange={handleChange}
                        />
                        Remember me

                    </label>
                </div>
                <div>
                    <button >Submit</button>
                </div>
                
            </form>
            
        </div>
    );
}

export default Login;