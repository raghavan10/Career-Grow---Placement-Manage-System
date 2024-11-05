import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, TextField } from '@mui/material'; // Import MUI components
import PersonIcon from './assets/person.svg'
import Navbar from './NavBar';
import Footer from './Footer';
const CollegeDashboard = () => {
  const [students, setStudents] = useState([]);
  const [placements, setPlacements] = useState([]);
  
  const [isStudentDialogOpen, setIsStudentDialogOpen] = useState(false);
  const [isPlacementDialogOpen, setIsPlacementDialogOpen] = useState(false);

  const [currentStudent, setCurrentStudent] = useState(null); // To handle student for add/update
  const [currentPlacement, setCurrentPlacement] = useState(null); // To handle placement for add/update

  const BASE_URL = 'http://localhost:8081';

  // Fetch all students
  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/students`);
        setStudents(response.data);
      } catch (error) {
        console.error('Error fetching students:', error);
      }
    };
    fetchStudents();
  }, [students]);

  // Fetch all placements
  useEffect(() => {
    const fetchPlacements = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/placements`);
        setPlacements(response.data);
      } catch (error) {
        console.error('Error fetching placements:', error);
      }
    };
    fetchPlacements();
  }, [placements]);

  // Function to handle adding a student
  const handleAddStudent = async () => {
    try {
      if (!currentStudent.update) { // Add new student
        console.log("s data :"+ currentStudent);
        const response = await axios.post(`${BASE_URL}/proxystudents`, currentStudent);
        
        alert('Awaiting admin approval for the new student...');
        setStudents([...students, response.data]);
      } else { // Update existing student
        console.log("s update data :"+ JSON.stringify(currentStudent));

        const response = await axios.post(`${BASE_URL}/proxystudents`, currentStudent);
        alert('Awaiting admin approval for the updated student...');
        setStudents(students.map(student => student.id === currentStudent.id ? response.data : student));
      }
      setIsStudentDialogOpen(false);
      resetCurrentStudent();
    } catch (error) {
      console.error('Error adding/updating student:', error);
    }
  };

  // Function to handle adding a placement
  const handleAddPlacement = async () => {
    try {
      if (!currentPlacement.update) { // Add new placement
        const response = await axios.post(`${BASE_URL}/proxyplacements`, currentPlacement);
        alert('Awaiting admin approval for the new placement...');
        setPlacements([...placements, response.data]);
      } else { // Update existing placement
        const response = await axios.post(`${BASE_URL}/proxyplacements`, currentPlacement);
        alert('Awaiting admin approval for the updated placement...');
        setPlacements(placements.map(placement => placement.id === currentPlacement.id ? response.data : placement));
      }
      setIsPlacementDialogOpen(false);
      resetCurrentPlacement();
    } catch (error) {
      console.error('Error adding/updating placement:', error);
    }
  };

  // Function to delete a student
  const handleDeleteStudent = async (studentId) => {
    try {
      await axios.delete(`${BASE_URL}/students/${studentId}`);
      setStudents(students.filter(student => student.id !== studentId));
    } catch (error) {
      console.error('Error deleting student:', error);
    }
  };

  // Function to delete a placement
  const handleDeletePlacement = async (placementId) => {
    try {
      await axios.delete(`${BASE_URL}/placements/${placementId}`);
      setPlacements(placements.filter(placement => placement.id !== placementId));
    } catch (error) {
      console.error('Error deleting placement:', error);
    }
  };

  // Open the student dialog with data for updating
  const openStudentDialog = (student = null) => {
    if (student) {
      setCurrentStudent({ ...student, update: true });
    } else {
      resetCurrentStudent(); // For adding a new student
    }
    setIsStudentDialogOpen(true);
  };

  // Open the placement dialog with data for updating
  const openPlacementDialog = (placement = null) => {
    if (placement) {
      setCurrentPlacement({ ...placement, update: true });
    } else {
      resetCurrentPlacement(); // For adding a new placement
    }
    setIsPlacementDialogOpen(true);
  };

  // Reset student dialog state for adding a new student
  const resetCurrentStudent = () => {
    setCurrentStudent({
      id: '',
      name: '',
      college: '',
      rollno: '',
      qualification: '',
      course: '',
      year: '',
      certificate: '',
      hallticketno: '',
      certificate_Id: '',
      college_id: '',
      update: false
    });
  };

  // Reset placement dialog state for adding a new placement
  const resetCurrentPlacement = () => {
    setCurrentPlacement({
      id: '',
      name: '',
      college: '',
      date: '',
      qualification: '',
      year: '',
      stud_id: '',
      com_id: '',
      jd: '',
      lpa: '',
      update: false
    });
  };

