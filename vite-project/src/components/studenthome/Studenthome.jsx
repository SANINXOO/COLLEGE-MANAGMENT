import axios from 'axios';
import  { React,useEffect, useState } from 'react'

import './studenthome.css'

const Studenthome = () => {
  

    const [student,setStudent]=useState({})

    const FullData = async () => {
      try { 
        // const key = localStorage.key(0);
        const value = JSON.parse(localStorage.getItem('stud_token'));
        // console.log('dstud token',value);
         const res = await axios.get("http://localhost:3004/authentication/getdetsilsloginedstudent",{headers: {Authorization: `Bearer ${value}` },});
         console.log(res);
        setStudent(res.data.task);
        console.log(res.data);
        console.log(res.data.task.name);
      } catch (error) {
        console.log('Error fetching data:', error); 
      }
    };
    
  
    useEffect(() => {
      FullData();
    }, []);
  



  return (
    <div>
                   <div className="container3">
	<div className="screen3">
		<div className="screen__content2">
        <div className='head3'> Student Details</div>
			<form className="login2" >

           
            <div className='stdhome'>
                <div className='stdhomeleft'>
                     <div><img src={student.photo} alt="" /></div>

                </div>
                <div className='stdhomeright'>
                <div className='login5sub'>
                <div className="login__field6">
                   <div><label htmlFor="" className="label2">Student ID</label></div>
					<div><input type="text" className="login__input8"   name='studentid'   value={student.studentid}    /></div>
				</div>
               
               
               
            </div>
               <div className='login5sub'>
                <div className="login__field6">
                <div><label htmlFor="" className="label2">Full Name</label></div>
					<div><input type="text" className="login__input8"  value={student.name}  name='name'     /></div>
				</div>
                </div>
                <div className='login5sub'>
                <div className="login__field6">
                <div><label htmlFor="" className="label2">Phone</label></div>
					<div><input type="text" className="login__input8"  name='phone'  value={student.phone}    /></div>
				</div>
                </div>
                <div className='login5sub'>
                <div className="login__field6">
                   <div><label htmlFor="" className="label2">E-mail</label></div>
					<div><input type="text" className="login__input8"  name='email'  value={student.email}   /></div>
				</div>
                </div>






                </div>
                
            </div>


           

            <div className="login5sub">
            <div className="login__field6">
            <div><label htmlFor="" className="label2">Address</label></div>
                <div><textarea className='textarea2' name="address"  value={student.address}  id=""  ></textarea></div>
					
					
			</div>
            </div>
            <div className='login5sub'>
                <div className="login__field6">
                   <div><label htmlFor="" className="label2">Date Of Birth</label></div>
					<div><input type="date" className="login__input8"  name='dob'    value={student.dob}   /></div>
				</div>
                <div className="login__field6">
                <div><label htmlFor="" className="label2">Course</label></div>
                <div><input type="text" className="login__input8"  name='dob'    value={student.course}   /></div>
             
				</div>
               
               
            </div>
            <div className='login5sub'>
                <div className="login__field6">
					<div><label htmlFor="" className="label2">Batch</label></div>
					<div><input type="text" className="login__input8"  name='batch'   value={student.batch}  /></div>
					
				</div>
                <div className="login__field6">
                <div><label htmlFor="" className="label2">Sem</label></div>
					<div><input type="text" className="login__input8"  name='sem'   value={student.sem} /></div>
				</div>
                <div className="login__field6">
                <div><label htmlFor="" className="label2">Attendence</label></div>
					<div><input type="text" className="login__input8"  name='attandance'   value={student.attandance}  /></div>
				</div>
            </div>
            <div className='head5'>Internal Marks</div>
            <div className='login5sub'>
                <div className="login__field6">
					<div><label htmlFor="" className="label2">Chemistry</label></div>
					<div><input type="text" className="login__input8"  name='internalChe' value={student?.internal?.internalChe}   /></div>
					
				</div>
                <div className="login__field6">
                <div><label htmlFor="" className="label2">Physics</label></div>
					<div><input type="text" className="login__input8"  name='internalPhy'  value={student?.internal?.internalPhy}  /></div>
				</div>
                <div className="login__field6">
                <div><label htmlFor="" className="label2">Maths</label></div>
					<div><input type="text" className="login__input8"  name='internalMath'  value={student?.internal?.internalMath}  /></div>
				</div>
            </div>
            <div className='head5'>Test Score</div>
            <div className='login5sub'>
                <div className="login__field6">
					<div><label htmlFor="" className="label2">Chemistry</label></div>
					<div><input type="text" className="login__input8"  name='testChe'  value={student?.test?.testChe}   /></div>
					
				</div>
                <div className="login__field6">
                <div><label htmlFor="" className="label2">Physics</label></div>
					<div><input type="text" className="login__input8"  name='testPhy'  value={student?.test?.testPhy}   /></div>
				</div>
                <div className="login__field6">
                <div><label htmlFor="" className="label2">Maths</label></div>
					<div><input type="text" className="login__input8"  name='testMath' value={student?.test?.testMath}  /></div>
				</div>
            </div>
            <div className="login5sub">
            <div className="login__field6">
            {/* <div className="stdimg"></div>
                <div className=" stdimg2">    <input className='textarea' type="file" name="photo" id=""     /></div> */}
					
					
			</div>
            </div>

          


				


				
								
			</form>
			
		</div>
			
	</div>
</div>
    </div>
  )
}

export default Studenthome
