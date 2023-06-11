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
- gender
- dateOfBirth
- guardian
- contactNo
- emergencyContactNo
- email
- presentAddress
- permanentAddress
- academicSemester

### admin

- id
- name
  - firstname
  - middlename
  - lastname
- gender
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
- gender
- dateOfBirth
- guardian
- contactNo
- emergencyContactNo
- department
- faculty
- designation

### academic semester

- title - Autumn | Summer | Fall
- year -2023
- code - 01|02|03
- startMonth - January
- endMonth - May
