package net.project.emp.service;

import net.project.emp.dto.EmployeeDto;
import net.project.emp.model.Employee;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface EmployeeService {
    EmployeeDto createEmployee(EmployeeDto employeeDto);

    EmployeeDto getEmployeeById(long employeeId);

    List<EmployeeDto> getAllEmployees();

    EmployeeDto UpdateEmployee(long employeeId, EmployeeDto updatedEmployee);

    void deleteEmployee(long employeeId);
}
