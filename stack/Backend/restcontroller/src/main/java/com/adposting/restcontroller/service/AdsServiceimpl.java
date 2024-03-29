package com.adposting.restcontroller.service;

import com.adposting.restcontroller.entity.Ads;
import com.adposting.restcontroller.entity.AdsRespository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;


@Service
@Transactional
public class AdsServiceimpl implements AdsService{

@Autowired
private AdsRespository adsRespository;

@Override
public Ads createAds(Ads ads) {
    return adsRespository.save(ads);
}
@Override
public Ads getAdsById(int adId) {
    if (adsRespository.findAdsByAdId(adId) != null) {
        return adsRespository.findAdsByAdId(adId);
    } else {
        return null;
    }
}



    @Override
    public Ads UpdateAds(Ads ads) {
    Ads adsUpdate = this.adsRespository.findAdsByAdId(ads.getAdId());
    if (adsUpdate != null) {
//       adsUpdate.setId(ads.getId());
       adsUpdate.setAdCategory(ads.getAdCategory());
       adsUpdate.setPhoneNumber(ads.getPhoneNumber());
       adsUpdate.setPrice(ads.getPrice());
       adsUpdate.setSpecification(ads.getSpecification());
       adsUpdate.setDistrict(ads.getDistrict());
         adsUpdate.setOwnerDiscription(ads.getOwnerDiscription());
        adsRespository.save(adsUpdate);
        return adsUpdate;
    } else {
        return null;
    }
}


@Override
public void deleteAds(int adId  ) {
    if (adsRespository.findAdsByAdId(adId) != null) {
        adsRespository.delete(adsRespository.findAdsByAdId(adId));
    }
}

    @Override
    public List<Ads> getAllAds() {
        return adsRespository.findAll();
    }

    @Override
    public List<Ads> findByAd_category(String Ad_category) {
    Optional<Optional<Ads>> adsDb = Optional.ofNullable(this.adsRespository.findByAdCategory(Ad_category));
        return (List<Ads>) adsDb.get().get();
    }

// want get userAds by user_id
}
