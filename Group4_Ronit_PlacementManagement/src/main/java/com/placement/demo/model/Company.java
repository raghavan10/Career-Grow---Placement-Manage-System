package com.placement.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Company {
	@Id
	private Integer id;
	private String name;
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public Company(Integer id, String name) {
		super();
		this.id = id;
		this.name = name;
	}
	public Company() {
		super();
	}
	
	

}
