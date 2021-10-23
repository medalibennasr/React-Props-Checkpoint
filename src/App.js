
import './App.css';
import CardStudents from './Components/CardStudents';
import NavBar from './Components/NavBar';


function App() {

  const Users = [
    {
      id: '01',
      name: 'Elone Musk',
      email: 'elon@gmail.com',
      phone: '202-555-0163', 
      photo:"https://upload.wikimedia.org/wikipedia/commons/e/ed/Elon_Musk_Royal_Society.jpg"
    },
    {
      id: '02',
      name: 'Brad Pitt',
      email: 'brad@gmail.com',
      phone: '202-555-0106',
      photo:"https://fr.web.img6.acsta.net/c_310_420/pictures/20/02/10/10/37/1374948.jpg"
      

    },
    {
      id: '02',
      name: 'Med Ali Ben Nasr',
      email: 'medali.bnasr@gmail.com',
      phone: '202-555-0106',
      photo:"https://th.bing.com/th/id/R.1036645da936bf1b12c3b02847288626?rik=RFkOG8DT%2b8KdXg&pid=ImgRaw&r=0"
    },
  ];
  return (
    <>
    <div>
    <NavBar/>
    </div>
    <div className="cardStudentDiplay" style={{paddingTop:"50px"}} >
    {Users.map((data) => (
        <div key={data.id}  >
          <div style={{paddingLeft:"20px" }} > 
          <CardStudents data={data} />
          </div>
        </div>
      ))}
    </div>
    

    </>

  );
}

export default App;
