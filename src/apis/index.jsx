import axios from 'axios'
import { API_ROOT } from '../utils/constant'

export const fetchStudentScoreDetailsAPI = async (studentId) => {
  const response = await axios.get(`http://localhost:3000/students/score/${studentId}`)
  console.log('res ', response.data)
  return response.data
}

export const fetchTopGroupAStudentsAPI = async () => {
  const response = await axios.get('http://localhost:3000/students/report/topScores') 
  console.log('res ', response.data)
  return response.data
}

export const fetchScoreLevelsReportAPI = async () => {
  const response = await axios.get('http://localhost:3000/students/report/levels') 
  console.log('res ', response.data)
  return response.data
}