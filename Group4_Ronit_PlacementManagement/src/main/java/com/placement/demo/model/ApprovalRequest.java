package com.placement.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class ApprovalRequest {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String requestType; // e.g., ADD_STUDENT, DELETE_STUDENT, VIEW_PERMISSIONS
    private String requestDetails; // More info about the request (e.g., student info, college info)
    private String status; // PENDING, APPROVED, REJECTED
    private String requestedBy; // COLLEGE, COMPANY
    private String approvalType; // VIEW, POST, DELETE
	public ApprovalRequest(int id, String requestType, String requestDetails, String status, String requestedBy,
			String approvalType) {
		super();
		this.id = id;
		this.requestType = requestType;
		this.requestDetails = requestDetails;
		this.status = status;
		this.requestedBy = requestedBy;
		this.approvalType = approvalType;
	}
	public ApprovalRequest() {
		super();
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getRequestType() {
		return requestType;
	}
	public void setRequestType(String requestType) {
		this.requestType = requestType;
	}
	public String getRequestDetails() {
		return requestDetails;
	}
	public void setRequestDetails(String requestDetails) {
		this.requestDetails = requestDetails;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public String getRequestedBy() {
		return requestedBy;
	}
	public void setRequestedBy(String requestedBy) {
		this.requestedBy = requestedBy;
	}
	public String getApprovalType() {
		return approvalType;
	}
	public void setApprovalType(String approvalType) {
		this.approvalType = approvalType;
	}
    
    // Constructor, Getters, and Setters
    
    
}

