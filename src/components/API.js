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

export function getSiwesDetails(){
    return(
        axios.create({
            baseURL: 'https://siwes-db.vercel.app/api/studentviews/',
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
            baseURL: 'https://siwes-db.vercel.app/api/locations/',
            headers: {
                'Content-type': 'application/json',
                 Accept: 'application/json'
            }
        })
    )
}

export function getFaculties(){
    return(
        axios.create({
            baseURL: 'https://siwes-db.vercel.app/api/faculties/',
            headers: {
                'Content-type': 'application/json',
                Accept: 'application/json'
            }
        })
    )
    
}

export function getDepartments(){
    return(
        axios.create({
            baseURL: 'https://siwes-db.vercel.app/api/departments/',
            headers: {
                'Content-type': 'application/json',
                Accept: 'application/json'
            }
        })
    )
} 

export function getDisciplines(){
    return(
        axios.create({
            baseURL: 'https://siwes-db.vercel.app/api/disciplines/',
            headers: {
                'Content-type': 'application/json',
                Accept: 'application/json'
            }
        })
    )
}