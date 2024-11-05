package com.placement.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.placement.demo.model.ProxyStudent;
import com.placement.demo.service.ProxyStudentService;

@RestController
@RequestMapping("/proxystudents")
public class ProxyStudentController {

    @Autowired
    private ProxyStudentService proxyStudentService;

    // Get all proxy students
    @GetMapping
    public List<ProxyStudent> getAllProxyStudents() {
        return proxyStudentService.getAllProxyStudents();
    }

    // Get a proxy student by ID
    @GetMapping("/{id}")
    public ResponseEntity<ProxyStudent> getProxyStudentById(@PathVariable Integer id) {
        Optional<ProxyStudent> proxyStudent = proxyStudentService.getProxyStudentById(id);
        return proxyStudent.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    // Add a new proxy student
    @PostMapping
    public ProxyStudent addProxyStudent(@RequestBody ProxyStudent proxyStudent) {
        return proxyStudentService.addProxyStudent(proxyStudent);
    }

    // Update an existing proxy student
    @PutMapping("/{id}")
    public ResponseEntity<ProxyStudent> updateProxyStudent(@PathVariable Integer id, @RequestBody ProxyStudent updatedProxyStudent) {
        Optional<ProxyStudent> existingProxyStudent = proxyStudentService.getProxyStudentById(id);
        if (existingProxyStudent.isPresent()) {
            updatedProxyStudent.setId(id); // Ensure the ID remains the same
            return ResponseEntity.ok(proxyStudentService.updateProxyStudent(updatedProxyStudent));
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // Delete a proxy student by ID
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteProxyStudent(@PathVariable Integer id) {
        Optional<ProxyStudent> existingProxyStudent = proxyStudentService.getProxyStudentById(id);
        if (existingProxyStudent.isPresent()) {
            proxyStudentService.deleteProxyStudent(id);
            return ResponseEntity.noContent().build(); // 204 No Content
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
