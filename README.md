 # Career Grow

## Overview
**Career Grow** is a placement management system designed to facilitate communication and management between colleges and companies. The platform allows admins, colleges, and companies to interact seamlessly to manage student details and schedule placement drives.

**Note** - "Group4_Ronit_PlacementManagement" folder consists of the complete Java Spring Boot backend 

## Features
- **Admin Dashboard**: 
  - Manage operational permissions for colleges and companies.
  - Accept or reject college and company requests.
  - Oversee student details and placement drives.
  
- **College Dashboard**: 
  - Manage student information and enroll students for placements.
  - View and handle placement requests from companies.
  - Submit requests to the admin for actions.

- **Company Dashboard**: 
  - View college details and student profiles.
  - Access students’ certificates upon admin approval.
  - Submit requests to the admin for actions.

## Architecture
- **Frontend**: Developed using React.js for a responsive and dynamic user experience. Key components include:
  - NavBar: A separate component for navigation across the app.
  - Footer: A separate component for the footer section.
  
- **Backend**: Built with Java Spring Boot, integrating with an SQL database to handle data management and API requests. Key entities include:
  - `VarunAdmin`: Handles admin operations.
  - `RahulUser`: Stores user information.
  - `SahanaSACollege`: Contains details about colleges.
  - `Company`: Represents company profiles.
  - `RonitPlacement`: Manages placement details.

## Getting Started

### Prerequisites
- Java Development Kit (JDK)
- Node.js and npm
- SQL Database (MySQL/PostgreSQL)
- Git

### Installation

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd career-grow

2. **Set Up the Backend**

- Navigate to the backend directory:
    ```bash
    cd backend
    ```
- Run the Spring Boot application:
    ```bash
    ./mvnw spring-boot:run
    ```

3. **Set Up the Frontend**

- Navigate to the frontend directory:
    ```bash
    cd frontend
    ```

- Install dependencies:
    ```bash
    npm install
    ```

- Run the React application:
    ```bash
    npm start
    ```

## Usage
- Access the admin, college, and company dashboards via the respective URLs provided in your frontend application.
- Use the admin dashboard to manage colleges and companies.
- Colleges can add student information and request permissions.
- Companies can view college and student information after obtaining admin approval.

## Contribution
Contributions are welcome! If you have suggestions for improvements or features, please feel free to open an issue or submit a pull request.

## License
This project is licensed under the MIT License. See the LICENSE file for more details.

## Contact
For inquiries, please contact Ronit V Raghavan.
