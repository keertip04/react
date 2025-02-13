import React from 'react';

export default function carscreate(){
    const [car, setcar] = useState({ID:'',Number:'',Model:'',Type:''});
    const navigate = useNavigate();
    textchange = event => {
        const updateableCar = {...car};
        updatableCar[event.target.id]= event.target.value;
        setcar(updatableCar);
    };
    const createCar = async () => {
        const baseUrl = "http://localhost:8080"
        try{
            const response = await axios.post('${baseUrl}/cars',{...car})
            const createdCar = response.data.createdCar;
            setcar(createdCar);
            alert(response.data.message)
            navigate('/cars/list')
        } catch(error){
            alert('server error');
        }
    };
    return (
  <div className="container">  
  <div class="mb-3">
     <label for="exampleFormControlInput1" class="form-label">Email address</label>
     <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="enter number" />
  </div>
  <div class="mb-3">
     <label for="exampleFormControlInput1" class="form-label">Email address</label>
     <input type="model" class="form-control" id="exampleFormControlInput1" placeholder="enter model" />
  </div>
  <div class="mb-3">
     <label for="exampleFormControlInput1" class="form-label">Email address</label>
     <input type="type" class="form-control" id="exampleFormControlInput1" placeholder="enter type" />
  </div>
  </div> 
    );
}