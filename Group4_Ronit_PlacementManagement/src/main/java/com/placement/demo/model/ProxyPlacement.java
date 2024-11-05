package com.placement.demo.model;

import java.time.LocalDate;



import jakarta.persistence.Entity;
//import jakarta.persistence.GeneratedValue;
//import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
public class ProxyPlacement {
	@Id
	private Integer id;
	private String name;
	private String college;
	private LocalDate date;
	private String qualification;
	private Integer year;
	private Integer stud_id;
	private Integer com_id;
	private String jd;
	private Integer lpa;
	private Boolean isupdate; 
	
	
	public ProxyPlacement() {
		super();
	}


	public ProxyPlacement(Integer id, String name, String college, LocalDate date, String qualification, Integer year,
			Integer stud_id, Integer com_id, String jd, Integer lpa, Boolean isupdate) {
		super();
		this.id = id;
		this.name = name;
		this.college = college;
		this.date = date;
		this.qualification = qualification;
		this.year = year;
		this.stud_id = stud_id;
		this.com_id = com_id;
		this.jd = jd;
		this.lpa = lpa;
		this.isupdate = isupdate;
	}


	public Boolean getUpdate() {
		return isupdate;
	}


	public void setUpdate(Boolean update) {
		this.isupdate = update;
	}


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


	public String getCollege() {
		return college;
	}


	public void setCollege(String college) {
		this.college = college;
	}


	public LocalDate getDate() {
		return date;
	}


	public void setDate(LocalDate date) {
		this.date = date;
	}


	public String getQualification() {
		return qualification;
	}


	public void setQualification(String qualification) {
		this.qualification = qualification;
	}


	public Integer getYear() {
		return year;
	}


	public void setYear(Integer year) {
		this.year = year;
	}


	public Integer getStud_id() {
		return stud_id;
	}


	public void setStud_id(Integer stud_id) {
		this.stud_id = stud_id;
	}


	public Integer getCom_id() {
		return com_id;
	}


	public void setCom_id(Integer com_id) {
		this.com_id = com_id;
	}


	public String getJd() {
		return jd;
	}


	public void setJd(String jd) {
		this.jd = jd;
	}


	public Integer getLpa() {
		return lpa;
	}


	public void setLpa(Integer lpa) {
		this.lpa = lpa;
	}
	
	

		
}
