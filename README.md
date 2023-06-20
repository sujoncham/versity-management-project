# versity-management-project

## Project Model

### permission

- title

### user permission

- permissionId
- userId

### user

- id
- role
- password
- createdAt
- updatedAt
- studentId || adminId || facultyId

### student

- id
- name
  - firstname
  - middlename
  - lastname
- gender -> enum -> male || female
- dateOfBirth
- guardian
- contactNo
- emergencyContactNo
- email
- presentAddress
- permanentAddress
- bloodGroup -> enum -> o+||A+||B+
- guardian
  - fathername
  - fatherOccupation
  - fatherContact
  - mothername
  - motherOccupation
  - motherContact
  - address
- localGuardian
  - name
  - occupation
  - address
- academicSemester Id
- academicDepartment Id
- academicFaculty Id

### admin

- id
- name
  - firstname
  - middlename
  - lastname
- gender -> enum -> male || female
- dateOfBirth
- guardian
- contactNo
- emergencyContactNo
- email
- department
- designation

### faculty

- id
- name
  - firstname
  - middlename
  - lastname
- gender -> enum -> male || female
- dateOfBirth
- email
- contactNo
- emergencyContactNo
- presentAddress
- permanentAddress
- bloodGroup -> enum -> o+||A+||B+
- designation
- department name
- faculty name

### academic semester

- title - Autumn | Summer | Fall
- year -2023
- code - 01|02|03
- startMonth - January
- endMonth - May

### academin department

- title - department title
- academic faculty- refId
