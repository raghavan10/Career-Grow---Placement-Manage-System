package com.tnsif.placement.demo;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

import java.util.Arrays;
import java.util.List;
import java.util.Optional; // Import Optional

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
public class CollegeServices {
	class CollegeService{
	    private int id;
	    private String collegeAdmin;
	    private String collegeName;
	    private String location;

	    // Constructor
	    public CollegeService(int id, String collegeAdmin, String collegeName, String location) {
	        this.id = id;
	        this.collegeAdmin = collegeAdmin;
	        this.collegeName = collegeName;
	        this.location = location;
	    }

	    // Getters
	    public int getId() { return id; }
	    public String getCollegeAdmin() { return collegeAdmin; }
	    public String getCollegeName() { return collegeName; }
	    public String getLocation() { return location; }
	}

	// Mock repository to simulate data operations
	interface CollegeServiceRepository {
	    List<CollegeService> findAll();
	    Optional<CollegeService> findById(int id);
	    void save(CollegeService college);
	    void deleteById(int id);
	}

	// Service class for CollegeService
	class CollegeServiceService {
	    private CollegeServiceRepository repo;

	    public CollegeServiceService(CollegeServiceRepository repo) {
	        this.repo = repo;
	    }

	    public List<CollegeService> listAll() {
	        return repo.findAll();
	    }

	    public CollegeService get(int id) {
	        return repo.findById(id).orElse(null);
	    }

	    public void save(CollegeService college) {
	        repo.save(college);
	    }

	    public void delete(int id) {
	        repo.deleteById(id);
	    }
	}

	class CollegeServiceTests {
	    @Mock
	    private CollegeServiceRepository repo;

	    @InjectMocks
	    private CollegeServiceService serv;

	    private CollegeService college;

	    @SuppressWarnings("deprecation")
		@BeforeEach
	    void setUp() {
	        MockitoAnnotations.initMocks(this);
	        college = new CollegeService(1, "Dr. Smith", "Oxford University", "London");
	    }

	    @Test
	    void testListAll() {
	        List<CollegeService> colleges = Arrays.asList(college);
	        when(repo.findAll()).thenReturn(colleges);

	        List<CollegeService> result = serv.listAll();
	        assertEquals(1, result.size());
	        verify(repo, times(1)).findAll();
	    }

	    @Test
	    void testGetCollegeById() {
	        when(repo.findById(1)).thenReturn(Optional.of(college));

	        CollegeService found = serv.get(1);
	        assertNotNull(found);
	        assertEquals("Dr. Smith", found.getCollegeAdmin());
	        verify(repo, times(1)).findById(1);
	    }

	    @Test
	    void testCreateCollege() {
	        serv.save(college);
	        verify(repo, times(1)).save(college);
	    }

	    @Test
	    void testUpdateCollege() {
	        serv.save(college);
	        verify(repo, times(1)).save(college);
	    }

	    @Test
	    void testDeleteCollege() {
	        serv.delete(1);
	        verify(repo, times(1)).deleteById(1);
	    }

	    @Test
	    void testGetCollegeById_NotFound() {
	        int invalidId = 99;
	        when(repo.findById(invalidId)).thenReturn(Optional.empty());

	        CollegeService notFound = serv.get(invalidId);
	        assertNull(notFound, "Expected null when college is not found");
	        verify(repo, times(1)).findById(invalidId);
	    }
	}

}
