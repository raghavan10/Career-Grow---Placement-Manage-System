package com.placement.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.placement.demo.model.ProxyPlacement;
import com.placement.demo.service.ProxyPlacementService;

@RestController
@RequestMapping("/proxyplacements")
public class ProxyPlacementController {

    @Autowired
    private ProxyPlacementService proxyPlacementService;

    // Get all placements
    @GetMapping
    public List<ProxyPlacement> getAllPlacements() {
        return proxyPlacementService.getAllPlacements();
    }

    // Get placement by ID
    @GetMapping("/{id}")
    public ResponseEntity<ProxyPlacement> getPlacementById(@PathVariable Integer id) {
        Optional<ProxyPlacement> placement = proxyPlacementService.getPlacementById(id);
        return placement.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    // Add new placement
    @PostMapping
    public ProxyPlacement addPlacement(@RequestBody ProxyPlacement placement) {
        return proxyPlacementService.addPlacement(placement);
    }

    // Update placement by ID
    @PutMapping("/{id}")
    public ResponseEntity<ProxyPlacement> updatePlacement(@PathVariable Integer id, @RequestBody ProxyPlacement placementDetails) {
        ProxyPlacement updatedPlacement = proxyPlacementService.updatePlacement(id, placementDetails);
        return updatedPlacement != null ? ResponseEntity.ok(updatedPlacement) : ResponseEntity.notFound().build();
    }

    // Delete placement by ID
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePlacement(@PathVariable Integer id) {
        proxyPlacementService.deletePlacement(id);
        return ResponseEntity.noContent().build();
    }
}
