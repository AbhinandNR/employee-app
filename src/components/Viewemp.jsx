import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Empnav from './Empnav'

const Viewemp = () => {

    const [employeedata, setemployeeData] = useState(

        {
            "status": "",
            "data": []
        }
    )

    const fetchdatafrom = () => {
        axios.get("https://dummy.restapiexample.com/api/v1/employees").then(
            (response) => {
                setemployeeData(response.data)
            }
        ).catch()
    }

    useEffect(() => { fetchdatafrom() }, [])
    return (
        <div>
            <Empnav/>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <div className="row g-3">

                            {employeedata.data.map(
                                (value, index) => {
                                    return (

                                        <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                            <div class="card" >
                                                <img src={value.profile_image} class="card-img-top" alt="..." />
                                                <div class="card-body">
                                                    <h5 class="card-title">{value.employee_name}</h5>
                                                    <p class="card-text">{value.employee_salary}</p>
                                                    <br />
                                                    <p class="card-text">{value.employee_image}</p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            )
                            }



                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Viewemp