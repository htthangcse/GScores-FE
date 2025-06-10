import axios from 'axios'
// const API_ROOT = 'http://localhost:8017'
import { API_ROOT } from '../utils/constant'

console.log('API_ROOT', API_ROOT)

export const fetchStudentScoreDetailsAPI = async (studentId) => {
  const response = await axios.get(`${API_ROOT}/students/score/${studentId}`)
  console.log('res ', response.data)
  return response.data
}

export const fetchTopGroupAStudentsAPI = async () => {
  const response = await axios.get(`${API_ROOT}/students/report/topScores`) 
  console.log('res ', response.data)
  return response.data
}

export const fetchScoreLevelsReportAPI = async () => {
  const response = await axios.get(`${API_ROOT}/students/report/levels`) 
  console.log('res ', response.data)
  return response.data
}