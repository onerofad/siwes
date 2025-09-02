import { useCallback, useEffect, useReducer, useRef, useState } from "react"
import { useGetStudentsQuery } from "../../features/api/apiSlice"
import _, { size } from 'lodash'
import { Button, Icon, Modal, Search, Table } from "semantic-ui-react"

const initialState = {
  loading: false,
  results: [],
  value: '',
  open: false,
  size: undefined
}

function StudentReducer(state, action) {
  switch (action.type) {
    case 'CLEAN_QUERY':
      return initialState
    case 'START_SEARCH':
      return { ...state, loading: true, value: action.query }
    case 'FINISH_SEARCH':
      return { ...state, loading: false, results: action.results }
    case 'UPDATE_SELECTION':
      return { ...state, value: action.selection }
    case 'open':
      return{...state, open: true, size: action.size}
    case 'close':
        return{...state, open:false}

    default:
      throw new Error()
  }
}

const SearchStudent = () => {

    const {data: students, isSuccess, refetch} = useGetStudentsQuery()

    const [state, dispatch] = useReducer(StudentReducer, initialState)
    const { loading, results, value, open, size } = state

    const timeoutRef = useRef()
    const handleSearchChange = useCallback((e, data) => {
    clearTimeout(timeoutRef.current)
    dispatch({ type: 'START_SEARCH', query: data.value })

     timeoutRef.current = setTimeout(() => {
      if (data.value.length === 0) {
        dispatch({ type: 'CLEAN_QUERY' })
        return
      }

      const re = new RegExp(_.escapeRegExp(data.value), 'i')
      const isMatch = (result) => re.test(result.matricno)

      dispatch({
        type: 'FINISH_SEARCH',
        results: _.filter(students, isMatch),
      })
    }, 300)
    refetch()
  }, [])

   useEffect(() => {
    return () => {
      clearTimeout(timeoutRef.current)
    }
  }, [])

  const [id, setId] = useState()
  const openModal = (id) => {
    setId(id)
    dispatch({type: 'open', size: 'large'})
  }


  return(
    <>
     <Search
          loading={loading}
          placeholder='Search...'
          onResultSelect={(e, data) =>{
            dispatch({ 
                type: 'UPDATE_SELECTION', 
                selection: data.result.matricno 
            })
            openModal(data.result.id)
          }
           
        }
          onSearchChange={handleSearchChange}
          results={results}
          value={value}
        />
        <Modal
            open={open}
            size={size}
            
        >
            <Modal.Header>
                View Student
                <Icon style={{float: 'right'}} name="close" link onClick={() => dispatch({type: 'close'})} />
            </Modal.Header>
            <Modal.Content>
               <Table celled basic>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell>
                      First Name
                    </Table.HeaderCell>
                    <Table.HeaderCell>
                      Middle Name
                    </Table.HeaderCell>
                    <Table.HeaderCell>
                      Last Name
                    </Table.HeaderCell>
                    <Table.HeaderCell>
                      Matric No
                    </Table.HeaderCell>
                     <Table.HeaderCell>
                      Programme
                    </Table.HeaderCell>
                     <Table.HeaderCell>
                      Faculty
                    </Table.HeaderCell>
                     <Table.HeaderCell>
                      Department
                    </Table.HeaderCell>
                     <Table.HeaderCell>
                      Level
                    </Table.HeaderCell>
                    <Table.HeaderCell>
                      Action
                    </Table.HeaderCell>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  {
                    isSuccess ? 
                    students.map(m => {
                      if(m.id === id){
                        return(
                          <Table.Row>
                            <Table.Cell>{m.firstname}</Table.Cell>
                            <Table.Cell>{m.middlename}</Table.Cell>
                            <Table.Cell>{m.lastname}</Table.Cell>
                            <Table.Cell>{m.matricno}</Table.Cell>
                            <Table.Cell>{m.programme}</Table.Cell>
                            <Table.Cell>{m.faculty}</Table.Cell>
                            <Table.Cell>{m.department}</Table.Cell>
                            <Table.Cell>{m.level}</Table.Cell>
                            <Table.Cell>
                              <Button icon positive size="mini">
                                <Icon name="edit" />
                              </Button>
                              <Button icon negative size="mini">
                                <Icon name="trash" />
                              </Button>
                            </Table.Cell>

                          </Table.Row>
                        )
                      }
                    }) : '' }
                  
                </Table.Body>
                </Table>
              
            </Modal.Content>
        </Modal>
        </>
  )

}
export default SearchStudent