import axios from 'axios'

export default function getStudents(){
    return(
        axios.create({
            baseURL: 'https://siwes-db.vercel.app/api/students/',
            headers: {
                'Content-type': 'application/json',
                 Accept: 'application/json'
            }
        })
    )
}