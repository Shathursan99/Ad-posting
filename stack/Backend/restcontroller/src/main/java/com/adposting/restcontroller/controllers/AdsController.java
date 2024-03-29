package com.adposting.restcontroller.controllers;

import com.adposting.restcontroller.entity.Ads;
import com.adposting.restcontroller.service.AdsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
//@RequestMapping("/ads")
public class AdsController {

    @Autowired
    private AdsService adsService;

    @GetMapping("/ads")
    public ResponseEntity<List<Ads>> getAllAds() {
        return ResponseEntity.ok().body(adsService.getAllAds());
    }


    @GetMapping("/ads/{adId}")
    public ResponseEntity<Ads> getAdsById(@PathVariable int adId) {
        Ads ads = adsService.getAdsById(adId);
        if (ads != null) {
            return ResponseEntity.ok().body(ads);
        } else {
            throw new RuntimeException("Ads id not found - " + adId);
        }
    }

    @GetMapping("/ads/category/{ad_category}")
    public ResponseEntity<List<Ads>> getAdsByCategory(@PathVariable String ad_category) {
        List<Ads> ads = adsService.findByAd_category(ad_category);
        if (ads != null) {
            return ResponseEntity.ok().body(ads);
        } else {
            throw new RuntimeException("Ads id not found - " + ad_category);
        }
    }

    @PostMapping("/ads")
    public ResponseEntity<Ads> createAds(@RequestBody Ads ads) {
        return ResponseEntity.ok().body(this.adsService.createAds(ads));
    }

    @PutMapping("/ads/{AdId}")
    public ResponseEntity<Ads> updateAds(@PathVariable int adId, @RequestBody Ads ads) {
        ads.setAdId(adId);
        return ResponseEntity.ok().body(this.adsService.UpdateAds(ads));
    }

    @DeleteMapping("/ads/{AdId}")
    public ResponseEntity<?> deleteAds(@PathVariable int adId) {
        this.adsService.deleteAds(adId);
        return ResponseEntity.ok().build();
    }

}
