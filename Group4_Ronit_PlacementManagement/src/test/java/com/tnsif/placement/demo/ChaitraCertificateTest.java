package com.tnsif.placement.demo;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;

import org.junit.jupiter.api.Assumptions;
import org.junit.jupiter.api.Test;

import com.placement.demo.model.ChaitraCertificate;

public class ChaitraCertificateTest {

	// Test for the parameterized constructor and getter methods
    @Test
    void testParameterizedConstructorAndGetters() {
        
        ChaitraCertificate certificate = new ChaitraCertificate(1,2025,"Don Bosco",701);

        // Assume the id is generated automatically, so we cannot check it right after creation
        assertNotNull(certificate.getId()); // Verify that id is not null
        assertEquals(1, certificate.getId()); // Checking ID
		assertEquals(2025,certificate.getYear()); // Checking year
        assertEquals("Don Bosco", certificate.getCollege()); // Checking College
        //assertEquals(701, certificate.getCollege_Id());
        //assertEquals(21, certificate.getStudent_Id());

        System.out.println("testParameterizedConstructorAndGetters passed successfully.");
    }

    // Test for the setter methods
    @Test
    void testSetters() {
        ChaitraCertificate certificate = new ChaitraCertificate();
        //Mall mall = new Mall(); // Create a new Mall instance
        certificate.setId(2);
        certificate.setYear(2023);
        certificate.setCollege("RV college");
        //certificate.setCollege_id(702);
        //certificate.setStudent_id(22);

        
        //shopOwner.setMall(mall);

        assertEquals(2, certificate.getId()); // Checking ID
        assertEquals("RV college", certificate.getCollege()); // Checking College
        assertEquals(2023, certificate.getYear()); // Checking Year
        //assertEquals(702,certificate.getCollege_id());
        //assertEquals(702,certificate.getStudent_id());

        System.out.println("testSetters passed successfully.");
    }
    
    // Test for asserting not null
    @Test
    void testAssertNotNull() {
    	ChaitraCertificate certificate = new ChaitraCertificate(1,2025,"Don Bosco",701);
    	assertNotNull(certificate.getId()); // Check if ID is not null
        assertNotNull(certificate.getCollege()); // Check if College is not null
        assertNotNull(certificate.getYear());// Check if Year is not null
        //assertNotNull(certificate.getCollege_id());
        //assertNotNull(certificate.getStudent_id());
        System.out.println("test AssertNotNull passed successfully; id is not null.");
    }

    // Test for asserting null (if applicable)
    @Test
    void testAssertNull() {
    	ChaitraCertificate certificate = new ChaitraCertificate(1,2025,null,701);
        assertNull(certificate.getCollege()); // Check if College is null
        //assertNull(certificate.getCollege_id());// Check if Year is null
        //assertNull(certificate.getStudent_id());
        System.out.println("testAssertNull passed successfully; shop owner name is null.");
    }

    // Test for asserting false
    @Test
    void testAssertFalse() {
        
    	ChaitraCertificate certificate = new ChaitraCertificate(101,2025,"Don Bosco",701);
        assertFalse(certificate.getCollege().contains("Z"));
        System.out.println("testAssertFalse passed successfully; college name does not contain 'Z'.");
    }
    
    @Test
    void testAssumeTrue() {
    	ChaitraCertificate certificate = new ChaitraCertificate(101,2025,"Don Bosco",701);
        
    	// Assumption for ID
        Assumptions.assumeTrue(certificate.getId() == 101, "Assumption passed: ID is 101");

        // Assumption for College
        Assumptions.assumeTrue("Don Bosco".equals(certificate.getCollege()), "Assumption passed: College is 'Don Bosco'");

        // Assumption for Year
        Assumptions.assumeTrue(certificate.getYear() == 2025, "Assumption passed: Year is 2025");

    }

}

