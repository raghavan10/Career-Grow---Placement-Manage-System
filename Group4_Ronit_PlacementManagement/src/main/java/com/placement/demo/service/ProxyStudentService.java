package com.placement.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.placement.demo.model.ProxyStudent;
import com.placement.demo.repository.ProxyStudentRepository;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class ProxyStudentService {

    @Autowired
    private ProxyStudentRepository proxyStudentRepository;

    // Get all proxy students
    public List<ProxyStudent> getAllProxyStudents() {
        return proxyStudentRepository.findAll();
    }

    // Get a proxy student by ID
    public Optional<ProxyStudent> getProxyStudentById(Integer id) {
        return proxyStudentRepository.findById(id);
    }

    // Add a new proxy student
    public ProxyStudent addProxyStudent(ProxyStudent proxyStudent) {
        return proxyStudentRepository.save(proxyStudent);
    }

    // Update an existing proxy student
    public ProxyStudent updateProxyStudent(ProxyStudent proxyStudent) {
        return proxyStudentRepository.save(proxyStudent);
    }

    // Delete a proxy student by ID
    public void deleteProxyStudent(Integer id) {
        proxyStudentRepository.deleteById(id);
    }
}
