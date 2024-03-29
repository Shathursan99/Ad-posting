package com.adposting.restcontroller.service;

import com.adposting.restcontroller.entity.Ads;
import org.springframework.stereotype.Service;

import java.util.List;


public interface AdsService {
  Ads createAds(Ads ads);
  Ads getAdsById(int adId);
    Ads UpdateAds(Ads ads);
    void deleteAds(int adId);
    List<Ads> getAllAds();
  List<Ads> findByAd_category(String ad_category);
}
