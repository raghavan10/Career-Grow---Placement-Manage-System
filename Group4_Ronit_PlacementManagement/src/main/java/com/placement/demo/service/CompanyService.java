package com.placement.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.placement.demo.model.Company;
import com.placement.demo.repository.CompanyRepository;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class CompanyService {

    @Autowired
    private CompanyRepository companyRepository;

    // Get all companies
    public List<Company> getAllCompanies() {
        return companyRepository.findAll();
    }

    // Get company by ID
    public Optional<Company> getCompanyById(Integer id) {
        return companyRepository.findById(id);
    }

    // Add new company
    public Company addCompany(Company company) {
        return companyRepository.save(company);
    }

    // Update company by ID
    public Company updateCompany(Integer id, Company companyDetails) {
        Optional<Company> optionalCompany = companyRepository.findById(id);
        if (optionalCompany.isPresent()) {
            Company company = optionalCompany.get();
            company.setName(companyDetails.getName());
            return companyRepository.save(company);
        }
        return null;
    }

    // Delete company by ID
    public void deleteCompany(Integer id) {
        companyRepository.deleteById(id);
    }
}
