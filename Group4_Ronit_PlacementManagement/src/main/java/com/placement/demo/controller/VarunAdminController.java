package com.placement.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.placement.demo.model.ApprovalRequest;
import com.placement.demo.model.VarunAdmin;
import com.placement.demo.service.ApproveReqService;
import com.placement.demo.service.VarunAdminService;

@RestController
@RequestMapping("/admin")
public class VarunAdminController {

    @Autowired
    private VarunAdminService adminService;

    @Autowired
    private ApproveReqService approveReqService;  // Inject the ApproveReqService

    // Retrieve all Admins
    @GetMapping
    public List<VarunAdmin> list() {
        return adminService.listAll();
    }

    // Retrieve Admin by Id
    @GetMapping("/{id}")
    public ResponseEntity<VarunAdmin> get(@PathVariable Integer id) {
        try {
        	VarunAdmin admin = adminService.get(id);
            return new ResponseEntity<VarunAdmin>(admin, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<VarunAdmin>(HttpStatus.NOT_FOUND);
        }
    }

    // Create Admin
    @PostMapping
    public void add(@RequestBody VarunAdmin admin) {
        adminService.create(admin);
    }

    // Update Admin
    @PutMapping("/{id}")
    public ResponseEntity<?> update(@RequestBody VarunAdmin admin, @PathVariable Integer id) {
        try {
        	VarunAdmin existingAdmin = adminService.get(id);  // Find existing Admin by ID
            admin.setId(id);  // Make sure the ID is the same
            adminService.create(admin);  // Update the Admin record
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    // Delete Admin
    @DeleteMapping(value = "/{id}", consumes = "application/json")
    public ResponseEntity<Void> delete(@PathVariable Integer id) {
        try {
            adminService.delete(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    // Approve or Reject Request
    @PutMapping("/approveRequest/{id}")
    public ResponseEntity<?> approveRequest(@PathVariable int id, @RequestParam boolean approve) {
        ApprovalRequest request = approveReqService.get(id);  // Use instance of ApproveReqService
        if (request == null) {
            return new ResponseEntity<>("Request not found", HttpStatus.NOT_FOUND);
        }
        if (approve) {
            request.setStatus("APPROVED");
            // Handle the action based on the request type (add/delete student, grant view permission, etc.)
        } else {
            request.setStatus("REJECTED");
        }
        approveReqService.save(request);  // Use instance method to save the request
        return ResponseEntity.ok("Request has been " + (approve ? "approved" : "rejected"));
    }
}
