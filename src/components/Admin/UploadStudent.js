import * as XLSX from 'xlsx'
import React, { useState } from 'react'
import { Form, Button, Message } from 'semantic-ui-react'
import getStudents from '../API'

const UploadStudent = () => {

    const [msg, setMsg] = useState('')

    const [data, setData] = useState([])

    const [file, setFile] = useState(null)

    const [fileError, setfileError] = useState(false)

    const [showMsg, setshowMsg] = useState(false)

    const [loading, setLoading] = useState(false)

    const handleFile = (e) => {
        const file = e.target.files[0]
        setFile(file)
        const reader = new FileReader()

        reader.onload = (event) => {
        const workbook = XLSX.read(event.target.result, { type: 'binary' });
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        const sheetData = XLSX.utils.sheet_to_json(sheet);

        setData(sheetData);
    };

        reader.readAsBinaryString(file);
    }

    let content = []
    const upload = () => {
        if(file === null){
            setfileError({content: 'Upload file is required'})
        }else{
            data.map((m) => {
                let title = m.matricNumber
                let surname = m.surname
                let othernames = m.otherNames
                let matricno = m.matricNumber
                let birthdate = m.BirthDate
                let programme = m.Programme
                let faculty = m.Faculty
                let department = m.Department
                let discipline = m.Discipline
                let level = m.Level
                let gender = m.Gender
                let phoneno = m.Phoneno
                let email = m.Email
                let picture = m.Picture
                let session = m.Session
           
                let item = { title,
                surname, 
                othernames, 
                matricno,
                birthdate, 
                programme,
                faculty,
                department, 
                discipline,
                level,
                gender,
                phoneno,
                email,
                picture,
                session}
                getStudents().post('/', item)
                setshowMsg(!showMsg)
            })
        }
    }

    return(
        <>
        {
            showMsg ? 
                <Message positive>
                    <Message.Content>
                        Upload was successfull
                    </Message.Content>
                </Message> : ''
        }
       
        <Form>
            <Form.Field>
                <Form.Input
                    placeholder='Upload File'
                    type='file'
                    onChange={handleFile}
                    error={fileError}
                    onClick = {() => setfileError(false)}
                />
            </Form.Field>
            <Form.Field>
                <Button loading={loading} onClick={upload} color='green' size='large'>
                    Upload
                </Button>
            </Form.Field>
        </Form>
        {/*{data && (
            <div>
            <h2>Imported Data:</h2>
            <pre>{JSON.stringify(data, null, 2)}</pre>
            </div>
            )}*/}
        </>
    )
}

export default UploadStudent