const [selectedStudent, setSelectedStudent] = useState(null);
const [isStudentDetailDialogOpen, setIsStudentDetailDialogOpen] = useState(false);


  const handleViewStudentDetails = async (studentId) => {
    try {
      const response = await axios.get(`${BASE_URL}/students/${studentId}`);
      setSelectedStudent(response.data);
      setIsStudentDetailDialogOpen(true);
    } catch (error) {
      console.error('Error fetching student details:', error);
    }
  };

const [selectedPlacement, setSelectedPlacement] = useState(null);
const [isPlacementDetailDialogOpen, setIsPlacementDetailDialogOpen] = useState(false);


  const handleViewPlacementDetails = async (placementId) => {
    try {
      const response = await axios.get(`${BASE_URL}/placements/${placementId}`);
      setSelectedPlacement(response.data);
      setIsPlacementDetailDialogOpen(true);
    } catch (error) {
      console.error('Error fetching placement details:', error);
    }
  };
  
  

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className='p-8'>
      <h2 className="text-3xl font-bold mb-8 text-center py-8">College Dashboard</h2>

      {/* Students Section */}
      <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-4">Students</h3>
        <ul className="space-y-4">
          {students.map(student => (
            <li key={student.id} className="p-4 bg-white shadow rounded-md flex justify-between items-center">
  <div className="flex items-center">
    <img src={PersonIcon} alt="Person Icon" className="w-6 h-6 mr-2" />
    <span>{student.name} ({student.course}, {student.year})</span>
    <button onClick={() => handleViewStudentDetails(student.id)} className='bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md shadow-md ml-4'>View</button>
  </div>           
   <div className="space-x-2">
                <button
                  onClick={() => openStudentDialog(student)}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md shadow-md">
                  Update
                </button>
                <button
                  onClick={() => handleDeleteStudent(student.id)}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md shadow-md">
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>

        {/* Add New Student Button */}
        <Button
          variant="contained"
          color="primary"
          onClick={() => openStudentDialog()} // Open for adding a new student
          className="mt-8 px-4"
          style={{ marginTop: '2rem' }}>
          Add New Student
        </Button>
      </section>

      <Dialog open={isStudentDetailDialogOpen} onClose={() => setIsStudentDetailDialogOpen(false)} fullWidth maxWidth="sm">
      <DialogTitle>Student Details</DialogTitle>
      <DialogContent>
        {selectedStudent && (
          <div>
            <p><strong>ID:</strong> {selectedStudent.id}</p>
            <p><strong>Name:</strong> {selectedStudent.name}</p>
            <p><strong>College:</strong> {selectedStudent.college}</p>
            <p><strong>Roll Number:</strong> {selectedStudent.rollno}</p>
            <p><strong>Qualification:</strong> {selectedStudent.qualification}</p>
            <p><strong>Course:</strong> {selectedStudent.course}</p>
            <p><strong>Year:</strong> {selectedStudent.year}</p>
            <p><strong>Certificate:</strong> {selectedStudent.certificate}</p>
            <p><strong>Hall Ticket No:</strong> {selectedStudent.hallticketno}</p>
            <p><strong>Certificate ID:</strong> {selectedStudent.c_certi.id}</p>
            <p><strong>College ID:</strong> {selectedStudent.coll.college_id}</p>
          </div>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setIsStudentDetailDialogOpen(false)}>Close</Button>
      </DialogActions>
    </Dialog>


      {/* Student Dialog */}
      <Dialog open={isStudentDialogOpen} onClose={() => setIsStudentDialogOpen(false)} fullWidth maxWidth="sm">
        <DialogTitle>{currentStudent?.update ? 'Update Student' : 'Add New Student'}</DialogTitle>
        <DialogContent>
          <div className="grid grid-cols-1 gap-4">
            <TextField
              label="Id"
              type="number"
              fullWidth
              variant="outlined"
              value={currentStudent?.id || ''}
              disabled={currentStudent?.update} // Disable ID field for updating
              onChange={(e) => setCurrentStudent({ ...currentStudent, id: e.target.value })}
            />
            <TextField
              label="Name"
              fullWidth
              variant="outlined"
              value={currentStudent?.name || ''}
              onChange={(e) => setCurrentStudent({ ...currentStudent, name: e.target.value })}
            />
            <TextField
              label="College"
              fullWidth
              variant="outlined"
              value={currentStudent?.college || ''}
              onChange={(e) => setCurrentStudent({ ...currentStudent, college: e.target.value })}
            />
            <TextField
              label="Roll Number"
              fullWidth
              variant="outlined"
              value={currentStudent?.rollno || ''}
              onChange={(e) => setCurrentStudent({ ...currentStudent, rollno: e.target.value })}
            />
            <TextField
              label="Qualification"
              fullWidth
              variant="outlined"
              value={currentStudent?.qualification || ''}
              onChange={(e) => setCurrentStudent({ ...currentStudent, qualification: e.target.value })}
            />
            <TextField
              label="Course"
              fullWidth
              variant="outlined"
              value={currentStudent?.course || ''}
              onChange={(e) => setCurrentStudent({ ...currentStudent, course: e.target.value })}
            />
            <TextField
              label="Year"
              fullWidth
              variant="outlined"
              value={currentStudent?.year || ''}
              onChange={(e) => setCurrentStudent({ ...currentStudent, year: e.target.value })}
            />
            <TextField
              label="Certificate"
              fullWidth
              variant="outlined"
              value={currentStudent?.certificate || ''}
              onChange={(e) => setCurrentStudent({ ...currentStudent, certificate: e.target.value })}
            />
            <TextField
              label="Hall Ticket No"
              fullWidth
              variant="outlined"
              value={currentStudent?.hallticketno || ''}
              onChange={(e) => setCurrentStudent({ ...currentStudent, hallticketno: e.target.value })}
            />
            <TextField
              label="Certificate Id"
              fullWidth
              variant="outlined"
              value={currentStudent?.certificate_Id || ''}
              onChange={(e) => setCurrentStudent({ ...currentStudent, certificate_Id: e.target.value })}
            />
            <TextField
              label="College Id"
              fullWidth
              variant="outlined"
              value={currentStudent?.college_id || ''}
              onChange={(e) => setCurrentStudent({ ...currentStudent, college_id: e.target.value })}
            />
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setIsStudentDialogOpen(false)}>Cancel</Button>
          <Button onClick={handleAddStudent} color="primary" variant="contained">
            {currentStudent?.update ? 'Update Student' : 'Add Student'}
          </Button>
        </DialogActions>
      </Dialog>

      {/* Placements Section */}
      <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-4">Placements</h3>
        <ul className="space-y-4">
          {placements.map((placement) => (
            <li key={placement.id} className="p-4 bg-white shadow rounded-md flex justify-between items-center">
              <div className="flex items-center">
      <span>{placement.name} - {placement.college} ({placement.date})</span>
      <button
        onClick={() => handleViewPlacementDetails(placement.id)} // Call the view function
        className='bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md shadow-md ml-4'>
        View
      </button>
    </div>

              <div className="space-x-2">
                <button
                  onClick={() => openPlacementDialog(placement)}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md shadow-md"
                >
                  Update
                </button>
                <button
                  onClick={() => handleDeletePlacement(placement.id)}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md shadow-md"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>

        <Dialog open={isPlacementDetailDialogOpen} onClose={() => setIsPlacementDetailDialogOpen(false)} fullWidth maxWidth="sm">
        <DialogTitle>Placement Details</DialogTitle>
        <DialogContent>
          {selectedPlacement && (
            <div>
              <p><strong>ID:</strong> {selectedPlacement.id}</p>
              <p><strong>Name:</strong> {selectedPlacement.name}</p>
              <p><strong>College:</strong> {selectedPlacement.college}</p>
              <p><strong>Date:</strong> {selectedPlacement.date}</p>
              <p><strong>Qualification:</strong> {selectedPlacement.qualification}</p>
              <p><strong>Year:</strong> {selectedPlacement.year}</p>
              <p><strong>Job Description:</strong> {selectedPlacement.jd}</p>
              <p><strong>Expected LPA:</strong> {selectedPlacement.lpa}</p>
              <p><strong>Student ID:</strong> {selectedPlacement.stud_id}</p>
              <p><strong>Company ID:</strong> {selectedPlacement.com_id}</p>
            </div>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setIsPlacementDetailDialogOpen(false)}>Close</Button>
        </DialogActions>
      </Dialog>


        {/* Add New Placement Button */}
        <Button
          variant="contained"
          color="primary"
          onClick={() => openPlacementDialog()} // Open for adding a new placement
          className="mt-8 px-4"
          style={{ marginTop: '2rem' }}>
          Add New Placement
        </Button>
      </section>

      {/* Placement Dialog */}
      <Dialog open={isPlacementDialogOpen} onClose={() => setIsPlacementDialogOpen(false)} fullWidth maxWidth="sm">
        <DialogTitle>{currentPlacement?.update ? 'Update Placement' : 'Add New Placement'}</DialogTitle>
        <DialogContent>
          <div className="grid grid-cols-1 gap-4">
            <TextField
              label="Id"
              type="number"
              fullWidth
              variant="outlined"
              value={currentPlacement?.id || ''}
              disabled={currentPlacement?.update} // Disable ID field for updating
              onChange={(e) => setCurrentPlacement({ ...currentPlacement, id: e.target.value })}
            />
            <TextField
              label="Name"
              fullWidth
              variant="outlined"
              value={currentPlacement?.name || ''}
              onChange={(e) => setCurrentPlacement({ ...currentPlacement, name: e.target.value })}
            />
            <TextField
              label="College"
              fullWidth
              variant="outlined"
              value={currentPlacement?.college || ''}
              onChange={(e) => setCurrentPlacement({ ...currentPlacement, college: e.target.value })}
            />
            <TextField
              label="Date"
              fullWidth
              variant="outlined"
              value={currentPlacement?.date || ''}
              onChange={(e) => setCurrentPlacement({ ...currentPlacement, date: e.target.value })}
            />
            <TextField
              label="Qualification"
              fullWidth
              variant="outlined"
              value={currentPlacement?.qualification || ''}
              onChange={(e) => setCurrentPlacement({ ...currentPlacement, qualification: e.target.value })}
            />
            <TextField
              label="Year"
              fullWidth
              variant="outlined"
              value={currentPlacement?.year || ''}
              onChange={(e) => setCurrentPlacement({ ...currentPlacement, year: e.target.value })}
            />
            <TextField
              label="Student Id"
              fullWidth
              variant="outlined"
              value={currentPlacement?.stud_id || ''}
              onChange={(e) => setCurrentPlacement({ ...currentPlacement, stud_id: e.target.value })}
            />
            <TextField
              label="Company Id"
              fullWidth
              variant="outlined"
              value={currentPlacement?.com_id || ''}
              onChange={(e) => setCurrentPlacement({ ...currentPlacement, com_id: e.target.value })}
            />
            <TextField
              label="Job Description"
              fullWidth
              variant="outlined"
              value={currentPlacement?.jd || ''}
              onChange={(e) => setCurrentPlacement({ ...currentPlacement, jd: e.target.value })}
            />
            <TextField
              label="LPA"
              fullWidth
              variant="outlined"
              value={currentPlacement?.lpa || ''}
              onChange={(e) => setCurrentPlacement({ ...currentPlacement, lpa: e.target.value })}
            />
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setIsPlacementDialogOpen(false)}>Cancel</Button>
          <Button onClick={handleAddPlacement} color="primary" variant="contained">
            {currentPlacement?.update ? 'Update Placement' : 'Add Placement'}
          </Button>
        </DialogActions>
      </Dialog>
      </div>
      <Footer/>
    </div>
  );
};

export default CollegeDashboard;