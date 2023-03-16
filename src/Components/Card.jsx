import React, { useState, useEffect } from 'react';
import Spinner from './Spinner';

const Card = () => {
  const [data, setData] = useState([]);
  const [loader , setloader] = useState(true)

  useEffect(() => {
    setloader(true)
    const fetchData = async () => {
      const response = await fetch('https://kontests.net/api/v1/all');
      const json = await response.json();
      setData(json);
      // console.log(json);
    };
    fetchData();
    setloader(false)
  }, []);

  

  return (
    <>
    {
      loader? (
        <Spinner/>
      ):(
        <div>
        <h2 className='heading'>Coding Competition</h2>
      <div className='d-flex flex-wrap justify-content-center gap-3'> 
    {data.map((item , index)=> (
     
 <div className="card d-flex " style={{width: '18rem'}} key={index}>
  <div className="card-body ">
<img src="" className="card-img-top" alt={item.title} />
    <h5 className="card-title">Name:-{item.name}</h5>
    <h6 className="card-text">Start Time:- {item.start_time}</h6>
    <h6 className="card-text">End Time:- {item.end_time}</h6>
    <h6 className="card-text">Site:- {item.site}</h6>
    <h6 className="card-text">In 24 Hours:- {item.in_24_hours}</h6>
    <h6 className="card-text">Status:- {item.status}</h6>
    <a href={item.url} target="_blank" className="btn btn-primary btn-sm">Visit site</a>
  </div>
</div>
        ))}
</div>
        </div>
      )
    }

      
     
</>
  );
};

export default Card;


