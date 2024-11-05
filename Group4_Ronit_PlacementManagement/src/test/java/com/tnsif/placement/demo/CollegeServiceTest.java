package com.tnsif.placement.demo;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;

import org.junit.jupiter.api.Assumptions;
import org.junit.jupiter.api.Test;

import com.placement.demo.model.SahanaSACollege;

public class CollegeServiceTest {
	// Test for the parameterized constructor and getter methods
//	private CollegeServices CollegeService;
    @Test
    void testParameterizedConstructorAndGetters() {
        SahanaSACollege collegeService = new SahanaSACollege(1, "Dr. Smith", "Oxford University", "London",201);

        assertEquals(1, collegeService.getCollege_id()); // Checking ID
        assertEquals("Dr. Smith", collegeService.getCollegeAdmin()); // Checking CollegeAdmin
        assertEquals("Oxford University", collegeService.getCollegeName()); // Checking CollegeName
        assertEquals("London", collegeService.getLocation()); // Checking location

        System.out.println("testParameterizedConstructorAndGetters passed successfully.");
    }

    // Test for the setter methods
    @Test
    void testSetters() {
    	SahanaSACollege collegeService = new SahanaSACollege();
        collegeService.setCollege_id(2);;
        collegeService.setCollegeAdmin("Dr. John");
        collegeService.setCollegeName("Harvard University");
        collegeService.setLocation("Boston");

        assertEquals(2, collegeService.getCollege_id()); // Checking ID
        assertEquals("Dr. John", collegeService.getCollegeAdmin()); // Checking CollegeAdmin
        assertEquals("Harvard University", collegeService.getCollegeName()); // Checking CollegeName
        assertEquals("Boston", collegeService.getLocation()); // Checking location

        System.out.println("testSetters passed successfully.");
    }

    // Test for asserting not null
    @Test
    void testAssertNotNull() {
    	SahanaSACollege collegeService = new SahanaSACollege(3, "Dr. Emily", "Stanford University", "California",null);

        assertNotNull(collegeService.getCollege_id()); // Check if ID is not null
        assertNotNull(collegeService.getCollegeAdmin()); // Check if CollegeAdmin is not null
        assertNotNull(collegeService.getCollegeName()); // Check if CollegeName is not null
        assertNotNull(collegeService.getLocation()); // Check if location is not null

        System.out.println("testAssertNotNull passed successfully.");
    }

    // Test for asserting null (if applicable)
    @Test
    void testAssertNull() {
    	SahanaSACollege collegeService = new SahanaSACollege(4, null, null, null,null);

        assertNull(collegeService.getCollegeAdmin()); // Check if CollegeAdmin is null
        assertNull(collegeService.getCollegeName()); // Check if CollegeName is null
        assertNull(collegeService.getLocation()); // Check if location is null

        System.out.println("testAssertNull passed successfully.");
    }

    // Test for asserting false
    @Test
    void testAssertFalse() {
    	SahanaSACollege collegeService = new SahanaSACollege(5, "Dr. Richard", "Cambridge University", "Cambridge",null);

        assertFalse(collegeService.getCollegeName().contains("XYZ")); // Check if CollegeName doesn't contain "XYZ"
        System.out.println("testAssertFalse passed successfully; CollegeName does not contain 'XYZ'.");
    }

    // Test for assumeTrue
    @Test
    void testAssumeTrue() {
    	SahanaSACollege collegeService = new SahanaSACollege(6, "Dr. Kevin", "MIT", "Massachusetts",null);

        // Assumptions for ID and other fields
        Assumptions.assumeTrue(collegeService.getCollege_id() == 6, "Assumption passed: ID is 6");
        Assumptions.assumeTrue("Dr. Kevin".equals(collegeService.getCollegeAdmin()), "Assumption passed: CollegeAdmin is 'Dr. Kevin'");
        Assumptions.assumeTrue("MIT".equals(collegeService.getCollegeName()), "Assumption passed: CollegeName is 'MIT'");
        Assumptions.assumeTrue("Massachusetts".equals(collegeService.getLocation()), "Assumption passed: location is 'Massachusetts'");

        System.out.println("testAssumeTrue passed successfully.");
    }

}

