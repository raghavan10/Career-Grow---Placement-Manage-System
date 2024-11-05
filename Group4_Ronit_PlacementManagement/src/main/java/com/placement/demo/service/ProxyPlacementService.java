package com.placement.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.placement.demo.model.ProxyPlacement;
import com.placement.demo.repository.ProxyPlacementRepository;

@Service
public class ProxyPlacementService {

    @Autowired
    private ProxyPlacementRepository proxyPlacementRepository;

    // Get all placements
    public List<ProxyPlacement> getAllPlacements() {
        return proxyPlacementRepository.findAll();
    }

    // Get placement by ID
    public Optional<ProxyPlacement> getPlacementById(Integer id) {
        return proxyPlacementRepository.findById(id);
    }

    // Add new placement
    public ProxyPlacement addPlacement(ProxyPlacement placement) {
        return proxyPlacementRepository.save(placement);
    }

    // Update placement by ID
    public ProxyPlacement updatePlacement(Integer id, ProxyPlacement placementDetails) {
        Optional<ProxyPlacement> optionalPlacement = proxyPlacementRepository.findById(id);
        if (optionalPlacement.isPresent()) {
            ProxyPlacement placement = optionalPlacement.get();
            placement.setName(placementDetails.getName());
            placement.setCollege(placementDetails.getCollege());
            placement.setDate(placementDetails.getDate());
            placement.setQualification(placementDetails.getQualification());
            placement.setYear(placementDetails.getYear());
            placement.setStud_id(placementDetails.getStud_id());
            placement.setCom_id(placementDetails.getCom_id());
            placement.setJd(placementDetails.getJd());
            placement.setLpa(placementDetails.getLpa());
            placement.setUpdate(placementDetails.getUpdate());
            return proxyPlacementRepository.save(placement);
        }
        return null;
    }

    // Delete placement by ID
    public void deletePlacement(Integer id) {
        proxyPlacementRepository.deleteById(id);
    }
}
