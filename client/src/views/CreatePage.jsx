import React, { useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'
import CreateForm from '../components/CreateForm'

const CreatePage = () => {


    return (
        <div>
            <CreateForm />
        </div>
    )
}

export default CreatePage