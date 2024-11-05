package com.placement.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.placement.demo.model.ApprovalRequest;
import com.placement.demo.repository.ApproveReqRepo;

@Service
@Transactional
public class ApproveReqService {
    
    @Autowired
    private ApproveReqRepo repository;  // Ensure that the repository is correctly injected

    // Save ApprovalRequest
    public void save(ApprovalRequest request) {
        repository.save(request);
    }

    // Get ApprovalRequest by ID
    public ApprovalRequest get(int id) {
        return repository.findById(id).orElse(null);  // Safely get the request or return null
    }
}
