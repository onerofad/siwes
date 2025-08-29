import axios from 'axios'

export default function getStudents(){
    return(
        axios.create({
            baseURL: 'http://localhost:8000/api/students/',
            headers: {
                'Content-type': 'application/json',
                 Accept: 'application/json'
            }
        })
    )
}

export function getSiwesDetails(){
    return(
        axios.create({
            baseURL: 'http://localhost:8000/api/studentviews/',
            headers: {
                'Content-type': 'application/json',
                 Accept: 'application/json'
            }
        })
    )
}

export function getLocationDetails(){
    return(
        axios.create({
            baseURL: 'http://localhost:8000/api/locations/',
            headers: {
                'Content-type': 'application/json',
                 Accept: 'application/json'
            }
        })
    )
}
